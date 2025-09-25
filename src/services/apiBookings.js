import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase.from("bookings").select(
    `
    id,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    status,
    totalPrice,
    cabins(name),
    guests(fullName, email)
  `,
    { count: "exact" }
  );
  // Filter
  if (filter) query = query.eq(filter.field, filter.value);

  // sorting
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  // pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;
  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return { data, count };
}
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

import { startOfToday, addDays } from "date-fns";

function getTodayISO() {
  return startOfToday().toISOString();
}

function getTomorrowISO() {
  return addDays(startOfToday(), 1).toISOString();
}

export async function getStaysTodayActivity() {
  const today = getTodayISO();
  const tomorrow = getTomorrowISO();

  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `status.eq.unconfirmed.and(startDate.gte.${today},startDate.lt.${tomorrow}),
       status.eq.checked-in.and(endDate.gte.${today},endDate.lt.${tomorrow})`
    )
    .order("created_at");

  console.log("Today range:", today, tomorrow);
  console.log("Data:", data);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function updateBooking(id, obj) {
  // normalize id in case you pass the whole booking object
  const bookingId = typeof id === "object" ? id.bookingId : id;

  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", bookingId) // use the pure number here
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message || "Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}

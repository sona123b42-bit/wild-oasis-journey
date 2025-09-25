import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted!");
  }
}

export async function createEditCabin(newCabin, id) {
  // Check if image is an existing URL
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith?.(supabaseUrl);

  // Check if image is a File
  const isNewFile = typeof newCabin.image === "object" && newCabin.image?.name;

  // Build image name & path only if we have a new file
  let imageName, imagePath;
  if (isNewFile) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;
  }

  // Prepare row payload for your DB schema
  const row = {
    name: newCabin.name,
    maxCapacity: newCabin.maxCapacity,
    regularPrice: newCabin.regularPrice,
    discount: newCabin.discount ?? 0,
    description: newCabin.description, // ✅ matches your schema
  };

  // If creating, always include an image (URL or new file path if any)
  // If editing, include only if provided
  if (!id) {
    row.image = hasImagePath ? newCabin.image : imagePath ?? null;
  } else {
    if (hasImagePath) row.image = newCabin.image;
    if (isNewFile) row.image = imagePath;
    // If nothing passed, leave row.image undefined → won’t overwrite existing
  }

  // Insert or update
  let query = supabase.from("cabins");
  query = !id
    ? query.insert([row]).select().single()
    : query.update(row).eq("id", id).select().single();

  const { data, error } = await query;

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message); // show actual reason while debugging
  }

  // If no new file → done
  if (!isNewFile) return data;

  // Upload file
  const { error: storageError } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

  if (storageError) {
    // rollback DB insert if create failed due to image upload
    if (!id) await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Storage error:", storageError);
    throw new Error(
      "Cabin image could not be uploaded, and the cabin was not created."
    );
  }

  return data;
}

import styled from "styled-components";

import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";
import Stats from "./Stats";
import TodayActivity from "../check-in-out/TodayActivity";
import { useRecentBooking } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr !important;
  }
`;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
function DashboardLayout() {
  const { isLoading: isLoading1, bookings, numDays } = useRecentBooking();
  const { isLoading: isLoading2, confirmStayed } = useRecentStays();
  const { isLoading: isLoading3, cabins } = useCabins();
  console.log(confirmStayed);
  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <>
      <StatsGrid>
        <Stats
          bookings={bookings}
          confirmedStays={confirmStayed}
          numDays={numDays}
          cabinCount={cabins.length}
        />
      </StatsGrid>

      <StyledDashboardLayout>
        <TodayActivity />
        <DurationChart confirmedStays={confirmStayed} />
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;

import CheckoutButton from "../check-in-out/CheckoutButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import { Flag } from "../../ui/Flag";
import Tag from "../../ui/Tag";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  /* MOBILE FIX — make columns & gap smaller */
  @media (max-width: 900px) {
    grid-template-columns: 7rem 1.6rem 1fr 6rem 7rem;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 6rem 1.4rem 1fr 5rem 6rem;
    gap: 0.4rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
const Nights = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function TodayItem({ stay }) {
  const { id, status, guests, numNights } = stay;

  const statusToAction = {
    unconfirmed: {
      action: "arriving",
      tag: "green",
      button: (
        <Button
          variation="primary"
          size="small"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      ),
    },
    "checked-in": {
      action: "departing",
      tag: "blue",
      button: <CheckoutButton bookingId={id} />,
    },
    "checked-out": {
      action: "finished",
      tag: "gray",
      button: null,
    },
  };

  return (
    <StyledTodayItem>
      <Tag type={statusToAction[status].tag}>
        {statusToAction[status].action}
      </Tag>
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <Nights>{numNights} nights</Nights>

      {statusToAction[status].button}
    </StyledTodayItem>
  );
}

export default TodayItem;

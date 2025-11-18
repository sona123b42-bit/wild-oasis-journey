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

  @media (max-width: 1023px) {
    grid-template-columns: 11rem 2.4rem 1fr 8rem 10rem;
    gap: 1.6rem;
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 6rem 1.4rem 1fr 5rem 6rem;
    gap: 0.6rem;
    font-size: 1.2rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.2;

  @media (max-width: 1023px) {
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
const Nights = styled.div`
  font-size: 1.3rem;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
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

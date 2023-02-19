import React from "react";
import HeaderW from "../Header/Header";
import TicketsCard from "../TicketsCard/TicketsCard";

export default function AllTickets() {
  return (
    <div>
      <HeaderW caption={"Tickets"} />
      <TicketsCard />
    </div>
  );
}

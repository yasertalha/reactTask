import { createSelector } from "reselect";
const TicketBookState = (state) => state.get("TicketBook");

export const FetchedData = () =>
  createSelector(TicketBookState, (bstate) => bstate.get("data"));

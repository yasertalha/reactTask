import keymirror from "fbjs/lib/keyMirror";

export const TicketBookTypes = keymirror({
  BOOK_TICKET: null,
  SAVE_DATA: null,
});

export function StartbookTicket(details) {
  return { type: TicketBookTypes.BOOK_TICKET, payload: { details } };
}

import { put, all, call, takeLatest } from "redux-saga/effects";
import { TicketBookTypes } from "./actions";

export function* submitTicket({ payload }) {
  yield put({ type: TicketBookTypes.SAVE_DATA, payload: payload.details });
}
export default function* root() {
  yield all([takeLatest(TicketBookTypes.BOOK_TICKET, submitTicket)]);
}

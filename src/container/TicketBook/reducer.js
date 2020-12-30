import { InitialState } from "./initial";
import { TicketBookTypes } from "./actions";

function TicketBookReducer(state = InitialState, action) {
  switch (action.type) {
    case TicketBookTypes.SAVE_DATA: {
      return state.set("data", action.payload);
    }

    default:
      return state;
  }
}

export default TicketBookReducer;

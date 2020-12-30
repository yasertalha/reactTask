import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { injectReducer, injectSaga } from "redux-inject-reducer-and-saga";
import reducer from "./reducer";
import saga from "./saga";
import { createStructuredSelector } from "reselect";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { TicketDetails, Tabs } from "../initialState";
class TicketBook extends React.Component {
  state = {};

  TicketHeader(header) {
    return <div style={{ fontSize: "10" }}>{header}</div>;
  }
  handleChange = (e, stateName) => {
    this.setState({ [stateName]: e.target.value });
  };
  DropDown(list, stateName) {
    return (
      <div>
        <select
          value={this.state[stateName]}
          onChange={(e) => this.handleChange(e, stateName)}
        >
          {list.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
    );
  }
  bookNow = () => {
    this.props.bookTicket(Object.values(this.state));
    setTimeout(() => {
      console.log("data: " + JSON.stringify(this.props.getFetchedData));
    }, 2000);
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        {TicketDetails.map((e) => (
          <div style={{ margin: "auto" }} key={e.header}>
            {this.TicketHeader(e.header)}
            {this.DropDown(e.list, e.header)}
          </div>
        ))}
        <div style={{ margin: "auto" }}>
          <button
            type="button"
            style={{
              backgroundColor: "orange",
              outline: "0",
              width: "100px",
              height: "100px",
            }}
            onClick={this.bookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return createStructuredSelector({ getFetchedData: selectors.FetchedData() });
}

function mapDispatchToProps(dispatch) {
  return {
    bookTicket: (details) => dispatch(actions.StartbookTicket(details)),
  };
}

const withReducer = injectReducer({ key: "TicketBook", reducer: reducer });
const withSaga = injectSaga({ key: "TicketBook", saga: saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withReducer, withSaga, withConnect)(TicketBook);

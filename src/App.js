import "./App.css";
import { TicketDetails, Tabs } from "./container/initialState";
import MyCarousel from "./container/myCarosel";
function App() {
  return (
    <div class="container" style={{ height: "100%" }}>
      <Topic />
      <MainImg />
      <TicketBook />
      <TripPlanner />
    </div>
  );
}

export default App;
function TripPlnHeader() {
  return (
    <div class="col">
      <h1>Trip Planner</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
  );
}
function TripPlanner() {
  return (
    <div class="row">
      <TripPlnHeader />
      <MyCarousel />
    </div>
  );
}
function Topic() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Meritika</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {Tabs.map((e) => (
          <NavBtn name={e} />
        ))}
      </div>
      <h3>cart</h3>
    </div>
  );
}

function NavBtn(props) {
  return (
    <button
      type="button"
      style={{ backgroundColor: "white", border: "0px white", outline: "0" }}
    >
      <h5>{props.name}</h5>
    </button>
  );
}

function MainImg() {
  return (
    <div class="row">
      <img
        class=" mainImg"
        style={{
          maxWidth: "100%",
          height: "300px",
          padding: "0",
          margin: "0",
        }}
        src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="image"
      />
      <div class="centered">
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <h1>Quisque nislnisl eros</h1>
        <h5>
          pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus.
        </h5>
      </div>
    </div>
  );
}

function TicketBook() {
  return (
    <div style={{ display: "flex" }}>
      {TicketDetails.map((e) => (
        <div style={{ margin: "auto" }}>
          <TicketHeader header={e.header} />
          <DropDown list={e.list} mainList={e.mainList} />
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
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
function TicketHeader(props) {
  return <div style={{ fontSize: "10" }}>{props.header}</div>;
}
function DropDown(props) {
  return (
    <div class="dropdown">
      <button
        style={{ backgroundColor: "white", border: "0px white", outline: "0" }}
        class=" dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.mainList}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.list.map((e) => (
          <li>
            <a class="dropdown-item" href="#">
              {e}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

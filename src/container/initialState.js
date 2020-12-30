export const TicketDetails = [
  {
    header: "DESIGNATION",
    mainList: "",
    list: ["Select City", "Chennai", "Mumbai"],
  },
  {
    header: "Adults",
    mainList: 0,
    list: [0].concat(Array.from({ length: 5 }, (v, k) => k + 1)),
  },
  {
    header: "CHECK IN",
    mainList: "Select Date",
    list: [
      "Select Date",
      new Date().toDateString(),
      new Date().getDate() + 1,
      new Date().getDate() + 2,
    ],
  },
  {
    header: "CHECK OUT",
    mainList: "Select Date",
    list: [
      "Select Date",
      new Date().getDate() + 1,
      new Date().getDate() + 2,
      new Date().getDate() + 3,
    ],
  },
];
export const Tabs = ["Home", "About Us", "Facilities", "Contact Us"];

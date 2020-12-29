export const TicketDetails = [
  {
    header: "DESIGNATION",
    mainList: "Melbourne",
    list: ["Chennai", "Mumbai"],
  },
  {
    header: "Adults",
    mainList: 1,
    list: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  {
    header: "CHECK IN",
    mainList: new Date().toDateString(),
    list: [new Date().getDate() + 1, new Date().getDate() + 2],
  },
  {
    header: "CHECK OUT",
    mainList: new Date().getDate() + 1,
    list: [new Date().getDate() + 2, new Date().getDate() + 3],
  },
];
export const Tabs = ["Home", "About Us", "Facilities", "Contact Us"];

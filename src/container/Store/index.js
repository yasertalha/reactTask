import { configureStore } from "redux-inject-reducer-and-saga";
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore();
global.store = store;
export default store;

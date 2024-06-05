import { createStore } from "redux";
import reducers from "../reducer";

const store = createStore(
  reducers,
  {},
  //add middleware in store  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.dispatch);
export default store;

import { combineReducers } from "redux";
import customers from "./customers";
import customer_events from "./customer_events";

export default combineReducers({
  customersReducer: customers,
  customerEventsReducer: customer_events,
});

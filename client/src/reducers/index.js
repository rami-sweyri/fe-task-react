import { combineReducers } from "redux";
import customers from "./customers";
import events from "./events";
import customer_events from "./customer_events";
import sources from "./sources";
import customer from "./customer";

export default combineReducers({
  customersReducer: customers,
  eventsReducer: events,
  customerEventsReducer: customer_events,
  sourcesReducer: sources,
  customerReducer: customer,
});

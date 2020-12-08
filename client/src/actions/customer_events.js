import {
  READ_CUSTOMER_EVENTS,
  CUSTOMER_EVENT_ERROR,
  CLEAR_CUSTOMER_EVENTS,
  START_CUSTOMER_EVENTS_RELOAD,
  FINISHED_CUSTOMER_EVENTS_RELOAD,
} from "../types/customer_events";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const startCustomersEventsReload = () => (dispatch) => {
  dispatch({ type: START_CUSTOMER_EVENTS_RELOAD });
};

export const finishedCustomerEventsReload = () => (dispatch) => {
  dispatch({ type: FINISHED_CUSTOMER_EVENTS_RELOAD });
};

export const readCustomerEvents = (id) =>
  readItemsAsync({
    url: `http://localhost:5000/customers/${id}/events`,
    successType: READ_CUSTOMER_EVENTS,
    errorType: CUSTOMER_EVENT_ERROR,
    startReload: startCustomersEventsReload,
    finishedReload: finishedCustomerEventsReload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearCustomerEvent = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMER_EVENTS });
};

import { READ_EVENTS, EVENT_ERROR, CLEAR_EVENTS } from "../types/events";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const readEvents = () =>
  readItemsAsync({
    url: "http://localhost:5000/events",
    successType: READ_EVENTS,
    errorType: EVENT_ERROR,
    noReload: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearEvent = () => (dispatch) => {
  dispatch({ type: CLEAR_EVENTS });
};

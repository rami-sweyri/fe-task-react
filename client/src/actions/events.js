import {
  READ_EVENTS,
  EVENT_ERROR,
  CLEAR_EVENTS,
  START_EVENTS_RELOAD,
  FINISHED_EVENTS_RELOAD,
} from "../types/events";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const startEventsReload = () => (dispatch) => {
  dispatch({ type: START_EVENTS_RELOAD });
};

export const finishedEventsReload = () => (dispatch) => {
  dispatch({ type: FINISHED_EVENTS_RELOAD });
};

export const readEvents = () =>
  readItemsAsync({
    url: "http://localhost:5000/events",
    successType: READ_EVENTS,
    errorType: EVENT_ERROR,
    startReload: startEventsReload,
    finishedReload: finishedEventsReload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearEvent = () => (dispatch) => {
  dispatch({ type: CLEAR_EVENTS });
};

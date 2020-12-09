import { READ_EVENTS, CLEAR_EVENTS } from "../types/events";

const initialState = {
  events: [],
  error: {},
  loading: false,
  readable: false,
};

export default function events(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case READ_EVENTS:
      return {
        ...state,
        events: [...payload.events],
        readable: true,
      };

    case CLEAR_EVENTS:
      return {
        ...state,
        events: [],
        error: {},
        loading: false,
        readable: false,
      };

    default:
      return state;
  }
}

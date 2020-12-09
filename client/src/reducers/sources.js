import { READ_SOURCES, CLEAR_SOURCES } from "../types/sources";

const initialState = {
  sources: [],
  error: {},
  loading: false,
  readable: false,
};

export default function sources(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case READ_SOURCES:
      return {
        ...state,
        sources: [...payload.sources],
        readable: true,
      };

    case CLEAR_SOURCES:
      return {
        ...state,
        sources: [],
        error: {},
        loading: false,
        readable: false,
      };

    default:
      return state;
  }
}

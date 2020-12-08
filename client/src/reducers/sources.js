import {
  READ_SOURCES,
  CLEAR_SOURCES,
  START_SOURCES_RELOAD,
  FINISHED_SOURCES_RELOAD,
} from "../types/sources";

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

    case START_SOURCES_RELOAD:
      return {
        ...state,
        loading: true,
      };
    case FINISHED_SOURCES_RELOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

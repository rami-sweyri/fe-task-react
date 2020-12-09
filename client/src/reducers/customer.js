import {
  READ_ONE_CUSTOMER,
  READ_CUSTOMER_SOURCES,
  CLEAR_CUSTOMER_DETAIL,
} from "../types/customer";

const initialState = {
  customer: {},
  customer_sources: [],
  error: {},
  loading: false,
  readable: false,
};

export default function customerEvents(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case READ_ONE_CUSTOMER:
      return {
        ...state,
        customer: { ...payload.customer },
      };

    case READ_CUSTOMER_SOURCES:
      return {
        ...state,
        customer_sources: [...payload],
        readable: true,
      };

    case CLEAR_CUSTOMER_DETAIL:
      return {
        ...state,
        customer_sources: [],
        error: {},
        loading: false,
        readable: false,
      };

    default:
      return state;
  }
}

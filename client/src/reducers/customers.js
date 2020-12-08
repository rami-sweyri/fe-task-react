import {
  READ_CUSTOMERS,
  READ_ONE_CUSTOMER,
  CLEAR_CUSTOMERS,
  START_CUSTOMERS_RELOAD,
  FINISHED_CUSTOMERS_RELOAD,
} from "../types/customers";

const initialState = {
  customers: [],
  customer: {},
  error: {},
  loading: false,
  readable: false,
};

export default function customers(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case READ_CUSTOMERS:
      return {
        ...state,
        customers: [...payload.customers],
        readable: true,
      };
    case READ_ONE_CUSTOMER:
      return {
        ...state,
        customer: { ...payload.customer },
      };

    case CLEAR_CUSTOMERS:
      return {
        ...state,
        customers: [],
        customer: {},
        error: {},
        loading: false,
        readable: false,
      };

    case START_CUSTOMERS_RELOAD:
      return {
        ...state,
        loading: true,
      };
    case FINISHED_CUSTOMERS_RELOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

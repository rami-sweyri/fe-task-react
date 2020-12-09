import { tr } from "date-fns/locale";
import {
  READ_CUSTOMERS,
  CLEAR_CUSTOMERS,
  START_CUSTOMER_RELOAD,
  FINISHED_CUSTOMER_RELOAD,
} from "../types/customers";

const initialState = {
  customers: [],
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

    case CLEAR_CUSTOMERS:
      return {
        ...state,
        customers: [],
        error: {},
        loading: false,
        readable: false,
      };
    case START_CUSTOMER_RELOAD:
      return {
        ...state,
        loading: true,
      };
    case FINISHED_CUSTOMER_RELOAD:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

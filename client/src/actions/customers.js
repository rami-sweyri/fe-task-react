import {
  READ_CUSTOMERS,
  CUSTOMER_ERROR,
  CLEAR_CUSTOMERS,
  START_CUSTOMER_RELOAD,
  FINISHED_CUSTOMER_RELOAD,
} from "../types/customers";

import { readItemsAsync } from "../libs/redux-curd/readItems";

export const startCustomerReload = () => (dispatch) => {
  dispatch({ type: START_CUSTOMER_RELOAD });
};

export const finishedCustomerReload = () => (dispatch) => {
  dispatch({ type: FINISHED_CUSTOMER_RELOAD });
};
export const readCustomers = (query) =>
  readItemsAsync({
    url: !query
      ? "http://localhost:5000/customers/"
      : `http://localhost:5000/customers/?${query}`,
    successType: READ_CUSTOMERS,
    errorType: CUSTOMER_ERROR,
    startReload: startCustomerReload,
    finishedReload: finishedCustomerReload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearCustomer = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMERS });
};

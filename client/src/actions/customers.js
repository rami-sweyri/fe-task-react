import {
  READ_CUSTOMERS,
  READ_ONE_CUSTOMER,
  CUSTOMER_ERROR,
  CLEAR_CUSTOMERS,
  START_CUSTOMERS_RELOAD,
  FINISHED_CUSTOMERS_RELOAD,
} from "../types/customers";

import { readItemsAsync } from "../libs/redux-curd/readItems";
import { readOneItemAsync } from "../libs/redux-curd/readOneItem";

export const startCustomersReload = () => (dispatch) => {
  dispatch({ type: START_CUSTOMERS_RELOAD });
};

export const finishedCustomersReload = () => (dispatch) => {
  dispatch({ type: FINISHED_CUSTOMERS_RELOAD });
};

export const readCustomers = () =>
  readItemsAsync({
    url: "http://localhost:5000/customers",
    successType: READ_CUSTOMERS,
    errorType: CUSTOMER_ERROR,
    startReload: startCustomersReload,
    finishedReload: finishedCustomersReload,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const readOneCustomer = (id) =>
  readOneItemAsync({
    url: "http://localhost:5000/customers",
    successType: READ_ONE_CUSTOMER,
    errorType: CUSTOMER_ERROR,
    startReload: startCustomersReload,
    finishedReload: finishedCustomersReload,
    id,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const clearCustomer = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMERS });
};

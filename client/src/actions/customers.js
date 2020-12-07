import {
  READ_CUSTOMERS,
  READ_ONE_CUSTOMER,
  CUSTOMER_ERROR,
  CLEAR_CUSTOMER,
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
    url:
      typeof process.env.REACT_APP_CLIENT_ID !== "undefined"
        ? process.env.REACT_APP_CUSTOMERS_BACKEND_URL + "/"
        : localStorage.getItem("REACT_APP_BACKEND_URL") + "/customers/",
    successType: READ_ONE_CUSTOMER,
    errorType: CUSTOMER_ERROR,
    startReload: startCustomersReload,
    finishedReload: finishedCustomersReload,
    id,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-client":
        typeof process.env.REACT_APP_CLIENT_ID !== "undefined"
          ? process.env.REACT_APP_CLIENT_ID
          : localStorage.getItem("REACT_APP_CLIENT_ID"),
      "x-access-token": localStorage.getItem("token"),
      "accept-language": localStorage.getItem("i18nextLng"),
    },
  });

export const clearCustomer = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMER });
};

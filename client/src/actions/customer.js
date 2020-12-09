import {
  READ_ONE_CUSTOMER,
  READ_CUSTOMER_SOURCES,
  CLEAR_CUSTOMER_DETAIL,
  CUSTOMER_DETAIL_ERROR,
} from "../types/customer";

import { readOneItemAsync } from "../libs/redux-curd/readOneItem";

export const readOneCustomer = (id) =>
  readOneItemAsync({
    url: "http://localhost:5000/customers",
    successType: READ_ONE_CUSTOMER,
    errorType: CUSTOMER_DETAIL_ERROR,
    noReload: true,
    id,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const readCustomerSources = ({ events, customer_events, sources }) => (
  dispatch
) => {
  let customer_sources = [];
  let data = [];

  customer_sources = events.filter((event) =>
    customer_events.find(
      (customer_events) => customer_events.event_id === event.id
    )
  );
  data = sources.filter((source) =>
    customer_sources.find(
      (customer_source) => customer_source.source_id === source.id
    )
  );

  if (data.length > 0) {
    dispatch({ type: READ_CUSTOMER_SOURCES, payload: data });
  }
};

export const clearCustomerEvent = () => (dispatch) => {
  dispatch({ type: CLEAR_CUSTOMER_DETAIL });
};

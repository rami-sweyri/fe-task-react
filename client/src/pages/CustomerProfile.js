import React, { useEffect } from "react";
import { connect } from "react-redux";
import { readOneCustomer } from "../actions/customers";
import { readCustomerEvents } from "../actions/customer_events";

const CustomerProfile = ({
  readCustomerEvents,
  readOneCustomer,
  customerEventsReducer: { customer_events, loading, readable },
  match,
}) => {
  useEffect(() => {
    if (match.params.id) {
      readOneCustomer(match.params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);
  useEffect(() => {
    if (!readable && match.params.id) {
      readCustomerEvents(match.params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readable, match.params.id]);

  return <div>CustomerProfile</div>;
};

const mapStateToProps = (state) => ({
  customerEventsReducer: state.customerEventsReducer,
});

export default connect(mapStateToProps, {
  readCustomerEvents,
  readOneCustomer,
})(CustomerProfile);

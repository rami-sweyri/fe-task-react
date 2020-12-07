import React, { useEffect } from "react";
import { connect } from "react-redux";

import { readCustomers } from "../actions/customers";

const Customers = ({ readCustomers, customersReducer }) => {
  useEffect(() => {
    readCustomers()
      .then((result) => {
        console.log({ result });
      })
      .catch((err) => {});
  }, []);

  return <div className="w-full ">dds</div>;
};

const mapStateToProps = (state) => ({
  customersReducer: state.customersReducer,
});

export default connect(mapStateToProps, {
  readCustomers,
})(Customers);

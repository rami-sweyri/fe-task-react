import React, { useEffect } from "react";
import { connect } from "react-redux";

import { readCustomers } from "../actions/customers";

const Customers = ({
  readCustomers,
  customersReducer: { customers, loading, readable },
}) => {
  useEffect(() => {
    //readable -> It means that the data has been read (fetch)
    if (!readable) {
      readCustomers()
        .then((result) => {
          console.log({ result });
        })
        .catch((err) => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readable]);

  return (
    <div className="w-full bg-white">
      {customers.map((customer) => (
        <div className="w-full flex justify-between items-center border-b p-6">
          <p>{customer.name}</p>
          <p>{customer.surname}</p>
          <p>{customer.created}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customersReducer: state.customersReducer,
});

export default connect(mapStateToProps, {
  readCustomers,
})(Customers);

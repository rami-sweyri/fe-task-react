import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { readCustomers } from "../actions/customers";
import Spinner from "../components/Spinner/BigSpinner";
import CustomerItem from "../components/Customers/CustomerItem";
import SearchBar from "../components/Customers/SearchBar";
const queryString = require("query-string");

const Customers = ({ readCustomers, customersReducer }) => {
  const [query, setQuery] = useState({
    offset: 0,
    limit: 20,
    search: "",
  });
  useEffect(() => {
    //readable -> It means that the data has been read (fetch)
    if (!customersReducer.readable) {
      readCustomers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersReducer.readable]);

  return !customersReducer.readable ? (
    <Spinner />
  ) : (
    <div className="w-full md:w-9/12 py-12">
      <SearchBar query={query} setQuery={setQuery} />

      {customersReducer.customers.length > 0 ? (
        <div className="w-full bg-white border rounded-8 p-2 bottom-shadow">
          <div className="w-full flex justify-between items-center pt-6 pb-2 px-12">
            <div className="w-4/12 text-fe-gray-200 font-bold text-xs uppercase">
              <p className="ml-16">Name</p>
            </div>
            <p className="w-4/12 text-fe-gray-300 font-bold text-xs uppercase">
              surname
            </p>
            <p className="w-4/12 text-fe-gray-300 font-bold text-xs uppercase">
              created
            </p>
          </div>
          {customersReducer.customers.map((customer, i) => (
            <CustomerItem
              key={customer.id}
              customer={customer}
              lastCustomer={customersReducer.customers.length === i + 1}
            />
          ))}
          <div className="w-full flex justify-center my-3">
            <button
              onClick={() => {
                readCustomers(
                  queryString.stringify({ offset: query.offset === 0 ? 10 : 0 })
                )
                  .then((result) => {
                    if (query.offset === 0) {
                      setQuery({ ...query, offset: 10 });
                    } else {
                      setQuery({ ...query, offset: 0 });
                    }
                  })
                  .catch((err) => {});
              }}
              className="px-6 py-2 border rounded-8 text-fe-gray-100 hover:bg-fe-gray-400"
            >
              {query.offset === 0 ? "Show more" : "Hide"}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white border rounded-8 p-2 bottom-shadow">
          <div className="w-full flex justify-center items-center my-6">
            <p className="text-xl text-fe-gray-200 text-center">
              There is no result!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customersReducer: state.customersReducer,
});

export default connect(mapStateToProps, {
  readCustomers,
})(Customers);

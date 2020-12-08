import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import format from "date-fns/format";

import { readCustomers } from "../actions/customers";
import Avatar from "../assets/customer_avatars/Avatar-16.svg";
import Spinner from "../components/Spinner/BigSpinner";

const Customers = ({ readCustomers, customersReducer }) => {
  useEffect(() => {
    //readable -> It means that the data has been read (fetch)
    if (!customersReducer.readable) {
      readCustomers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersReducer.readable]);

  return !customersReducer.readable || customersReducer.loading ? (
    <Spinner />
  ) : (
    <div className="w-full md:w-9/12 py-12">
      <div className="w-full flex justify-between items-center bg-fe-gray-400 border rounded-8 shadow px-6 py-3 bottom-shadow">
        <p className="text-fe-gray-200 text-2xl font-bold">Customer search</p>
        <div className="relative flex items-center w-6/12">
          <input
            className="rounded-8 border h-12 w-full px-2"
            placeholder="Search attributes, customers and more..."
          />
          <div className="flex justify-center items-center rounded-8 bg-fe-brick-100  h-10 w-10 absolute right-0 mx-1 cursor-pointer hover:opacity-70">
            <FaSearch className="text-white text-lg" />
          </div>
        </div>
        <p className="opacity-0">Customer search</p>
      </div>
      <div className="w-full bg-white border rounded-8 p-2 bottom-shadow">
        <div className="w-full flex justify-between items-center pt-6 pb-2 px-12">
          {" "}
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
          <div
            key={customer.id}
            className={`w-full flex justify-between items-center py-5 px-12 hover:bg-opacity-5 hover:bg-fe-brick-100 relative ${
              customersReducer.customers.length === i + 1 ? "" : "border-b"
            }`}
          >
            <div className="w-4/12 text-fe-gray-200 font-bold flex items-center">
              <div className="flex justify-center items-center rounded-8 bg-fe-brick-200 h-12 w-12 mr-4">
                <img src={Avatar} alt="Avatar" className="h-10 w-10" />
              </div>
              <p> {customer.name}</p>
            </div>
            <p className="w-4/12 text-fe-gray-100 font-thin text-sm">
              {customer.surname}
            </p>
            <p className="w-4/12 text-fe-gray-100 font-thin text-sm">
              {" "}
              {format(new Date(customer.created), "dd.MM.yyyy, HH:mm:ss")}
            </p>
            <NavLink
              to={`/customer-profile/${customer.id}`}
              className="text-fe-gray-100 absolute right-0 mx-6 cursor-pointer hover:bg-opacity-10 hover:bg-fe-brick-100 py-2"
            >
              <IoIosArrowForward />
            </NavLink>
          </div>
        ))}
        <div className="w-full flex justify-center my-3">
          <button className="px-6 py-2 border rounded-8 text-fe-gray-100 hover:bg-fe-gray-400">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customersReducer: state.customersReducer,
});

export default connect(mapStateToProps, {
  readCustomers,
})(Customers);

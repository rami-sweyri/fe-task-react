import { format } from "date-fns";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CustomerItem = ({ customer, lastCustomer }) => {
  return (
    <div
      className={`w-full flex justify-between items-center py-5 px-12 hover:bg-opacity-5 hover:bg-fe-brick-100 relative ${
        lastCustomer ? "" : "border-b"
      }`}
    >
      <div className="w-4/12 text-fe-gray-200 font-bold flex items-center">
        <div className="flex justify-center items-center rounded-8 bg-fe-brick-200 h-12 w-12 mr-4">
          <img
            src={
              require(`../../assets/customer_avatars/Avatar-${Math.floor(
                Math.random() * 16
              )}.svg`).default
            }
            alt="Avatar"
            className="h-10 w-10"
          />
        </div>
        <p> {customer.name}</p>
      </div>
      <p className="w-4/12 text-fe-gray-100 font-thin text-sm">
        {customer.surname}
      </p>
      <p className="w-4/12 text-fe-gray-100 font-thin text-sm">
        {format(new Date(customer.created), "dd.MM.yyyy, HH:mm:ss")}
      </p>
      <NavLink
        to={`/customer-detail/${customer.id}`}
        className="text-fe-gray-100 absolute right-0 mx-6 cursor-pointer hover:bg-opacity-10 hover:bg-fe-brick-100 py-2"
      >
        <IoIosArrowForward />
      </NavLink>
    </div>
  );
};

export default CustomerItem;

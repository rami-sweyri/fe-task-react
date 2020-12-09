import React from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { readCustomers } from "../../actions/customers";
const queryString = require("query-string");

const SearchBar = ({ query, setQuery, readCustomers }) => {
  return (
    <div className="w-full flex justify-between items-center bg-fe-gray-400 border rounded-8 shadow px-6 py-3 bottom-shadow">
      <p className="text-fe-gray-200 text-2xl font-bold">Customer search</p>
      <div className="relative flex items-center w-6/12">
        <input
          className="rounded-8 border h-12 w-full px-2 text-fe-gray-200"
          placeholder="Search attributes, customers and more..."
          name="search"
          value={query.search}
          onChange={(e) => setQuery({ ...query, search: e.target.value })}
        />
        <button
          onClick={() => readCustomers(queryString.stringify(query))}
          className="flex justify-center items-center rounded-8 bg-fe-brick-100  h-10 w-10 absolute right-0 mx-1 cursor-pointer hover:opacity-70"
        >
          <FaSearch className="text-white text-lg" />
        </button>
      </div>
      <p className="opacity-0">Customer search</p>
    </div>
  );
};

export default connect(null, {
  readCustomers,
})(SearchBar);

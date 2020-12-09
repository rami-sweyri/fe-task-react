import React from "react";
import { connect } from "react-redux";

const CustomerNavbar = ({ customerReducer, sourcesReducer }) => {
  return (
    <div className="w-full flex justify-between items-center bg-white border rounded-8 shadow px-6 py-3 bottom-shadow mt-6">
      <p className="text-fe-gray-200 text-2xl font-bold">
        {customerReducer.customer.name}
      </p>
      <div className="flex items-center my-1">
        {sourcesReducer.sources.map((source, i) => {
          return customerReducer.customer_sources.some(
            (customer_source) => customer_source.id === source.id
          ) ? (
            <div className="mx-4 flex items-center" key={source.id + i}>
              <img
                className="w-14 h-14"
                src={
                  require("../../assets/source_logos/" +
                    source.frontend_settings.icon).default
                }
                alt={source.name}
              />
              <p className="text-fe-gray-200 font-bold mx-2">{source.name}</p>
            </div>
          ) : (
            <div className="mx-4 flex items-center opacity-50" key={source.id}>
              <img
                className="w-14 h-14 bg-fe-gray-100 rounded-full"
                src={
                  require("../../assets/source_logos/" +
                    "white_" +
                    source.frontend_settings.icon).default
                }
                alt={source.name}
              />
              <p className="text-fe-gray-200 font-bold mx-2">{source.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerReducer: state.customerReducer,
  sourcesReducer: state.sourcesReducer,
});

export default connect(mapStateToProps, null)(CustomerNavbar);

import { isToday } from "date-fns";
import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { readOneCustomer } from "../actions/customers";
import { readCustomerEvents } from "../actions/customer_events";
import EventItem from "../components/EventItem";

const CustomerProfile = ({
  readCustomerEvents,
  readOneCustomer,
  customerEventsReducer,
  customersReducer,
  eventsReducer,
  sourcesReducer,
  match,
}) => {
  useEffect(() => {
    if (match.params.id) {
      readOneCustomer(match.params.id);
      readCustomerEvents(match.params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  return (
    <div className="w-full md:w-9/12 py-12 ">
      <NavLink
        to="/customers"
        className="flex items-center text-sm text-fe-gray-100 hover:text-fe-gray-200 "
      >
        <IoIosArrowBack />
        <p className="mx-2">Back to search</p>
      </NavLink>
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-between items-center bg-white border rounded-8 shadow px-6 py-3 bottom-shadow mt-6">
          <p className="text-fe-gray-200 text-2xl font-bold">
            {customersReducer.customer.name}
          </p>
          <div className="flex items-center my-1">
            {sourcesReducer.sources.map((source) => {
              return (
                <div className="mx-4 flex items-center" key={source.id}>
                  <img
                    className="w-14 h-14"
                    src={
                      require("../assets/source_logos/" + source.id + ".png")
                        .default
                    }
                    alt={source.name}
                  />
                  <p className="text-fe-gray-200 font-bold mx-2">
                    {source.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {customerEventsReducer.customer_events.filter((customer_event) =>
          isToday(new Date(customer_event.datetime))
        ).length > 0 && (
          <div className="w-9/12 flex flex-col items-center">
            <div className="w-full flex justify-between items-center bg-white border rounded-8 shadow px-6 py-3 bottom-shadow mt-6">
              <p className="text-fe-gray-200 text-2xl font-bold">
                {customersReducer.customer.name}
              </p>
            </div>
            {customerEventsReducer.customer_events
              .filter((customer_event) =>
                isToday(new Date(customer_event.datetime))
              )
              .map((customer_event) => {
                return (
                  <EventItem
                    key={customer_event.id}
                    event_id={customer_event.event_id}
                    datetime={customer_event.datetime}
                    isToday={true}
                  />
                );
              })}
          </div>
        )}

        {customerEventsReducer.customer_events
          .filter(
            (customer_event) => !isToday(new Date(customer_event.datetime))
          )
          .map((customer_event) => {
            return (
              <EventItem
                key={customer_event.id}
                event_id={customer_event.event_id}
                datetime={customer_event.datetime}
                isToday={false}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerEventsReducer: state.customerEventsReducer,
  customersReducer: state.customersReducer,

  eventsReducer: state.eventsReducer,
  sourcesReducer: state.sourcesReducer,
});

export default connect(mapStateToProps, {
  readCustomerEvents,
  readOneCustomer,
})(CustomerProfile);

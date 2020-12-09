import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { readCustomerSources, readOneCustomer } from "../actions/customer";
import { readCustomerEvents } from "../actions/customer_events";
import CustomerNavbar from "../components/CustomerDetail/CustomerNavbar";
import EventItem from "../components/CustomerDetail/EventItem";
import EventItemGroup from "../components/CustomerDetail/EventItemGroup";

const CustomerDetail = ({
  readCustomerEvents,
  readOneCustomer,
  customerEventsReducer,
  customerReducer,
  eventsReducer,
  sourcesReducer,
  readCustomerSources,
  match,
}) => {
  const [customerEventsGroup, setCustomerEventsGroup] = useState([]);
  useEffect(() => {
    if (match.params.id) {
      readOneCustomer(match.params.id);
      readCustomerEvents(match.params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  useEffect(() => {
    readCustomerSources({
      events: eventsReducer.events,
      customer_events: customerEventsReducer.customer_events,
      sources: sourcesReducer.sources,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerEventsReducer, match.params.id]);

  useEffect(() => {
    let result = customerEventsReducer.customer_events.reduce(function (r, a) {
      let dateTime = format(new Date(a.datetime), "dd.MM.yyyy");
      r[dateTime] = r[dateTime] || [];
      r[dateTime].push(a);
      return r;
    }, Object.create(null));

    setCustomerEventsGroup(Object.entries(result));
  }, [customerEventsReducer]);

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
        <CustomerNavbar />

        {customerEventsGroup.map((eventsGroup, i) => {
          return eventsGroup[1].length > 1 ? (
            <EventItemGroup key={i} eventsGroup={eventsGroup} />
          ) : (
            eventsGroup[1].map((customer_event) => (
              <EventItem
                key={customer_event.id}
                event_id={customer_event.event_id}
                datetime={customer_event.datetime}
                group={false}
              />
            ))
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerEventsReducer: state.customerEventsReducer,
  customerReducer: state.customerReducer,
  eventsReducer: state.eventsReducer,
  sourcesReducer: state.sourcesReducer,
});

export default connect(mapStateToProps, {
  readCustomerEvents,
  readOneCustomer,
  readCustomerSources,
})(CustomerDetail);

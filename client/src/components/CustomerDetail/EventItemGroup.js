import React, { useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

import { connect } from "react-redux";
import EventItem from "./EventItem";
import SmallSpinner from "../Spinner/SmallSpinner";

const EventItemGroup = ({ eventsGroup, eventsReducer, sourcesReducer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-9/12 flex flex-col items-center">
      <div className="w-full flex justify-between items-center bg-white border rounded-8 shadow px-6 py-2 bottom-shadow mt-6">
        <div className="flex justify-between items-center">
          {eventsGroup[1]
            .filter(
              (v, i, a) => a.findIndex((t) => t.event_id === v.event_id) === i
            )
            .map((eventGroup) => {
              return (
                <div key={eventGroup.id} className="flex items-center mx-3">
                  {eventGroup.id ? (
                    <img
                      className="w-14 h-14"
                      src={
                        require("../../assets/source_logos/" +
                          eventsReducer.events.find(
                            (event) => event.id === eventGroup.event_id
                          ).source_id +
                          ".png").default
                      }
                      alt={eventGroup.id}
                    />
                  ) : (
                    <div className="w-14 h-14">
                      <SmallSpinner />
                    </div>
                  )}
                  <div className="flex flex-col mx-2">
                    <p className="text-fe-gray-200 font-bold">
                      {
                        eventsReducer.events.find(
                          (event) => event.id === eventGroup.event_id
                        ).short_title
                      }
                    </p>

                    <p className="text-sm text-fe-gray-100">
                      {
                        sourcesReducer.sources.find(
                          (source) =>
                            source.id ===
                            eventsReducer.events.find(
                              (event) => event.id === eventGroup.event_id
                            ).source_id
                        ).name
                      }
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold text-fe-gray-300">
            {eventsGroup[0]}
          </span>
          <div className="relative w-12 h-12 my-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full h-full rounded-8 border btn-shadow flex justify-center items-center cursor-pointer hover:bg-fe-gray-400"
            >
              {isOpen ? (
                <FiChevronsUp className="text-2xl text-fe-gray-100" />
              ) : (
                <FiChevronsDown className="text-2xl text-fe-gray-100" />
              )}
            </button>
            <div className="h-6 w-6 bg-white rounded-full border btn-shadow flex justify-center items-center absolute -bottom-2 -right-2">
              <span className="text-xs text-fe-gray-100 font-bold">
                {eventsGroup[1].length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isOpen &&
        eventsGroup[1].map((customer_event, i) => (
          <EventItem
            key={customer_event.id + i}
            event_id={customer_event.event_id}
            datetime={customer_event.datetime}
            group={true}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  eventsReducer: state.eventsReducer,
  sourcesReducer: state.sourcesReducer,
});

export default connect(mapStateToProps, null)(EventItemGroup);

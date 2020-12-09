import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner/SmallSpinner";

const EventItem = ({
  event_id,
  datetime,
  eventsReducer,
  sourcesReducer,
  group,
}) => {
  const [event, setEvent] = useState({});
  const [sources, serSources] = useState({ });

  useEffect(() => {
    setEvent(eventsReducer.events.find((event) => event.id === event_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event_id]);

  useEffect(() => {
    if (event.source_id) {
      serSources({
        ...sourcesReducer.sources.find(
          (source) => source.id === event.source_id
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event.source_id]);

  return (
    <div
      className={`w-9/12 flex justify-between items-center bg-white border rounded-8 shadow px-6 py-3 bottom-shadow ${
        group ? "mt-3" : "mt-6"
      }`}
    >
      <div className="flex items-center">
        {sources.id ? (
          <img
            className={`${group ? "w-8 h-8" : "w-8 h-8"}`}
            src={
              require("../../assets/source_logos/" +
                sources.frontend_settings.icon).default
            }
            alt={event.title}
          />
        ) : (
          <div className={`${group ? "w-8 h-8" : "w-8 h-8"}`}>
            <Spinner />
          </div>
        )}
        <p
          className={`mx-2 font-bold ${group ? "text-sm" : "text-base"}`}
          style={{
            color: sources.id ? sources.frontend_settings.color : "#222222",
          }}
        >
          {event.title}
        </p>
      </div>
      <span
        className={`text-fe-gray-300 font-normal ${
          group ? "text-xs" : "text-sm"
        }`}
      >
        {format(new Date(datetime), "dd.MM.yyyy, HH:mm:ss")}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerEventsReducer: state.customerEventsReducer,
  eventsReducer: state.eventsReducer,
  sourcesReducer: state.sourcesReducer,
});

export default connect(mapStateToProps, null)(EventItem);

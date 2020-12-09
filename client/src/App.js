import { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";
import { readSources } from "./actions/sources";
import { readEvents } from "./actions/events";
import { connect } from "react-redux";
import "./App.css";
import "./tailwind.css";

const history = createBrowserHistory();

function App({ readSources, readEvents }) {
  useEffect(() => {
    readEvents();
    readSources();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router history={history}>
      <Route component={Routes} />
    </Router>
  );
}

export default connect(null, {
  readSources,
  readEvents,
})(App);

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./routes";

import "./App.css";
import "./tailwind.css";

import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route component={Routes} />
    </Router>
  );
}

export default App;

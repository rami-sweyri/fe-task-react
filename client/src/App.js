import "./App.css";
import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";

function App() {
  return (
    <div className="m-6">
      <Navbar />
      <Customers />
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";

function App() {
  return (
    <div className=" w-full flex justify-center items-center p-6">
      <div className="w-full md:w-9/12">
        {/* <Navbar /> */}
        <Customers />
      </div>
    </div>
  );
}

export default App;

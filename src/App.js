import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";
import Header from "./Components/Header/Header";
import Bottles from "./Components/Bottles/Bottles";

function App() {
  // fake data in array of object format
  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399.99 },
  //   { id: 2, name: "Galaxy Watch 4", price: 249.99 },
  //   { id: 3, name: "Fitbit Sense", price: 299.95 },
  //   { id: 4, name: "Garmin Venu 2", price: 399.99 },
  //   { id: 5, name: "Huawei Watch GT 3", price: 299.99 },
  // ];

  //fake data in json format
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json") // in public folder
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div className="App">
      <div className="watches" style={{ display: "none" }}>
        {/* if you want to see it, remove display: none */}
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
      <div>
        <Header></Header>
        <Bottles></Bottles>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data); //tours ko ui pe reflect krwana hai, data pass kara hai
  // console.log(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    // console.log(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button onClick={() => setTours(data)}>
          Refresh
        </button>

      </div>
    )
  }

  return(
    <div>
      <Tours tours = {tours} removeTour={removeTour} />

      {/* </Tours> */}
    </div>
  )
};

export default App;

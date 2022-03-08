import React, { useState } from "react";
import fakeApiData from "./data/officeholders.json";
import "./app.css";
import PersonList from "./Components/PersonList";
import PersonDetails from "./Components/PersonDetails";
//import Mobile_Details from './Components/Mobile_Details';
import useMediaQuery from "./Components/useMediaQuery";
const officeholders = fakeApiData.data.officeHolders.nodes;

function App() {
  const [data, setData] = useState(officeholders);
  const [openShowDetail, setOpenShowDetail] = useState(false);
  const [show, setShow] = useState({});
  const matches = useMediaQuery("(max-width: 768px)");

  const handleClick = (id) => {
    const showPerson = data.filter((a) => {
      return a.id === id;
    });

    setShow(...showPerson);
    setOpenShowDetail(true);
  };

  return (
    <div className="container">
      {matches && openShowDetail ? (
        <PersonDetails show={show} matches={matches} />
      ) : (
        <div className="left_side">
          <PersonList
            data={data}
            handleClick={handleClick}
            show={show}
            openShowDetail={openShowDetail}
          />
        </div>
      )}

      <div className="right_side">
        {openShowDetail ? (
          <PersonDetails show={show} />
        ) : (
          <h1> Hello, World!</h1>
        )}
      </div>
    </div>
  );
}

export default App;

/**
 * Hi! We've set you up with a fake dataset in the variable `officeholders`.
 *
 * In real-life this data would come from our API but we wanted to keep this
 * exercise self-contained so that you can focus on the UI/UX :)
 *
 * Want to see what this data looks like? Check out the JSON file in the `data` folder or use the
 * following line to check it out in the browser console:
 */

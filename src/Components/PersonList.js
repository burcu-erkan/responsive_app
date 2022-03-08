import React from "react";
import logo from "../images/headshot.png";
import "./personList.css";

export const PersonList = ({ data, openShowDetail, show, handleClick }) => {
  const sortedRowOrder = data.sort((a, b) => {
    return a.position.rowOrder - b.position.rowOrder;
  });
  return (
    <div>
      {sortedRowOrder.map((per) => {
        return (
          <div
            onClick={() => handleClick(per.id)}
            key={per.id}
            className={
              openShowDetail && show.id === per.id ? "active_row" : "person_row"
            }
          >
            <div className="person_info">
              <h2>{per.person.fullName}</h2>
              <p>{per.position.name}</p>
            </div>
            <div className="person_image">
              <img
                src={!per.person.images[1] ? logo : per.person.images[1].url}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PersonList;

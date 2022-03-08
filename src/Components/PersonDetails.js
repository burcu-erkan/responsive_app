import React from "react";
import logo from "../images/headshot.png";
import "./personDetails.css";
import { FaChevronLeft } from "react-icons/fa";

const PersonDetails = ({ show, matches }) => {
  return (
    <>
      {matches && (
        <a className="back" href="/">
          <FaChevronLeft className="icon" /> Back
        </a>
      )}
      <div key={show.id} className="person_details">
        <h1>{show.person.fullName}</h1>
        <img
          className="cur_perImgage"
          src={!show.person.images[1] ? logo : show.person.images[1].url}
          alt=""
        />
        <ul key={show.id}>
          {show.person.urls.map((url) => {
            return (
              <li key={url.type} className="cur_per_url">
                <a className="urls_" href={url.url}>
                  {url.type}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PersonDetails;

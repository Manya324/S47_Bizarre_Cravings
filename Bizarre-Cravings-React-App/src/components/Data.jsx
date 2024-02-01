import React from "react";
import data from "./ListData.json";
import "../index.css";

function Data() {
  return (
    <div className="content">
      {data.map((item, id) => {
        return (
          <div className="items" key={id}>
            <div className="upper">
              <div className="details">
                <h1 className="item-name">Item Name: {item.name}</h1>
                <h2 className="person-name">Person : {item.person}</h2>
                <h3 className="origin">Origin : {item.country}</h3>
              </div>
              <img className="images" src={item.imageURL}></img>
              </div>
            <p className="description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Data;

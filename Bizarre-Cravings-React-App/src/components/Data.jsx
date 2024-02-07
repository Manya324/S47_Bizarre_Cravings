import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";

function Data() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteItem/${id}`)
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <h1 className="heading">Bizarre Cravings</h1>
        <Link to="/addItem">
          <button className="add-btn">Add Item +</button>
        </Link>
      </div>
      <div className="content">
        {data.map((item, id) => {
          return (
            <div className="items" key={id}>
              <div className="upper">
                <div className="details">
                  <h1 className="item-name">Item Name: {item.item}</h1>
                  <h2 className="person-name">Person : {item.person}</h2>
                  <h3 className="origin">Origin : {item.country}</h3>
                </div>
                <img className="images" src={item.imageUrl}></img>
              </div>
              <p className="description">{item.description}</p>
              <div className="lower">
              <Link to={`/update/${item._id}`}>
                <button className="update-btn">Update Item</button>
              </Link>
                <button onClick={(e) => handleDelete(item._id)} className="delete-btn">Delete Item</button>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;

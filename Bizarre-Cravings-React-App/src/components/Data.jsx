import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../index.css";

function Data() {
  const [data, setData] = React.useState([]);
  const  [filteredUser, setFilteredUser] = React.useState("All");


  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);


  function cookieNames() {
    const cookieArray = document.cookie.split("; ");
    const cookie = cookieArray.map((row) => row.split("=")[0]);
    return cookie;
  }

  const cookies = cookieNames();
  console.log(cookies[0]);
  const clearCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 2000 00:00:01 GMT;path=/;`;
  };

  const handleLogOut = () => {
    clearCookie(cookies[0]);
    console.log("Updated Cookies:", document.cookie);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/deleteItem/${id}`)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFilteredUser(e.target.value);
  }

  const filteredUsers = data.filter((user) => {
    if (filteredUser === "All") {
      return user;
    }else{
      return user.created_by === filteredUser
    }
  })
  return (
    <>
      <div>
        <nav className="navbar">
          
          {cookies[0] && (
            <h2
              style={{
                textAlign: "flex-start",
                marginLeft: "30px",
                marginTop: "10px",
              }}
              className="name"
            >
              Welcome {cookies[0]} !
            </h2>
          )}
          <Link to="/login">
            <button
              className="update-btn"
              style={{
                textAlign: "flex-start",
                marginLeft: "30px",
                marginRight : "50px",
                marginTop: "10px",
                fontweight: "bold",
              }}
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </Link>
          
        </nav>
        <h1 className="heading">Bizarre Cravings</h1>
        <Link to="/addItem">
          <button className="add-btn">Add Item +</button>
        </Link>
        <select onChange={handleChange} className="filter-btn">
          <option value="All">All</option>
            <option value="Manya">Manya</option>
            <option value="Hanshul">Hanshul</option>
            <option value="Ishita">Ishita</option>
          </select>
      </div>
      <div className="content">
        {filteredUsers.map((item, id) => {
          return (
            <div className="items" key={id}>
              <div className="upper">
                <div className="details">
                  <h1 className="item-name">Item Name: {item.item}</h1>
                  <h2 className="person-name">Person : {item.person}</h2>
                  <h3 className="origin">Origin : {item.country}</h3>
                  {item.created_by && <h3 className="origin">Created By : {item.created_by}</h3>}
                </div>
                <img className="images" src={item.imageUrl}></img>
              </div>
              <p className="description">{item.description}</p>
              <div className="lower">
                <Link to={`/update/${item._id}`}>
                  <button className="update-btn">Update Item</button>
                </Link>
                <button
                  onClick={(e) => handleDelete(item._id)}
                  className="delete-btn"
                >
                  Delete Item
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Data;

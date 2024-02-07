import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPage() {
  const [serial, setSerial] = useState();
  const [item, setItem] = useState();
  const [person, setPerson] = useState();
  const [country, setCountry] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000", {
        serial: serial,
        item: item,
        person: person,
        country: country,
        description: description,
        imageUrl: imageUrl,
      })
      .then((res) => {
        console.log(res);
        navigate("/data");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-page">
      <form className="form" onSubmit={(e) => Submit(e)}>
        <h1 className="heading">Add New Item</h1>
        <div className="input">
        <label htmlFor="">Enter Serial Number:</label>
        <input
        className="inp"
          type="text"
          placeholder="Serial Number"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
        />
        </div>
        <div className="input">
        <label htmlFor="">Enter Item:</label>
        <input
          type="text"
          className="inp"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        </div>
      <div className="input">
      <label htmlFor="">Enter Person:</label>
        <input
          type="text"
          className="inp"
          placeholder="Person"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />
      </div>
      <div className="input">
      <label htmlFor="">Enter Country:</label>
        <input
          type="text"
          className="inp"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
       <div className="input">
       <label htmlFor="">Enter Description:</label>
        <input
          type="text"
          className="inp"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       </div>
       
       <div className="input">
       <label htmlFor="">Enter Image Url:</label>
        <input
          type="text"
          className="inp"
          placeholder="Image Url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
       </div>
        <div>
          <button className="btn" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewPage;

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
        <div className="main-box">

        <div className="label">
          <label htmlFor="">Enter Serial Number:</label>
          <label htmlFor="">Enter Item:</label>
          <label htmlFor="">Enter Person:</label>
          <label htmlFor="">Enter Country:</label>
          <label htmlFor="">Enter Description:</label>
          <label htmlFor="">Enter Image Url:</label>       
        </div>
        <div className="input">
        <input
            required
            className="inp"
            type="text"
            placeholder="Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />
          <input
            required
            type="text"
            className="inp"
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            required
            type="text"
            className="inp"
            placeholder="Person"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
          <input
            type="text"
            required
            className="inp"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            required
            className="inp"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="text"
            className="inp"
            required
            placeholder="Image Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        </div>

        <div>
          <button className="btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPage;

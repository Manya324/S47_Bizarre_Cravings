import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateItem() {
  const { id } = useParams();
  const [serial, setSerial] = useState();
  const [item, setItem] = useState();
  const [person, setPerson] = useState();
  const [country, setCountry] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getItem/` + id)
      .then((res) => {
        console.log(res);
        setSerial(res.data.serial);
        setItem(res.data.item);
        setPerson(res.data.person);
        setCountry(res.data.country);
        setDescription(res.data.description);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updateItem/` + id, {
        serial,
        item,
        person,
        country,
        description,
        imageUrl,
      })
      .then((res) => {
        console.log(res);
        navigate("/data");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="add-page">
        <h1 className="heading">Update Item</h1>
        <form className="form" onSubmit={update}>
          <div className="main-box">
            <div className="label">
              <label>Enter Serial Number:</label>
              <label>Enter Item:</label>
              <label>Enter Person:</label>
              <label>Enter Country:</label>
              <label>Enter Description:</label>
              <label>Enter Image Url:</label>
            </div>

            <div className="input">
              <input
                type="text"
                className="inp"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />
              <input
                type="text"
                className="inp"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <input
                type="text"
                className="inp"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              />
              <input
                type="text"
                className="inp"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <textarea
                type="text"
                className="inp"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                className="inp"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>

          <button className="update-btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateItem;

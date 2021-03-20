import React, { useState, useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import Moment from "moment";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  function getEvents() {
    axios
      .get("http://localhost:3000/event")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {data.map((item, index) => (
        <div className="card shadow mb-5" key={index}>
          <img
            src={`http://localhost:3000/${item.image}`}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <div className="p-2">
              <div className="d-flex align-items-center mb-1">
                <FaMapMarkerAlt color="#3498db" className="mr-1" />
                {item.location}
              </div>
              <h6>{item.title}</h6>
              <div className="text-secondary">
                <small>{Moment(item.date).format("DD MMMM yyyy")}</small>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center px-2 py-3">
              <FcBusinessman className="mr-1" />
              <small>{item.participant}</small>
            </div>
            <hr />
            <div className="px-2 py-3 bg-light">
              <strong>Note :</strong>
              <br />
              <small>{item.note}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

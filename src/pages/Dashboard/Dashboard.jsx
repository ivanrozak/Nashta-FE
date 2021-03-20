import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

export default function Dashboard() {
  const [eventData, setData] = useState([]);
  const [searchkey, setFilter] = useState("");
  const [currentPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    getEvents();
  }, []);
  function getEvents() {
    axios
      .get(
        `http://localhost:3000/event/filter?title=${searchkey}&page=${currentPage}&limit=3`
      )
      .then((res) => {
        setData(res.data.data);
        setTotalPages(res.data.pagination.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      // console.log("enter press here! " + event.target.value);
      setFilter(event.target.value);

      getEvents();
    }
  }
  const datapages = [];
  for (let i = 1; i <= totalPages; i++) {
    datapages.push({
      id: i,
    });
  }
  function changePage(item) {
    setPage(item);
    getEvents();
  }
  function nextPage() {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
      getEvents();
    }
  }
  function prevPage() {
    if (currentPage > 1) {
      setPage(currentPage - 1);
      getEvents();
    }
  }
  return (
    <div className="container">
      <input
        className="form-control w-25 mb-3"
        placeholder="search"
        name="searchkey"
        onKeyPress={handleKeyPress}
      />
      <Table bordered>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Location</th>
            <th>Date</th>
            <th>Participant</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.date.slice(0, 10)}</td>
              <td>{item.participant}</td>
              <td>{item.note}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="pagination d-inline-flex">
        <Button onClick={() => prevPage()}>prev</Button>
        {datapages.map((item, index) => (
          <div key={index}>
            <Button className="ml-2" onClick={() => changePage(item.id)}>
              {item.id}
            </Button>
          </div>
        ))}
        <Button className="ml-2" onClick={() => nextPage()}>
          next
        </Button>
      </div>
    </div>
  );
}

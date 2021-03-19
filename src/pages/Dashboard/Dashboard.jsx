import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <input className="form-control w-25 mb-3" placeholder="search" />
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>asddo</td>
              <td>asddo</td>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, asperiores!
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import banner from "../../assets/image/event.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: "",
      title: "",
      location: "",
      date: "",
      participant: "",
      note: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }
  submit() {
    const { title, location, date, participant, note } = this.state;
    const data = new FormData();
    data.append("image", this.state.selectedFile);
    data.append("title", title);
    data.append("location", location);
    data.append("date", date);
    data.append("participant", participant);
    data.append("note", note);
    console.warn(this.state.selectedFile);
    let url = "http://localhost:3000/event";

    axios.post(url, data).then((res) => {
      alert("Success Post Event !");
      console.warn(res);
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { title, location, date, participant, note } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <Row>
            <Col md="12" lg="6">
              <div className="px-4 py-4">
                <h4>Add Event</h4>
                <br />

                <Form>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={this.onChange}
                    required
                  />
                  <Input
                    type="text"
                    name="participant"
                    id="participant"
                    placeholder="Participant"
                    required
                    value={participant}
                    onChange={this.onChange}
                  />

                  <div className="d-flex justify-content-between">
                    <Input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location"
                      required
                      value={location}
                      onChange={this.onChange}
                    />
                    <Input
                      className="ml-3"
                      type="date"
                      name="date"
                      id="date"
                      required
                      value={date}
                      onChange={this.onChange}
                    />
                  </div>
                  <Input
                    type="textarea"
                    rows="4"
                    name="note"
                    id="exampleText"
                    placeholder="input note"
                    required
                    value={note}
                    onChange={this.onChange}
                  />
                  <FormGroup className="mt-2">
                    <Label for="upload_file">Upload Image</Label>
                    <Input
                      color="primary"
                      type="file"
                      name="file"
                      id="upload_file"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <div className="d-flex justify-content-end">
                    <Link to="/">
                      <Button
                        type="submit"
                        color="primary"
                        onClick={() => this.submit()}
                      >
                        Submit
                      </Button>
                    </Link>
                  </div>
                </Form>
              </div>
            </Col>
            <Col className="md-hidden" lg="6">
              <img src={banner} alt="" />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddStudent extends Component {
  state = {
    name: "",
    course: "",
    email: "",
    phone: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveStudent = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://127.0.0.1:8000/api/add-student",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        course: "",
        email: "",
        phone: "",
      });
    }
  };
  render() {
    return (
      <div className="cointainer text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Add Student</h4>
                <Link to={"/"} className="btn btn-primary btn-sm float-end">
                  Back
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent}>
                  <div className="form-group mb-3">
                    <label>Student Name:</label>
                    <input
                      type="test"
                      name="name"
                      onChange={this.handleInput}
                      value={this.state.name}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Course:</label>
                    <input
                      type="test"
                      name="course"
                      onChange={this.handleInput}
                      value={this.state.course}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Email:</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <label>Student Phone:</label>
                    <input
                      type="test"
                      name="phone"
                      onChange={this.handleInput}
                      value={this.state.phone}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Save Student
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;

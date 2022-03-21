import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Student extends Component {
  state = {};
  render() {
    return (
      <div className="cointainer text-center">
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <h4>Student Data</h4>
                <Link
                  to={"add-student"}
                  className="btn btn-primary btn-sm float-end"
                >
                  Add Student
                </Link>
              </div>
              <div className="card-body">


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

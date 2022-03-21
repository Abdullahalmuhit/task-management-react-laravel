import axios from "axios";
import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Student extends Component {
  state = {
    students:[],
    loading:true
  };
  async componentDidMount(){
    const res = await axios.get('http://127.0.0.1:8000/api/students');
    console.log(res.data.students);
    if(res.data.status===200){
      this.setState({
        students:res.data.students,
        loading:false

      });

    }

  }
  
  render() {
    var student_HTMLTABLE = '';
    if(this.state.loading)
    {
      student_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>
    }
    else{
      student_HTMLTABLE =
      this.state.students.map((item)=>{
        return(

          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.course}</td>
            <td>{item.phone}</td>
            <td><Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
            <td><Link to={`delete-student/${item.id}`} className="btn btn-danger btn-sm">Delete</Link></td>

          </tr>
        );

      });
 
    }
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
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Phone</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student_HTMLTABLE}
                  </tbody>

                </table>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;

import React, { useEffect, useState } from "react";
import { getStudents } from "../../api";
import { useNavigate } from "react-router-dom";

import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/studentform")}>
        Create a new student
      </button>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
};

export default StudentList;

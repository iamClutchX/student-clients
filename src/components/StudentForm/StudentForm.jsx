import React, { useState } from "react";
import { createStudent } from "../../api";
import { useNavigate } from "react-router-dom";

import "./StudentForm.css";

const StudentForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [serverdob, setServerDob] = useState("");


  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleDateOfBirthChange = (e) => {
    const date = new Date(e.target.value);
    const year = date.getFullYear();
    const month =
      date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setDateOfBirth(formattedDate);
    const serverd = `${day}-${month}-${year}`;
    setServerDob(serverd);

    // console.log(formattedDate);
    // console.log(serverd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const studentData = {
        name,
        email,
        phone,
        address,
        dateOfBirth : serverdob,
        gender,
      };
      const response = await createStudent(studentData);
      console.log(response.data);
      alert("Student created successfully!");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ general: "An error occurred while creating the student." });
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!phone) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(phone)) {
      errors.phone = "Phone is invalid";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="student-form">
      <h2>Create a new student</h2>
      {errors.general && <p className="error">{errors.general}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={errors.address ? "error" : ""}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            className={errors.dateOfBirth ? "error" : ""}
          />
          {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={errors.gender ? "error" : ""}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <button
          type="submit"
          onClick={validateForm}
          className="button button--submit"
        >
          Submit
        </button>
      </form>
      <button onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
};

export default StudentForm;

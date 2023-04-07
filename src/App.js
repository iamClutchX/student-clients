import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./components/StudentForm/StudentForm";
import StudentList from "./components/StudentList/StudentList";
import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentform" element={<StudentForm />} />
        <Route path="/studentlist" element={<StudentList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import axios from 'axios';


const serverUrl = process.env.REACT_APP_SERVER_URL; 

export const createStudent = async (student) => {
  try {
    const response = await axios.post(`${serverUrl}/api/students`, student);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while creating the student');
  }
};

export const getStudents = async () => {
  try {
    const response = await axios.get(`${serverUrl}/api/students`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while getting the students');
  }
};

export const updateStudent = async (student) => {
  try {
    const response = await axios.put(
      `${serverUrl}/api/students/${student._id}`,
      student
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while updating the student');
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const response = await axios.delete(`${serverUrl}/api/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred while deleting the student');
  }
};



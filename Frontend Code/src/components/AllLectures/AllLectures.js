// AllLectures.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowQR from '../Portals/ShowQR';
import './index.css'

function AllLectures() {
  const [showQRStates, setShowQRStates] = useState([]);
  const [lectures, setLectures] = useState([]);



  // Function to toggle the visibility of ShowQR component for a specific lecture
  const toggleShowQR = (index) => {
    const updatedShowQRStates = [...showQRStates];
    updatedShowQRStates[index] = !updatedShowQRStates[index];
    setShowQRStates(updatedShowQRStates);
  };

  useEffect(() => {
    // Fetch all lectures from the backend when the component mounts
    fetchAllLectures();
  }, []);

  const fetchAllLectures = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/lectures');
      const data = await response.data
      setLectures(data.lectures);
    } catch (error) {
      console.error('Error fetching lectures:', error);
    }
  };


  return (
    <div className='cont'>
      <h2>All Lectures</h2>
      <table>
        <thead>
          <tr>
            <th>Lecture Name</th>
            <th>Created By</th>
            <th>Subject</th>
            <th>Show QR and OTP</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {lectures.map((lecture, index) => (
            <tr key={lecture._id}>
              <td>{lecture.lectureName}</td>
              <td>{lecture.createdBy.name}</td>
              <td>{lecture.subject.name }</td>
              <td onClick={() => toggleShowQR(index)}><a href='#'>Get QR & OTP</a></td>
    {showQRStates[index] && <ShowQR onClick={() => toggleShowQR(index)} lectureID={lecture._id} />}           
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default AllLectures;

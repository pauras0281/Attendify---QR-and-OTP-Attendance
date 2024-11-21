import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios';

function LectureDetails() {
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    // Fetch lecture details after component mounts
    fetchLectureDetails();
  }, []);

  const fetchLectureDetails = async () => {
    try {
      // Make a GET request to fetch lecture details
      const response = await axios.get('http://localhost:8080/api/lectures/65e598202ee0aa276fa9a604'); // Replace 'lectureId' with the actual ID of the lecture
      const data = await response.data;
      console.log(data);
      setLecture(data.updatedLecture);
    } catch (error) {
      console.error('Error fetching lecture details:', error);
    }
  };

  return (
    <div>
      {lecture && (
        <div className="container">
        {lecture && (
          <div>
            <h2 className="title">{lecture.lectureName}</h2>
            <div className="info">
              <p>Date: {lecture.Date}</p>
            </div>
            <div className="qr-code">
              <p>QR Code:</p>
              <img src={lecture.qrCode} alt="QR Code" />
            </div>
            <div className="otp">
              <p>OTP: {lecture.otp}</p>
            </div>
            {/* You can add more details as needed */}
          </div>
        )}
      </div>
      )}
    </div>
  );
}

export default LectureDetails;

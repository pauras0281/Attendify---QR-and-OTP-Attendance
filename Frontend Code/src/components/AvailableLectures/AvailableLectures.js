import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import ScanQRCode from '../Portals/ScanQRCode';


const AvailableLectures = () => {
    const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScanQRPortal, setShowScanQRPortal] = useState(false); // State to control the visibility of the Scan QR portal
  const [showOTPPortal, setShowOTPPortal] = useState(false); // State to control the visibility of the OTP portal
  const [selectedLectureId, setSelectedLectureId] = useState(null); // State to store the ID of the selected lecture


  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/lectures');
        const data = response.data.lectures
        setLectures(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lectures:', error);
        setLoading(false);
      }
    };
    fetchLectures();
  }, []);

  const handleScanQR = (lectureId) => {
    console.log('Scanning QR code for lecture:', lectureId);
    setSelectedLectureId(lectureId);
    setShowScanQRPortal(true);

  };

  const handleEnterOTP = (lectureId) => {
    console.log('Entering OTP for lecture:', lectureId);
    setSelectedLectureId(lectureId);
    setShowOTPPortal(true);
  };

  const isExpired = (lecture) => {
    return new Date(lecture.otpExpiry) < new Date();
  };

  return (
    <div className="lecture-container">
      <h2 className="lecture-heading text-center">All Lectures</h2>
      {loading ? (
        <p>Loading...</p>
      ) : lectures.length === 0 ? (
        <p>No lectures available</p>
      ) : (
        <table className="lecture-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Teacher</th>
              <th>Date</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((lecture) => (
              <tr key={lecture._id}>
                <td>{lecture.lectureName}</td>
                <td>{lecture.createdBy.name}</td>
                <td>{new Date(lecture.Date).toLocaleDateString()}</td>
                <td>{new Date(lecture.Date).toLocaleTimeString()}</td>
                <td>
                  <button
                    className="scan-btn"
                    onClick={() => handleScanQR(lecture._id)}
                    disabled={isExpired(lecture)}
                  >
                    Scan QR
                  </button>
                  <button
                    className="otp-btn"
                    onClick={() => handleEnterOTP(lecture._id)}
                    disabled={isExpired(lecture)}
                  >
                    Enter OTP
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showScanQRPortal && <ScanQRCode lectureId={selectedLectureId} onClose={() => setShowScanQRPortal(false)} />}
            {showOTPPortal && <EnterOTP lectureId={selectedLectureId} onClose={() => setShowOTPPortal(false)} />}

    </div>
  );
};
export default AvailableLectures
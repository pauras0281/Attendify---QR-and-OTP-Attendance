import React from "react";
import qr from "../../utils/qr2.jpg";
import otp from "../../utils/otp4.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MarkAttendance = () => {
  return (
    <>
    <Header />
    <h1 className="atmheader">Select Any Option To Mark Your Attendance</h1>
    <div className="container attendanceMark">
      
      <div className="attendanceCard card1">
        <h1>Scan QR</h1>
        <img src={qr} />
      </div>
      <div className="attendanceCard card2">
        <h1>Enter OTP</h1>
        <img src={otp} />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MarkAttendance;

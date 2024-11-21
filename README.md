Attendify - MERN Stack Attendance Management System

This is my attendance system project where the students can mark their attendance just by scanning a qr code or by entering the otp.

Overview
Attendify is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage and track attendance through modern methods like QR code scanning and OTP verification. The application is designed for both students and administrators, providing different dashboards and features for each user role.

Features
•	User Authentication:
o	Sign up and login functionality for students and administrators.
o	Admin authentication using an admin key for role-based access control.
•	Admin Dashboard:
o	View and manage student attendance.
o	Create lectures and assign attendance tracking using QR codes and OTP.
•	Student Dashboard:
o	View attendance records.
o	Mark attendance using QR code or OTP.
•	QR Code & OTP Integration:
o	QR codes are generated for each lecture for students to scan.
o	OTPs are used for additional security in marking attendance.
•	Responsive UI:
o	Fully responsive user interface built using React.
o	Modern, clean design with real-time updates.
Technologies Used
•	Frontend: React.js, React Router, Typewriter Effect
•	Backend: Node.js, Express.js
•	Database: MongoDB
•	Authentication: JWT, Bcrypt.js (for hashing passwords)
•	Styling: CSS, FontAwesome icons for UI components
•	Others: Axios (for API requests), React Portals (for QR display)
Installation & Setup
Prerequisites
Before you begin, ensure you have the following installed:
•	Node.js: Download and install Node.js
•	MongoDB: Install MongoDB
Clone the Repository
Clone the project to your local machine using the following command:
bash
Copy code
git clone https://github.com/your-username/attendify.git
Backend Setup
1.	Navigate to the backend folder:
bash
Copy code
cd backend
2.	Install dependencies:
bash
Copy code
npm install
3.	Create a .env file in the root of the backend folder to store environment variables. You can use the following template:
env
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/attendify
JWT_SECRET=your_jwt_secret_key
4.	Run the backend server:
bash
Copy code
npm start
The backend will run on http://localhost:5000.
Frontend Setup
1.	Navigate to the frontend folder:
bash
Copy code
cd frontend
2.	Install dependencies:
bash
Copy code
npm install
3.	Run the frontend server:
bash
Copy code
npm start
The frontend will run on http://localhost:3000.
Database Setup
•	MongoDB: Make sure your MongoDB server is running locally or you have a remote MongoDB instance set up.
API Endpoints
The backend exposes several API routes for handling user authentication, attendance, and lecture management:
•	POST /api/user/signup – Register a new user (student/teacher).
•	POST /api/user/login – Log in an existing user.
•	GET /api/lectures – Get all lectures.
•	POST /api/lectures – Create a new lecture (admin).
•	GET /api/students – Get all students (admin).
•	GET /api/attendance – Get attendance data for students and lectures (admin).
•	GET /api/attendancesheet – Get attendance records.
Folder Structure
bash
Copy code
/backend
  ├── /controllers  # Contains route handlers
  ├── /models      # Contains Mongoose models
  ├── /routes      # Contains route definitions
  ├── /utils       # Utility functions, JWT authentication etc.
  └── server.js    # Main entry point of the server

/frontend
  ├── /src
      ├── /components   # All UI components (Login, Signup, Dashboard etc.)
      ├── /pages        # Pages (StudentHome, AdminHome, Attendance etc.)
      ├── /utils        # Utility functions (API calls, Auth, etc.)
      └── App.js        # Main entry point of the frontend
Usage
Once the project is set up and running, you can interact with the application via the following:
1.	Sign Up: Users (students or administrators) can sign up by providing their name, email, phone number, and role (student/teacher). Teachers will require an admin key to register.
2.	Login: Users can log in using their email and password.
3.	Dashboard:
o	Students can view their attendance and mark their attendance via QR code or OTP.
o	Administrators can create lectures, view student attendance, and manage attendance records.
4.	Attendance Tracking: Students can either scan the QR code or enter the OTP provided by the admin to mark their attendance.
Example Screenshots
Admin Dashboard:
![home1](https://github.com/user-attachments/assets/2170f9d2-aa60-4fdf-b4cf-e65e29736fd4)

Student Dashboard:

Mark Attendance:
![scan](https://github.com/user-attachments/assets/a9ab31f8-c3af-4886-a7c5-f777e4e98182)

Show QR and OTP:
![show qr](https://github.com/user-attachments/assets/fcb358a4-7a70-49a3-b71c-37cc28290114)

All available lectures:
![all](https://github.com/user-attachments/assets/9bff0988-5807-4db7-a192-282bda6e2987)

My Attendance:
![myatt](https://github.com/user-attachments/assets/253d3683-c1d4-4d07-98ee-2373c5e279a4)





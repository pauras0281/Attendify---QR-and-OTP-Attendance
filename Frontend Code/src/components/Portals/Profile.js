import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css'

const Profile = ({onClick}) => {
    const [user, setUser] = useState({}); // State to store user data
        

     useEffect(() => {
       
        fetchUserData(); 

    }, []);

    const fetchUserData = async () => {
        try {
            // Get the user ID from sessionStorage
            console.log(sessionStorage.getItem( "userId" ));
            const userId = sessionStorage.getItem('userId');
            console.log(userId);
            // Make a GET request to fetch user data by ID
            const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
            const userData = await response.data.user; // Assuming the response contains user data
            setUser(userData); // Set the user data to the state
            console.log(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


  return ReactDOM.createPortal(
    <>
    <div className='portal-container' onClick={onClick}></div>
        <div className='container profile-cont'>
        <div className='profile-photo'></div>
        <div className='info'>
            <h4><b className='bold'>Name:</b> {user.name}</h4>
            <h4><b className='bold'>Phone:</b> {user.phone}</h4>
            <h4><b className='bold'>Email:</b> {user.email}</h4>
            <h4><b className='bold'>Role:</b> {user.role}</h4>
        </div>
        <div className='update'><button className=''>Edit</button></div>
        </div>
        </>
    , 
    document.getElementById( 'portal' )
  )
}

export default Profile

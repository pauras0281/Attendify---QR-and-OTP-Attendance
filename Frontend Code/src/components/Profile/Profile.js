import React from 'react'
import './index.css'

const Profile = () => {
  return (
    <div className='profile-comp'>
        <div className='profile-photo'></div>
        <div className='info'>
            <h4>Name: </h4>
            <h4>Phone: </h4>
            <h4>Email: </h4>
            <h4>Role: </h4>
        </div>
        <div className='update'><button className='btn btn-danger'>Edit</button></div>
      
    </div>
  )
}

export default Profile

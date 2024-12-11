import React from 'react'
import { useState } from 'react'
import User from './components/User.jsx';
import CustomButton from './components/shared/CustomButton.jsx';

export default function App() {

  const [users, setUsers] = useState([
    { "id": "1", "name": "abd", "email": "abd@gmail.com", "isBlocked": "false" },
    { "id": "2", "name": "afnan", "email": "afnan@gmail.com", "isBlocked": "false" },
    { "id": "3", "name": "ibrahim", "email": "ibrahim@gmail.com", "isBlocked": "false" },
    { "id": "4", "name": "hosam", "email": "hosam@gmail.com", "isBlocked": "false" },
  ]);




  return (
    <>
     <CustomButton text='Add User' type='create' />
    
    <div className='users'>
      {users.map(user =>
        <User name={user.name} email={user.email} />
      )}
    </div>

    </>
  )
}

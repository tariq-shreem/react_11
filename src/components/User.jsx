import React from 'react'
import Test from './Test.jsx'
import CustomButton from './shared/CustomButton.jsx'

export default function User({name,email}) {


    return (
        <div className='user'>
            
            <h2>Name is {name}</h2>
            <h3>Email is {email}</h3> 
            <CustomButton text="Details" type='info' />
            <CustomButton text="Delete" 
            type='delete'
            />
        </div>
    )
}

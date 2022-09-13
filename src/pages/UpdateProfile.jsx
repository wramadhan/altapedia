import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MainProfile from '../components/MainProfile'
import InputEditProfile from '../components/InputEditProfile'
import DividerUpdateProfile from '../components/DividerUpdateProfile'

const UpdateProfile = () => {
    return (
        <>
            <Navbar />
            <h1 className="px-4 sm:px-20 h-auto py-4 text-4xl font-bold sm:pt-20 sm-10 sm:h-44 bg-[#DBE5FA] w-full font-bold">My Profile</h1>
            <div className='px-4 sm:px-20'>
                <MainProfile />
                <DividerUpdateProfile />
                <InputEditProfile name='Username' type='text' placeholder='Edit username' instruction='Use lowercase and uppercase letters or combine with numbers with no
          spaces.'/>
                <DividerUpdateProfile />
                <InputEditProfile name='Email' type='email' placeholder='Edit email' />
                <DividerUpdateProfile />
                <InputEditProfile name='Password' type='password' placeholder='New password' /><br></br>
                <InputEditProfile name='Retype Password' type='password' placeholder='New password' />
                <DividerUpdateProfile />
                <div className='mb-30 sm:mb-44 sm:flex sm:justify-between flex-col sm:flex-row'>
                    <button className='bg-[#F7731C] text-white rounded-lg py-3 w-52 text-base font-medium mb-44 mr-40 sm:mr-0'>Save Changes</button>
                    <button className='bg-[#FFEBEB] text-[#FF3333] rounded-lg py-3 w-52 text-base font-medium mb-44'>Delete Account</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateProfile
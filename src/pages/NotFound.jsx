import React from 'react'
import Navbar from '../components/Navbar'
import soundfile from '../audio/yntkts.mp3'
import ReactAudioPlayer from 'react-audio-player';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='text-[#1B345F] w-full flex justify-center mt-6 sm:mt-14'>
                <img className='rounded-lg w-2/5' src="https://c.tenor.com/9pxLR-8u5z4AAAAC/homer-simpson-hiding.gif" alt='404 not found' />
            </div>
            <p className='text-5xl font-semibold text-center'>Yo ndak tau kok tanya saya</p>
            <p className='text-center italic text-3xl'>404 not found</p>
            <div className='w-full flex justify-center hidden'>
                <ReactAudioPlayer src={soundfile} loop={true} volume={0.7} autoPlay={true} controls type="audio/ogg/mpeg" />
            </div>
        </>
    )
}

export default NotFound
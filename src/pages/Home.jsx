import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div>Home</div>
            <Card />
            <Footer />
        </>
    )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Home/Banner'
import HeroTitle from '../components/Home/HeroTitle'
import ServiceGrid from '../components/Home/ServiceGrid'

const HomePage = () => {
    return (
        <main>
            <Banner />
            <ServiceGrid />
        </main>
    )
}

export default HomePage

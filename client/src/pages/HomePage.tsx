import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <div className="App">
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </div>
            <Link to={`test`} >test page</Link>
        </>
    )
}

export default HomePage

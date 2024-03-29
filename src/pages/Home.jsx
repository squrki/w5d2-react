import React from 'react'
import { useNavigate } from 'react-router-dom'


const handleClick = (pressed, e) => {

}

export default function Home() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Home Page</h1>
            <p>This app lists books and websites that are interesting to me.</p>
            <button onClick={() => navigate('../Periodicals')}>Periodicals</button>
            <button onClick={() => navigate('../Websites')}>Websites</button >
        </>
    )
}

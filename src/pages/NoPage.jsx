import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NoPage() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Error 404: not found</h1>
            <button onClick={() => navigate('../Home')}>Go Home</button>
        </>
    )
}

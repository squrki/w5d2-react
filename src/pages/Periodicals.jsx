import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

export default function Books() {
    const navigate = useNavigate()
    const periodicals = {
        'a': {
            title: "Bear's Guide to Earning Non-Traditional College Degrees",
            author: "John Bear, PhD",
            imgURL: "https://m.media-amazon.com/images/I/91hzJNovnOL._SY466_.jpg",
            impact: "Gave me ideas to help me focus on my education while on 'sabbatical', ultimately earning my bachelor's degree while still inside"
        },
        'b': {
            title: "Wired",
            author: "Condé Nast",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBUgt1mLDOd8IU3pcm76bdOspYVRo4a3DPOek2IRwbA&s",
            impact: "Kept me informed on current social issues that involved technology"
        },
        'c': {
            title: "Popular Science",
            author: "recurrent",
            imgURL: "https://www.popsci.com/uploads/2023/03/21/PopSci_LogoStacked_Black_s.png",
            impact: "Taught me about current technology and future possibilities"
        },
        'd': {
            title: "USA Today",
            author: "Gannett",
            imgURL: "https://yt3.googleusercontent.com/ytc/AIdro_mNVdvBGR50BTpC2dQ7PsSyUxJVzic9j2dWXmRU0ME=s900-c-k-c0x00ffffff-no-rj",
            impact: "Kept me informed about current events and issues"
        },
        'e': {
            title: "Maximum PC",
            author: "Future US",
            imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Maximum_PC_Holiday_2018_cover.jpg/220px-Maximum_PC_Holiday_2018_cover.jpg",
            impact: "Kept me informed about computer technology and how computer enthusiasts maximized capabilities"
        },
    }

    return (
        <>
            <h1>Periodicals I Read Inside</h1>
            <div className='Periodicals'>
                {Object.keys(periodicals).map((key) => (
                    <table>
                        <img src={periodicals[key].imgURL} width="100" />
                        <tr><td>Title</td><td>:</td><td>{periodicals[key].title}</td></tr>
                        <tr><td>Author/Publisher</td><td>:</td><td>{periodicals[key].author}</td></tr>
                        <tr><td>Impact</td><td>:</td><td>{periodicals[key].impact}</td></tr>
                    </table>
                ))}
            </div>
            <button onClick={() => navigate('../Home')}>Go Home</button>
        </>
    )
}
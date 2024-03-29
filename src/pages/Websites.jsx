import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Websites() {
    const navigate = useNavigate()

    const websites = {
        'a': {
            name: "YouTube",
            URL: "www.youtube.com",
            imgURL: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
            impact: "General entertainment, news, and education/instruction"
        },
        'b': {
            title: "Reddit",
            URL: "www.reddit.com",
            imgURL: "https://www.redditinc.com/assets/images/site/Reddit_Icon_FullColor-1_2023-11-29-161416_munx.jpg",
            impact: "General entertainment, information, and education/instruction"
        },
        'c': {
            title: "Netflix",
            URL: "www.netflix.com",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx7CHtJT1-gtx_-KiZr0ud_wBsivDKr--WHT2WOsgGg&s",
            impact: "General entertainment and escapism"
        },
    }
    return (
        <>
            <h1>Websites</h1>
            <div className='Websites'>
                {Object.keys(websites).map((key) => (
                    <table>
                        <img src={websites[key].imgURL} width="100" />
                        <tr><td>Title</td><td>:</td><td>{websites[key].title}</td></tr>
                        <tr><td>URL</td><td>:</td><td>{websites[key].author}</td></tr>
                        <tr><td>Impact</td><td>:</td><td>{websites[key].impact}</td></tr>
                    </table>
                ))}
            </div>
            <button onClick={() => navigate('../Home')}>Go Home</button>
        </>
    )
}

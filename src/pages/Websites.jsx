import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css"

export default function Websites() {
    const navigate = useNavigate()
    const [newItem, setNewItem] = useState({ name: "", URL: "", imgURL: "", impact: "", })
    const [websites, setWebsites] = useState([
        {
            name: "YouTube",
            URL: "www.youtube.com",
            imgURL: "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
            impact: "General entertainment, news, and education/instruction"
        },
        {
            name: "Reddit",
            URL: "www.reddit.com",
            imgURL: "https://www.redditinc.com/assets/images/site/Reddit_Icon_FullColor-1_2023-11-29-161416_munx.jpg",
            impact: "General entertainment, information, and education/instruction"
        },
        {
            name: "Netflix",
            URL: "www.netflix.com",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdx7CHtJT1-gtx_-KiZr0ud_wBsivDKr--WHT2WOsgGg&s",
            impact: "General entertainment and escapism"
        },
    ])

    const addWebsite = (newItem) => {
        setWebsites([...websites, newItem])
    }


    function handleSubmit(newItem) {
        if (newItem.name === "") return
        addWebsite(newItem)
        setNewItem({ name: "", URL: "", imgURL: "", impact: "", })
        document.getElementById("newName").value = ""
        document.getElementById("newURL").value = ""
        document.getElementById("newImgURL").value = ""
        document.getElementById("newImpact").value = ""
    }

    return (
        <>
            <h1>Websites</h1>
            <div className='Websites'>
                {websites.map((val) => (
                    < div className='row' key={val.name}>
                        <div className='column left'>
                            <img src={val.imgURL} height="75" />
                        </div>
                        <div className='column right' key='keyval'>
                            <table><tbody>
                                <tr><td>Website</td><td>:</td><td>{val.name}</td></tr>
                                <tr><td>URL</td><td>:</td><td>{val.URL}</td></tr>
                                <tr><td>Impact</td><td>:</td><td>{val.impact}</td></tr>
                            </tbody></table>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Suggestions to add?</h2>
            <div onSubmit={e => e.target.value = ""}>
                <p>Website name: <input id='newName'
                    onChange={e => setNewItem({ ...newItem, "name": e.target.value })}
                    type="text" /></p>
                <p>URL: <input id='newURL'
                    onChange={e => setNewItem({ ...newItem, "URL": e.target.value })}
                    type="text" /></p>
                <p>Image URL: <input id='newImgURL'
                    onChange={e => setNewItem({ ...newItem, "imgURL": e.target.value })}
                    type="text" /></p>
                <p>Impact: <input id='newImpact'
                    onChange={e => setNewItem({ ...newItem, "impact": e.target.value })}
                    type="text" /></p>
                <button onClick={() => {
                    handleSubmit(newItem)
                }
                } className="btn">Add</button>
            </div>
            <button onClick={() => navigate('../Home')}>Go Home</button>
        </>
    )
}

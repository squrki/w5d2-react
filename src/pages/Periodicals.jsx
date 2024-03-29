import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css"

export default function Books() {
    const navigate = useNavigate()
    const [newItem, setNewItem] = useState({ title: "", author: "", imgURL: "", impact: "", })
    const [periodicals, setPeriodicals] = useState([
        {
            title: "Bear's Guide to Earning Non-Traditional College Degrees",
            author: "John Bear, PhD",
            imgURL: "https://m.media-amazon.com/images/I/91hzJNovnOL._SY466_.jpg",
            impact: "Gave me ideas to help me focus on my education while on 'sabbatical', ultimately earning my bachelor's degree while still inside"
        },
        {
            title: "Wired",
            author: "Condé Nast",
            imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBUgt1mLDOd8IU3pcm76bdOspYVRo4a3DPOek2IRwbA&s",
            impact: "Kept me informed on current social issues that involved technology"
        },
        {
            title: "Popular Science",
            author: "recurrent",
            imgURL: "https://www.popsci.com/uploads/2023/03/21/PopSci_LogoStacked_Black_s.png",
            impact: "Taught me about current technology and future possibilities"
        },
        {
            title: "USA Today",
            author: "Gannett",
            imgURL: "https://yt3.googleusercontent.com/ytc/AIdro_mNVdvBGR50BTpC2dQ7PsSyUxJVzic9j2dWXmRU0ME=s900-c-k-c0x00ffffff-no-rj",
            impact: "Kept me informed about current events and issues"
        },
        {
            title: "Maximum PC",
            author: "Future US",
            imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Maximum_PC_Holiday_2018_cover.jpg/220px-Maximum_PC_Holiday_2018_cover.jpg",
            impact: "Kept me informed about computer technology and how computer enthusiasts maximized capabilities"
        },
    ])

    const addPeriodical = (newItem) => {
        setPeriodicals([...periodicals, newItem])
    }

    function handleSubmit(newItem) {
        if (newItem.title === "") return
        addPeriodical(newItem)
        setNewItem({ title: "", author: "", imgURL: "", impact: "", })
        document.getElementById("newTitle").value = ""
        document.getElementById("newAuthor").value = ""
        document.getElementById("newImgURL").value = ""
        document.getElementById("newImpact").value = ""
    }

    return (
        <>
            <h1>Periodicals I Read Inside</h1>
            <div className='Periodicals'>
                {periodicals.map((val) => (
                    < div className='row' key={val.title}>
                        <div className='column left'>
                            <img src={val.imgURL} height="75" />
                        </div>
                        <div className='column right'>
                            <table><tbody >
                                <tr key={val.title}><td>Title</td><td>:</td><td>{val.title}</td></tr>
                                <tr key={val.author}><td>Author/Publisher</td><td>:</td><td>{val.author}</td></tr>
                                <tr key={val.impact}><td>Impact</td><td>:</td><td>{val.impact}</td></tr>
                            </tbody></table>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Suggestions to add?</h2>
            <div onSubmit={e => e.target.value = ""}>
                <p>Book Title: <input id='newTitle'
                    onChange={e => setNewItem({ ...newItem, "title": e.target.value })}
                    type="text" /></p>
                <p>Author/Publisher: <input id='newAuthor'
                    onChange={e => setNewItem({ ...newItem, "author": e.target.value })}
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
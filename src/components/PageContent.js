import { useState } from 'react'
import { memesData } from './../memesData'
export default function PageContent() {


    const [memeImg, setMemeImg] = useState('')

    function getMemeImage(){
        let getNewImage = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
        setMemeImg(prevImg => getNewImage)
    }

    return (
        <div className="page-content">
            <main>
                <div className="meme-input-form">
                    <div className="textinput-container">
                        <input className="toptext-input" type="text" placeholder="Enter top text"/>
                        <input className="bottomtext-input" type="text" placeholder="Enter bottom text"/>
                    </div>
                    <button onClick={getMemeImage} id="getmeme-button" type="submit">Get a new meme image 🖼</button>
                </div>
                <img className="meme-image-container" src={memeImg}/>
            </main>
        </div>
    )    
}

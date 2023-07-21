import { useState } from 'react'
import { memesData } from './../memesData'
export default function PageContent() {

    const [meme, setMeme] = useState({
        topText:"", 
        bottomText:"", 
        randomImg:"http://i.imgflip.com/1bij.jpg"
    })

    // eslint-disable-next-line
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(){
        let getNewImage = allMemeImages.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
        setMeme(prevImg => ({...prevImg, randomImg:getNewImage}))
    }
    
    function handleChange(event){
        setMeme(prevFormState => ({
            ...prevFormState,
            [event.target.name] : event.target.value
        }))
    }

    return (
        <main>
            <div className="meme-input-form">
                <div className="textinput-container">
                    <input 
                        name="topText" 
                        type="text" 
                        placeholder="Enter top text"
                        onChange={handleChange}
                        value={meme.topText}
                    />

                    <input 
                        name="bottomText" 
                        type="text" 
                        placeholder="Enter bottom text" 
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={getMemeImage} id="getmeme-button" type="submit">Get a new meme image 🖼</button>
            </div>
            <div className='meme-img'>
                { meme.randomImg && <img className="meme-image-container" src={meme.randomImg} alt=""/> }
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )    
}

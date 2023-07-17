export default function PageContent() {
    return (
        <div className="page-content">
            <main>
                <div className="meme-input-form">
                    <div className="textinput-container">
                        <input className="toptext-input" type="text" placeholder="Enter top text"/>
                        <input className="bottomtext-input" type="text" placeholder="Enter bottom text"/>
                    </div>
                    <button id="getmeme-button" type="submit">Get a new meme image 🖼</button>
                </div>
            </main>
        </div>
    )    
}

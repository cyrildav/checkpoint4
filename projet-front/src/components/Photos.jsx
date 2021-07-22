import React from 'react'
import "./components.css"

function Photos() {
    return (
        <div>
            <h3 className="photos">Photos</h3>
            <div className="imgSection">
                
                <img id="photos" src="https://picsum.photos/200/300" alt="test" />
                <img id="photos" src="https://picsum.photos/200/300" alt="test" />
                <img id="photos" src="https://picsum.photos/200/300" alt="test" />
                <img id="photos" src="https://picsum.photos/200/300" alt="test" />
                
            </div>
        </div>
    )
}

export default Photos

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText=''
        setText(newText)
    }
    
    
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState("type here");
    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3">
            <h1>your text summary</h1>
            <p>{text.split(" ").length} word & {text.length} characters</p>
            <p>{0.008 * (text.split(" ").length-1)} Minutes required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </> 
    )
}
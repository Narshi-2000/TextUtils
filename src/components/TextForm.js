import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange =(event) => {
        setText(event.target.value);
    }

    const handleCopy =() => {
        let t = document.getElementById("myBox");
        t.select();
        navigator.clipboard.writeText(t.value);
    }

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
    return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className="mb-4" style={{fontSize: 30}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  style={{backgroundColor: props.mode === 'dark' ? '#13466e':'white', color: props.mode === 'dark' ? 'white':'#042743'}} value={text} id="myBox" rows="7" onChange={handleChange}></textarea>
        </div>
        <button diabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button diabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button diabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy button</button>
        <button diabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove extra spaces</button>
    </div>
    <div className = "container my-3" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 style={{fontSize: 25}}> Text Summary:</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0;}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2  style={{fontSize: 25}}>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here.."}</p>
    </div>
    </>
  )
}

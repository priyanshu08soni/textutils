import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  
  const handleClearText=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }   
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces get removed!","success");
  }
  const [text,setText]=useState('Enter Text Here');
  // setText("new Text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>

      <h1 >{props.heading}</h1>
          <div className="mb-3">
            
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleClearText}>Clear All Text</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy All Text</button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something int the textbox above to preview it here"}</p>
    </div>
    </>
  )
}


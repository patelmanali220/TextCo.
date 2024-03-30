import React, {useState} from 'react'


export default function Textform(props) {
 const handupClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showalert("converted to uppercase", "success");
 }
 const handloClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showalert("converted to lowercase", "success");
 }
 const handclClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = " ";
  setText(newText);
  props.showalert("cleared", "success");
 }
const handlecopy = ()=>{
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showalert("Text copied", "success");
  }
 
const removespace = ()=>{
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
props.showalert("Extra space removed in the text", "success");
}

 const handleOnChange = (event)=>{
  console.log("on changed");
  setText(event.target.value); 
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container'style={{color: props.mode=== `light`? `#042743`:`white`}}> 
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== `light`? `white`:`grey`, color: props.mode=== `light`? `#042743`:`white`}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handupClick}>convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handloClick}>convert to LowerCase</button>  
        <button className="btn btn-primary mx-2" onClick={handclClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removespace}>Remove Space</button>
    </div>
    <div className="container my-4" style={{color: props.mode=== `light`? `#042743`:`white`}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{ 0.008* text.split("").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter something in the text box to preview" }</p>
    </div>
    </>
  )
}

import React, {useState} from 'react'    /*UseState is a hook in react */


export default function TextForm(props) {
  const[texts, setText] = useState("Enter text here: ");   /* Whenever we update a text, we will do it through setText*/
  //texts = "new text";  wrong way to change the state
  // setText("new text");  //Correct way to change the state

  const handleUpClick = () => {
    // console.log("This is Handle Up Click Function" + texts);
    let newText = texts.toUpperCase();
    // setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  }
  
  const handleLoClick = () => {
    let newText = texts.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handleTitleClick = () => {
    let newText = texts.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
  }
  
  //reversing the words in a string of a paragraph
  const handReverseClick = () => {
    let newText = texts.split(" ").reverse().join(" ");
    setText(newText);
  }
  
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  }

  //text is a state
  //onchange event was necessary to listen because we cant type in the textarea without it
  const handleOnChange = (event) => {
    // console.log("This is Handle On Click Function")
    setText(event.target.value);    //event.target.value is written to add the more text in textarea on output along with the previous text
  }

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark' ?  'white' : 'rgb(13 37 61)'}}>


    {/* <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div> */}

      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" onChange={handleOnChange} value={texts} rows="8" style={{backgroundColor : props.mode === 'light' ?  'white' : 'white', color : props.mode === 'white' ?  'black' : 'rgb(13 37 61)'}}></textarea>
      </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>                 {/* to add a button*/}
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>                 {/* to add a button*/}
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>                 {/* to add a button*/}
        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Case</button>                 {/* to add a button*/}
        <button className="btn btn-primary mx-2" onClick={handReverseClick}>Reverse the text</button>                 {/* to add a button*/}
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark' ?  'white' : 'rgb(13 37 61)'}}>    {/* my-1 is a bootstrap class which will give some margin on y-axis*/}
      <h1>Your text summary</h1>
      <p>{texts.split(" ").length} words and {texts.length} characters</p>   {/* texts.length will give the no of characters in the texts */}
      <p>{0.008 * texts.split(" ").length} Minutes taken to read the words</p>   {/* texts.length will give the no of characters in the texts */}
      <h2>
        Preview
      </h2>
      <p>{texts.length > 0 ? texts : "Enter something in the textbox above to preview it here"}</p>
    
    </div>

    </>
  )
}

// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import TextForm from './component/TextForm';
import Navbar from './component/Navbar';
import React, {useState} from "react";
import Alert from './component/Alert';

//FOR ROUTING
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


// let name = "Shivi";
function App() {
  const[mode, setMode] = useState('light');
  
  // ALERT PART
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }

    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(13 37 61)" ;
      showAlert("Dark mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>    {/*title works as the props in N*/}
        
          <Alert alert = {alert}/>

          <div className="container">   {/*Through container the textarea will come in between*/}
            
            {/* <Routes>
                <Route exact path="/about" 
                element={<About />} />
                
                < Route exact path="/"
                  
                  element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
              
                </Routes> */}

            <TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode} />
            
          </div>

          {/* <About/>     About.js wala portion page */}
      {/* </Router> */}
    </>
  );
}

export default App;

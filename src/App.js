import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
// import About from './components/About.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert =(message, type)=>{
    setalert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
  }

  const toggleMode = () => {
   if(mode === "light"){
    setmode("dark");
    document.body.style.background = '#042743';
    showalert("Dark mode has been enable","success");
   }
   else{
    setmode("light");
    document.body.style.background = 'white';
    showalert("light mode has been enable","success");
  }
  }

  return (
  <>
  {/* <Router> */}
<Navbar title="TextCo." mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container my-3">
{/* <Routes>
          <Route exact path="/about" element={  <About />} />
        
          <Route exact path="/" element={  <Textform showalert={showalert} heading="Enter the text to analysis below" mode={mode} />} /> */}
          <Textform showalert={showalert} heading="Enter the text to analysis below" mode={mode} />
        
{/* </Routes> */}
</div>
{/* </Router> */}
  </>
    );
}

export default App;

import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode =() =>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor="#042743";
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode is enabled","success");
      }
  }

  const showAlert =(message, type) =>{
    setAlert({
        msg:message,
        type: type
      })
  }


  return (
  <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route path="/" element ={ <TextForm heading="Try TextUtils - word counter, character counter, remove spaces" mode={mode}/>} />    
        </Routes>
      </div>
    </Router>  
  </>
  );
}

export default App;


import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from "../src/Components/Functionality/Login"
import Signup from "../src/Components/Functionality/Signup"


function App() {

  return (
    
    <>
    <Routes>
<Route exact path="/" element={<Login/>}></Route>
<Route exact path="/Signup" element={<Signup/>}></Route>

    </Routes>
    </>
   
  );
}

export default App;

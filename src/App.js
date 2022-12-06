
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Forgotpass from './components/Forgot/Forgotpass'; 
import Email from './components/Email/Email';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={   <Login/> }> </Route>
        <Route path='/signup' element={   <Signup/> }> </Route>
        <Route path='/forgot' element={   <Forgotpass/> }> </Route>
        <Route path='/email' element={   <Email/> }> </Route>
    
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import LeftTab from './Layout/LeftTab/LeftTab';
import Nav from './Layout/Nav/Nav' 
import SubNav from './Layout/SubNav/SubNav';
import Answers from './Pages/AnswersPage/Answers';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {

  return (
    <div className="App">
      <Nav/>
     
      {window.location.pathname === '/' || window.location.pathname === '' ? <SubNav/>:<div/>}
     
      <div className='contents'>
        <LeftTab/>
  
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/answers' element={<Answers/>}/>
            <Route path='/askquestion' element={<AskQuestion/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        
      </div>

    </div>
  );
}

export default App;

import { Route, Routes , useLocation} from 'react-router-dom';
import './App.css';
import LeftTab from './Layout/LeftTab/LeftTab';
import Nav from './Layout/Nav/Nav' 
import RightTab from './Layout/RightTab/RightTab';
import SubNav from './Layout/SubNav/SubNav';
import Answers from './Pages/AnswersPage/Answers';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const currentLocation = useLocation()
  
  console.log('from home: ' + currentLocation.pathname);

  return (
    <div className="App">

      <Nav/>
      {currentLocation.pathname === '/' || currentLocation.pathname === '' || currentLocation.pathname === '/tab/' ? <SubNav/>:<div/>}
     

      <div className='contents' >
        <div id='container1'>
          {localStorage.getItem('token')?<LeftTab/>:''}
        
        </div>
        <div id='container2'>
          <Routes>
            <Route path='/:question' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/answers/:id' element={<Answers/>}/>
            <Route path='/askquestion' element={<AskQuestion/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='*' element={<div>Error 404</div>}/>
          </Routes>
        </div>
        <div id='container3'>
          <RightTab/>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;

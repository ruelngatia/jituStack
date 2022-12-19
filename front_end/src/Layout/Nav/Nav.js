import React, { useState, useEffect } from 'react'
import './Nav.css'
import { MdMenu } from "react-icons/md";
import { MdOutlineSearch ,MdCancel} from "react-icons/md";
import DropMenu from '../DropDownMenu/DropMenu';
import LogoutMenu from '../../Components/LogoutMenu/LogoutMenu';
import axios from 'axios'

export default function Nav() {


  const [search, setSearch] = useState('')

  const[showMenu,setshowMenu] =useState({display:'none'})
  const[hidden,sethidden] =useState(true)

 
  const[showDropMenu,setshowDropMenu] =useState({display:'none'})
  const[menuHidden,setmenuHidden] =useState(true)

   const menuClickedhandler = () => {
    sethidden(!hidden)
    hidden?setshowMenu({display:''}):setshowMenu({display:'none'})
  }

  const config = {
    headers:{
      Authorization: "Bearer ".concat(localStorage.getItem('token'))
    }
  }

    
  return (
    <div className='nav'>
        <ul className='nav-ul'>
            <li className='nav-items'>
                {hidden?<MdMenu size={24} onClick={menuClickedhandler}/>:<MdCancel size={24} color={'tomato'} onClick={menuClickedhandler}/>} 
            </li>
            <li className='nav-items'>Questions</li>
            <li className='nav-items'>
                <input type={'text'} placeholder={'Search question'} value={search}
                onChange={async(e)=>{
                    setSearch(e.target.value)
                    let data = (await axios.get(`http://localhost:4040/askquestion/:?question=${search}`,config)).data
                    console.log(data);
                }}
                />
            </li>
            <li className='nav-items'><MdOutlineSearch size={20}/></li>
            <li className='nav-items'
                onClick={()=>{
                    console.log('clicked');
                    setmenuHidden(!menuHidden)
                    menuHidden?setshowDropMenu({display:''}):setshowDropMenu({display:'none'}) 
                }}
            >
                <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80' alt='user'/>
                <div className='profile-menu' style={showDropMenu}><LogoutMenu/></div>
            </li>
        </ul>
        <div style={showMenu}>
            <DropMenu/>
        </div>
    </div>
  )
}

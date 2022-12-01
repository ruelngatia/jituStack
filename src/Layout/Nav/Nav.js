import React, { useState } from 'react'
import './Nav.css'
import { MdMenu } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import DropMenu from '../DropDownMenu/DropMenu';

export default function Nav() {

  
  const[showMenu,setshowMenu] =useState({display:'none'})
  const[hidden,sethidden] =useState(true)
 
 
    
  return (
    <div className='nav'>
        <ul className='nav-ul'>
            <li className='nav-items'>
                <MdMenu size={20}
                    onClick={()=>{
                        sethidden(!hidden)
                        hidden?setshowMenu({display:''}):setshowMenu({display:'none'})
                    }}
                />
            </li>
            <li className='nav-items'>Questions</li>
            <li className='nav-items'><MdOutlineSearch size={20}/></li>
            <li className='nav-items'>
                <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80' alt='user'/>
            </li>
        </ul>
        <div style={showMenu}>
            <DropMenu/>
        </div>
    </div>
  )
}

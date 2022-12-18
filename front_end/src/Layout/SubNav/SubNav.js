import {React} from 'react'
import { Link, useLocation } from 'react-router-dom'

import './SubNav.css'

export default function SubNav() {

  let currentLocation = useLocation()
 

  return (
    <div className='sub-nav'>
        <ul>
            <li><Link className={currentLocation.search === '?tab=all' || currentLocation.search === '' || currentLocation.search === '/' ?"  sub-nav-link active": "sub-nav-link"} to={'/?tab=all'}>All</Link></li>
            <li><Link className={currentLocation.search === '?tab=newest'?" sub-nav-link active": "sub-nav-link"} to={"/tab/?tab=newest"}>Newest</Link></li>
            <li><Link className={currentLocation.search === '?tab=featured'?"  sub-nav-link active": "sub-nav-link"} to={"/tab/?tab=featured"}>Featured</Link></li>
            <li><Link className={currentLocation.search === '?tab=frequentlyasked'?" sub-nav-link active": "sub-nav-link"} to={"/tab/?tab=frequentlyasked"}>Frequently_Asked</Link></li>
            <li><Link className={currentLocation.search === '?tab=myquestions'?"  sub-nav-link active": "sub-nav-link"} to={"/tab/?tab=myquestions"}>My_questions</Link></li>
            <li><Link className={currentLocation.search === '?tab=mostlyanswered'?"  sub-nav-link active": "sub-nav-link"} to={"/tab/?tab=mostlyanswered"}>Mostly_Answered</Link></li>
        </ul>
    </div>
  )
}

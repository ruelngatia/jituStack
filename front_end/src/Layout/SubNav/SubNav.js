import {React} from 'react'
import { Link, useLocation } from 'react-router-dom'

import './SubNav.css'

export default function SubNav() {

  let currentLocation = useLocation()
 

  return (
    <div className='sub-nav'>
        <ul>
            <li><Link className={currentLocation.search === '?tab=all' || currentLocation.search === '' || currentLocation.search === '/' ?"  sub-nav-link active": "sub-nav-link"} to={'/?tab=all'}>All</Link></li>
            <li><Link className={currentLocation.search === '?tab=newest'?" sub-nav-link active": "sub-nav-link"} to={"/?tab=newest"}>Newest</Link></li>
            <li><Link className={currentLocation.search === '?tab=featured'?"  sub-nav-link active": "sub-nav-link"} to={"/?tab=featured"}>Featured</Link></li>
            <li><Link className={currentLocation.search === '?tab=frequentlyasked'?" sub-nav-link active": "sub-nav-link"} to={"/?tab=frequentlyasked"}>Frequently_Asked</Link></li>
            <li><Link className={currentLocation.search === '?tab=unanswered'?"  sub-nav-link active": "sub-nav-link"} to={"/?tab=unanswered"}>Unanswered</Link></li>
            <li><Link className={currentLocation.search === '?tab=mostlyanswered'?"  sub-nav-link active": "sub-nav-link"} to={"/?tab=mostlyanswered"}>Mostly_Answered</Link></li>
        </ul>
    </div>
  )
}

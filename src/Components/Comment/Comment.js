import React from 'react'
import './Comment.css'

export default function Comment() {
  return (
    <div className='comment'>
       <div>
            <p>
                {`disconnected too. As a result, some connections will stay alive. So, the right answer is by Craig Ringer (see below). 
                pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity WHERE datname = current_database() 
                AND pg_stat_activity.pid <> pg_backend_pid();`}
            </p>
       </div>
        <div className='comment-stamp'>
            <span>Michael shumaka</span>
            <span>2nd November</span>
        </div>
    </div>
  )
}

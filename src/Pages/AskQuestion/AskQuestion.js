import React from 'react'
import './AskQuestion.css'
import TinyMCE from'../../Components/TinyMCE/TinyMCE'

export default function AskQuestion() {
  return (
    <div className='ask-question'>
        <div className='input-div'>
            <div>
                <label>Enter Question title</label>
                <br/>
                <input type={'text'}/>
            </div>
            <button>
                Next
            </button>
        </div>
        <div>
            <TinyMCE/>
        </div>
    </div>
  )
}

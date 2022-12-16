import React from 'react'
import './AskQuestion.css'
import TinyMCE from'../../Components/TinyMCE/TinyMCE'
import { WithContext as ReactTags } from 'react-tag-input';

export default function AskQuestion() {

    const [tags, setTags] = React.useState([
        { id: 'Thailand', text: 'Thailand' },
        { id: 'India', text: 'India' },
        { id: 'Vietnam', text: 'Vietnam' }
      ]);

    const KeyCodes = {
        comma: 188,
        enter: 13
      };
      
    const delimiters = [KeyCodes.comma, KeyCodes.enter];


  return (
    <div className='container'>
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
            <div className='tags'>
                <ReactTags
                    classNames={
                        {
                            tagInput: 'tagInput'
                        }
                    }
                    tags={tags}
                    suggestions={[]}
                    delimiters={delimiters}
                    autocomplete
                    inputFieldPosition='inline'

                />
            </div>
        </div>
    </div>

  )
}

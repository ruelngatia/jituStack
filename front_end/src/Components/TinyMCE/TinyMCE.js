import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './TinyMCE.css'

export default function TinyMCE(props) {

    const editorRef = useRef(null)
    const [codeSnippet,setCodeSnippet] = useState('')

    const clickHalnder = ()=>{
        setCodeSnippet(editorRef.current.getContent())
        props.input(codeSnippet)
    }

  return (
    <div className='TinyMCE'>
        <Editor
            onChange = {(e)=>setCodeSnippet(editorRef.current.getContent())}
            onInit={(evt,editor)=>{editorRef.current = editor}}
            init={{
                height: 500,
                menubar: false,
                plugins: 'codesample',
                codesample_languages: [
                    { text: 'HTML/XML', value: 'markup' },
                    { text: 'JavaScript', value: 'javascript' },
                    { text: 'CSS', value: 'css' },
                    { text: 'PHP', value: 'php' },
                    { text: 'Ruby', value: 'ruby' },
                    { text: 'Python', value: 'python' },
                    { text: 'Java', value: 'java' },
                    { text: 'C', value: 'c' },
                    { text: 'C#', value: 'csharp' },
                    { text: 'C++', value: 'cpp' }
                  ],
                toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | codesample | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
        />
        <button onClick={()=>{clickHalnder()}}>
            Complete
        </button>      
        
    </div>
  )
}

import React from 'react'
import './AnswerParagraph.css'

export default function AnswerParagraph() {

    let snippet = `<p>Every function in JavaScript maintains a reference to its outer lexical
        environment. This reference is used to configure the execution context created when
        a function is invoked. This reference enables code inside the function to
        "see" variables declared outside the function, regardless of when and where the function
        is called.<strong>This text is important!</strong></p> <p>If a function was called by a function, which in turn was called by
        another function, then a chain of references to outer lexical environments is created. 
        This chain is called the scope chain.</p> <pre class="language-javascript">
        <code>function foo() { const secret = Math.trunc(Math.random() * 100) return function inner() { console.log(The secret number is .) } }
         const f = foo() //  is not directly accessible from </code></pre> <p>&nbsp;</p>`

   



  return (
    <div className='answer-p' >
       <div className='inner' dangerouslySetInnerHTML={{__html:snippet}}>

       </div>
       
    </div>
  )
}

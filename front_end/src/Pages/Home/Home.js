import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllQuestions } from '../../redux/questionsSlice'
import Card from '../../Layout/Card/Card'


export default function Home() {
  
  const dispatch = useDispatch()
  let questions = useSelector((state)=> state.questions)
  console.log(questions.questions);
  

  useEffect(
    ()=>{
      dispatch(getAllQuestions())
    },[]
  )

  return (
    <div className='home'>

       {
        questions.loading ? <div>loading</div> :  questions.questions.map(element => <Card key={Math.random()} question ={element}/>)
       }
      
        
    </div>
  )
}

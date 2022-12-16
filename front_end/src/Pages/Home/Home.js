import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useLocation} from 'react-router-dom'
import { getAllQuestions } from '../../redux/questionsSlice'
import Card from '../../Layout/Card/Card'


export default function Home() {

  const dispatch = useDispatch()
  let questions = useSelector((state)=> state.questions)
  
 
 
  
  let p = useLocation()
  // console.log(`${new URLSearchParams(p.search).get('tab')}`);

  useEffect(
    ()=>{

      let path = ''
      if(p.search !== ''){
        path = p.pathname + p.search
      }else{
        path =  p.pathname
      }

      dispatch(getAllQuestions(path))
    },[p]
  )

  return (
    <div className='home'>

       {
        questions.loading ? <div>loading</div> :  questions.questions.map(element => <Card key={Math.random()} question ={element}/>)
       }
             
    </div>
  )
}

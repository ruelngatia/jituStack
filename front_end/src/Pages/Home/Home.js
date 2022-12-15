import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useSearchParams , useLocation} from 'react-router-dom'
import { getAllQuestions } from '../../redux/questionsSlice'
import Card from '../../Layout/Card/Card'


export default function Home() {
  // new URL().searchParams
  const dispatch = useDispatch()
  let questions = useSelector((state)=> state.questions)
  
  // let param = useParams()
  // console.log(param);
  // let search = useSearchParams()
  
  let p = useLocation()
  // console.log(`${new URLSearchParams(p.search).get('tab')}`);

  // let l = useLocation()
  // console.log(l.pathname);

  useEffect(
    ()=>{

      let path = ''
      if(p.search !== ''){
        path = '/' + p.search
      }else{
        path = p.pathname
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

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useLocation} from 'react-router-dom'
import { getAllQuestions } from '../../redux/questionsSlice'
import Card from '../../Layout/Card/Card'
import {DotLoader} from 'react-spinners'


export default function Home() {

  const dispatch = useDispatch()
  let questionState = useSelector((state)=> state.questions)
  
 
 
  
  let {pathname, search} = useLocation()
  // console.log(`${new URLSearchParams(p.search).get('tab')}`);

  useEffect(
    ()=>{

      let path = ''
      if(search !== ''){
        path = pathname + search
      }else{
        path =  pathname
      }

      dispatch(getAllQuestions(path))
      console.log(path);
    },[pathname, search]
  )

  const displayHandler = ()=>{
    console.log('The new state is this: ')
    if(questionState.loading){
      return <div>loading</div> 
    }else if(questionState.error === '404'){
      return 
        <div>
          <div>some error occured please try again</div>
        </div>
    }else{
      <div>
        Contains everything else:
      </div>
    }
  }

  

  return (
    <div className='home'>

       {
        questionState.loading ? 
        <div>
          <DotLoader color="#36d7b7" />
        </div> 
          : questionState.questions?.map(element => <Card key={Math.random()} question ={element}/>)
       }
             
    </div>
  )
}

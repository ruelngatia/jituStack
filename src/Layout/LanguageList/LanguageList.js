import React from 'react'
import LanguageCard from '../../Components/LanguageCard/LanguageCard'
import './LanguageList.css'

export default function LanguageList() {
  return (
    <div className='language-list'>
        <LanguageCard/>
        <LanguageCard/>
    </div>
  )
}

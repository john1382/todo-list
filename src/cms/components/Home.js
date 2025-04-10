import React from 'react'
import Features from './features/Features'
import Recharts from './recharts/Recharts'
import { XAxis } from '../../ReDatas'
import './Home.css'

export default function Home() {
  return (
    <div className='containerHome'>
      <Features/>
      <Recharts grid data={XAxis} datakey="Sale" />
    </div>
    
    
  )
}

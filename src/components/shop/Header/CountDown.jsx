import React from 'react'
import { useState,useEffect } from 'react'
import './countdown.css'


export default function CountDown({time}) {
  const [totalSec,SetTotalSec] = useState(time)

    let totalSecond = parseInt(Math.floor(totalSec / 1000))
    let totalMinutes = parseInt(Math.floor(totalSecond / 60))
    let totalHours = parseInt(Math.floor(totalMinutes / 60))
    let days = parseInt(Math.floor(totalHours /24))

    let seconds = parseInt(totalSecond %60)
    let minutes = parseInt(totalMinutes %60)
    let hours = parseInt(totalHours %24)

    if(seconds < 10){
        seconds = `0${seconds}`
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    if(hours < 10){
      hours = `0${hours}`
    }

  useEffect(()=>{
    setTimeout(()=>{
      SetTotalSec(totalSec -1000 )
    },1000)
  },[totalSec])
   
  return (
    <div>
      <h1 dir='ltr' style={{maxWidth:500,display:'flex',justifyContent:'space-between',marginLeft:50}}>
        <div className='box'>
          <div>
            {days}
          </div>
          <div className='box-name'>
            روز
          </div>
        </div>
        <div className='box'>
        <div>
            {hours}
          </div>
          <div className='box-name'>
            ساعت
          </div>
        </div>
        <div className='box'>
        <div>
            {minutes}
          </div>
          <div className='box-name'>
            دقیقه
          </div>
        </div>
        <div className='box'>
        <div>
            {seconds}
          </div>
          <div className='box-name'>
            ثانیه
          </div>
        </div>
      </h1>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Outlet,Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function About() {
  
  let location = useLocation() 
  useEffect(()=>{
    alert('route avaz krdi?')
    console.log(location)
  },[location])
  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>this is about us</h1>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <Link to={"dashboard"}>dashboard</Link>
        <Link to={"setting"}>setting</Link>
      </div>
      <hr />
      <button>Click me</button>
      <Outlet/>
      
    </div>
  )
}

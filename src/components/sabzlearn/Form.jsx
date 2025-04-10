import React from 'react'
import { useState } from 'react'

export default function Form() {
  
  const [firstName,setFistName] = useState('')
  const [lastName,setLastName] = useState('')

  const firsthandler = (event)=>{
    setFistName(event.target.value)
  }
  const lasthandler = (event)=>{
    setLastName(event.target.value)
  }
  const submithandler = (event)=>{
    event.preventDefault()

    let userinfo ={
      firstName,
      lastName
    }

    fetch('https://training-8c8da-default-rtdb.firebaseio.com/users.json',{
      method:'POST',
      body:JSON.stringify(userinfo)
    }).then(response => console.log(response))
  }
  return (
    
    <>
      <form onSubmit={(event)=>submithandler(event)}>
        <input type="text" placeholder='first name' value={firstName} onChange={(event)=>firsthandler(event)} />
        <input type="text" placeholder='last name' value={lastName} onChange={(event)=>lasthandler(event)} />
        <button type='submit'> register</button>
      </form>
    </>
  )
}

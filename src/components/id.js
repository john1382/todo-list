import React,{useState} from 'react'
import { useParams,Navigate } from 'react-router-dom'
import Datas from '../Data'

export default function Id() {
  const [post,serPost]= useState(Datas)
  const param = useParams()
  let hasid = post.some(post=> post.id == param.id)
  console.log(hasid)
  return (
    <div>
      {hasid ? 
      (
      <>
        your id is: {Datas.find(obj => obj.id == param.id).name}
      </>
      ):(
        <Navigate to='/'/>
      )}
      
    </div>
  )
}

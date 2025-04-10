import { useState } from "react"
import React from 'react'
import Datas from "../Data"
import {Link} from 'react-router-dom'

export default function Posts() {
  const [post,setPost]=useState(Datas)

  return (
    <div>
      {post.map(data=>(
        <>
         <Link to={`/${data.id}`}>{data.name}</Link>
         <hr />
        </>
       
      ))}
    </div>
  )
}

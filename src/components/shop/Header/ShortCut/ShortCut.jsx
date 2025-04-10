import React from 'react'
import { Button } from '@mui/material'
import './shortCut.css'

export default function ShortCut() {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',marginTop:100,height:620}}>
        <div style={{display:'flex',justifyContent: 'space-between',width:1406,alignItems:'center'}}>
          <div style={{display:'flex',justifyContent: 'space-between',flexDirection:'column',height:'100%'}}>
            <div style={{overflow:'hidden',width:'463px',borderRadius:'25px',position:'relative'}}>
              <img src="./images/filters/accesory.webp" className='img1'/>
              <Button variant='contained'style={{alignContent:'center'}} >اکسسوری</Button>
            </div>
            <div style={{overflow:'hidden',width:'463px',borderRadius:'25px'}}>
              <img src="./images/filters/newest.webp" className='img1'/>
              <Button variant='contained' >جدیدترینها</Button>
            </div>
          </div>
          <div style={{overflow:'hidden',width:'463px',borderRadius:'25px'}}>
            <img src="./images/filters/shoes.webp" className='img2'/>
            <Button variant='contained'>کفش ها</Button>
          </div>
          <div style={{overflow:'hidden',width:'463px',borderRadius:'25px'}}>
            <img src="./images/filters/jumper.webp" className='img2'/>
            <Button variant='contained' color='dark' >پلیور</Button>
          </div>
        </div>
      </div>
    </>
  )
}

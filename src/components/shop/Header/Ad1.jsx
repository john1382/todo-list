import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Container } from "@mui/material";
import CountDown from "./CountDown";

const BlackSection = () => {
  

  return (
    <div dir="rtl" style={{display:'flex',backgroundColor:'black',color:"white",height:230,alignItems:'center',justifyContent:'space-between'}}>
        <div style={{marginRight:50}}>
          <h3 style={{textAlign:'start'}}>
          تخفیف ویژه کالکشن پاییزه
          </h3>
          <div style={{textAlign:'start',fontSize:20,paddingBottom:20}}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </div>
          <div  style={{textAlign:'start'}}>
            <a href="#" style={{color:'white',textDecoration:'underline',fontWeight:700}}>خرید کنید<KeyboardDoubleArrowLeftIcon/>
          </a>
          </div>
        </div>
        <div>
          <CountDown time={4*24*60*60*1000}/>
        </div>
    </div>
  )
}

export default BlackSection;
import React from 'react'
import { Container } from 'react-bootstrap'
import { FaRegUser,FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Logo from './Logo';
import SimpleButtonNavigatin from './Buttons';
import { MdKeyboardArrowDown } from "react-icons/md";
import Slider from './Slider';
import BlackSection from './Ad1';
import './header.css'

export default function Header() {
  return (
    <>
      <Container style={{maxWidth:1540,marginTop:20}}>
        <div className='con-header' style={{display:'flex',justifyContent:'space-between',marginTop:20,height:47}}>
          <div style={{display:'flex',justifyContent:'space-evenly',width:300}}>
            <div>
              <IoCartOutline size={25} title='سبد خرید' style={{cursor:'pointer'}}/>
            </div>
            <div>
              <FaRegHeart size={20} title='محصولات مورد علاقه' style={{cursor:'pointer'}}/>
            </div>
            <div>
              <FaRegUser title='اکانت شما' size={20} style={{cursor:'pointer'}}/>
            </div>
            <div>
              <BsSearch title='جستوجو' size={20} style={{cursor:'pointer'}}/>
            </div>
          </div>
          <div>
            <Logo/>
          </div>
          <div style={{display:'flex',justifyContent:'space-evenly',width:400,fontWeight:700}}>
            <SimpleButtonNavigatin/>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:40,marginTop:10}}>
          <div style={{display:'flex',justifyContent:'space-between',width:500,fontWeight:700}}>
            <div style={{width:80,cursor:'pointer'}}>
            <MdKeyboardArrowDown/> دموها
            </div>
            <div style={{width:80,cursor:'pointer'}}>
              <MdKeyboardArrowDown/>فروشگاه 
            </div>
            <div style={{width:80,cursor:'pointer'}}><MdKeyboardArrowDown/>محصولات</div>
            <div style={{width:80,cursor:'pointer'}}><MdKeyboardArrowDown/>صفحات</div>
            <div style={{width:80,cursor:'pointer'}}><MdKeyboardArrowDown/>وبلاگ</div>
          </div>
        </div>
      </Container>
    </>
  )
}

import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <div className="sidebartitle">
            Dashboard
          </div>
          <ul className="sidebarlist">
            <Link to="/" className='link'>
              <li className='sidebarlistitems'>
                <LineStyleIcon className='sidebarlisticons'/>
                Home
              </li>
            </Link>
            <li className='sidebarlistitems'>
              <TimelineIcon className='sidebarlisticons'/>
              Analytics
            </li>
            <li className='sidebarlistitems'>
              <TrendingUpIcon className='sidebarlisticons'/>
              Sales
            </li>
          </ul>



          <div className="sidebartitle">
            Quick Menu
          </div>
          <ul className="sidebarlist">
            <Link to="/users" className='link'>
              <li className='sidebarlistitems'>
                <PersonOutlinedIcon className='sidebarlisticons'/>
                Users
              </li>
            </Link>
            <Link to="newusers" className='link'>
              <li className='sidebarlistitems'>
                <PersonOutlinedIcon className='sidebarlisticons'/>
                New Users
              </li>
            </Link>
            <li className='sidebarlistitems'>
              <StorefrontOutlinedIcon className='sidebarlisticons'/>
              Products
            </li>
            <li className='sidebarlistitems'>
              <AttachMoneyIcon className='sidebarlisticons'/>
              Transactions
            </li>
            <li className='sidebarlistitems'>
              <BarChartIcon className='sidebarlisticons'/>
              Reports
            </li>
          </ul>



          <div className="sidebartitle">
            Notifications
          </div>
          <ul className="sidebarlist">
            <li className='sidebarlistitems'>
              <EmailOutlinedIcon className='sidebarlisticons'/>
              Mails
            </li>
            <li className='sidebarlistitems'>
              <DynamicFeedIcon className='sidebarlisticons'/>
              Feedbacks
            </li>
            <li className='sidebarlistitems'>
              <ChatBubbleOutlineIcon className='sidebarlisticons'/>
              Messages
            </li>
          </ul>


          <div className="sidebartitle">
            Staff
          </div>
          <ul className="sidebarlist">
            <li className='sidebarlistitems'>
              <WorkOutlineIcon className='sidebarlisticons'/>
              Manage
            </li>
            <li className='sidebarlistitems'>
              <DynamicFeedIcon className='sidebarlisticons'/>
              Analytics
            </li>
            <li className='sidebarlistitems'>
              <ChatBubbleOutlineIcon className='sidebarlisticons'/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import './TopBar.css'

export default function TopBar() {
  return (
    <>
      <div className='topbar'>
        <div className="topbarwrapper">
          <div className="topbarleft">
            SabzLearn
          </div>
          <div className="topbarright">
            <div className="icons">
              <NotificationsIcon/>
              <div className="badge">
                2
              </div>
            </div>
            <div className="icons">
              <LanguageIcon/>
              <div className="badge">
                2
              </div>
            </div>
            <div className="icons">
              <SettingsIcon/>
            </div>
            <div className="avatar">
              <img src="images/album 1.png" className='avatarpic'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

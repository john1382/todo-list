import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';import './Features.css'

export default function Features() {
  return (
    <div className='container'>
      <div className="feature">
        <div className="featuretitle">
          Revenue
        </div>
        <div className="detail">
          <div className="money">2,415$</div>
          <div className="rate">
            -11.4
            <ArrowDownwardIcon className='arrow neg'/>  
          </div>
        </div>
        <div className="lastmonth">
          compared to last month
        </div>
      </div>

      <div className="feature">
        <div className="featuretitle">
          Sale
        </div>
        <div className="detail">
          <div className="money">2,415$</div>
          <div className="rate">
            +11.4 <ArrowUpwardIcon className='arrow '/>
          </div>
        </div>
        <div className="lastmonth">
          compared to last month
        </div>
      </div>

      <div className="feature">
        <div className="featuretitle">
          Cost
        </div>
        <div className="detail">
          <div className="money">2,415$</div>
          <div className="rate">
            +11.4 <ArrowUpwardIcon className='arrow'/>
          </div>
        </div>
        <div className="lastmonth">
          compared to last month
        </div>
      </div>
    </div>
  )
}

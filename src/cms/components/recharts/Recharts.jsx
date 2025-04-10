import React from 'react'
import{ResponsiveContainer,LineChart,Line,XAxis,CartesianGrid,Tooltip} from 'recharts'

export default function Recharts({data,datakey,grid}) {
  return (
    <div className='recharts'>
      <h3>Month sale</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd'/>
          <Line dataKey={datakey} stroke='#5550bd'/>
          <Tooltip/>
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

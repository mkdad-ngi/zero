"use client"

import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "Mon",
      present: 60,
      absent: 40,
    },
    {
      name: "Tue",
      present: 70,
      absent: 60,
    },
    {
      name: "Wed",
      present: 90,
      absent: 75,
    },
    {
      name: "Thu",
      present: 90,
      absent: 75,
    },
    {
      name: "Fri",
      present: 65,
      absent: 55,
    },
];

function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className=''>
            <h1>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis axisLine={false}/>
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={ {paddingTop: "20px",paddingBottom: "40px"}}/>
          <Bar dataKey="present" fill="#FAE27C" legendType='circle' />
          <Bar dataKey="absent" fill="#C3EDFA"  legendType='circle' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
import React from 'react'
import {ComposedChart,Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';

const data = [
  {
    name: 'Fiction',
    uv: 590,
    pv: 800,
    amt: 1400,
  }, {
    name: 'Non fiction',
    uv: 868,
    pv: 967,
    amt: 1506,
  },{
    name: 'History',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Autobiography',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Science ',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: ' Mistery',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

function Dashboard() {
  return (
   <>
    <div>
  <h1 style={{ fontFamily: "sans-serif" }} className="text-3xl font-bold">
    Dashboard
  </h1>
  <div className="grid grid-cols-4 gap-2 mt-4 px-12 py-8">
    <div className="flex items-center justify-between gap-10">
      <div className="px-10 py-10 h-100 rounded shadow-2xl bg-gray-500 text-white">
        <h2 className="text-1xl font-bold text-gray-700 leading-17">
          Earnings(Monthly)
        </h2>
        <h1 className="text-1xl font-bold">$4000</h1>
      </div>

      <div className="px-10 py-10 h-100 rounded shadow-2xl bg-gray-500 text-white  border-4xl">
        <h2 className="text-1xl font-bold text-gray-700 leading-17">
         Tasks(monthly)
        </h2>
        <h1 className="text-1xl font-bold">$2000</h1>
      </div>

      <div className="px-10 py-10 h-100 rounded shadow-2xl bg-gray-500 text-white border-4xl">
        <h2 className="text-1xl font-bold text-gray-700 leading-17">
          Earnings(Annual)
        </h2>
        <h1 className="text-1xl font-bold">$20000</h1>
      </div>
    </div>
  </div>
</div>
<div>
    <h1 className='text-2xl'>
      Earnings Overview
    </h1>
    </div>
<div className='flex mt-4'>
 
  
  <div className='cursor-pointer flex items-center justify-between py-15 border rounded mb-4   px-4'>
    <ComposedChart
              width={900}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
  </div>
</div>
   </>
  )
}

export default Dashboard
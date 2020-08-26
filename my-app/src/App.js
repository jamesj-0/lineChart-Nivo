import React from 'react'
import MyResponsiveLine from './line'
import MyResponsiveLine2 from './nivoLine'
import './App.css'

const data = [
  {
    id: 'Andrew Swihart',
    data: [
      {
        x: new Date('2019-03-01'),
        y: '23.1',
      },
      {
        x: new Date('2019-06-01'),
        y: '27.7',
      },
      {
        x: new Date('2019-09-01T04:00:00.000Z'),
        y: '26.2',
      },
      {
        x: new Date('2019-12-01T05:00:00.000Z'),
        y: '35.4',
      },
      {
        x: new Date('2020-03-01T05:00:00.000Z'),
        y: '29.2',
      },
      {
        x: new Date('2020-06-01T04:00:00.000Z'),
        y: '30.3',
      },
    ],
  },
]

function App() {
  return (
    <>
      <MyResponsiveLine data={data} />
      <MyResponsiveLine2 />
    </>
  )
}

export default App

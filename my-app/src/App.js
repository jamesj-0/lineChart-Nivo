import React, { useState, useEffect } from 'react'
import MyResponsiveLine from './line'
import NivoLine from './nivoLine'
import windowSize from './hooks/windowSize'
import ElmLine from './elmLine'
import styled from 'styled-components'
import SimpleChart from './reactTimeSeriesBar'

const Container = styled.section`
  width: 50vw;
  height: 60vh;
  background: white;
`
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

const nivoData = [
  {
    id: 'fake corp. A',
    data: [
      { x: '2018-01-01', y: 7 },
      { x: '2018-01-02', y: 5 },
      { x: '2018-01-03', y: 11 },
      { x: '2018-01-04', y: 9 },
      { x: '2018-01-05', y: 12 },
      { x: '2018-01-06', y: 16 },
      { x: '2018-01-07', y: 13 },
      { x: '2018-01-08', y: 13 },
    ],
  },
  {
    id: 'fake corp. B',
    data: [
      { x: '2018-01-04', y: 14 },
      { x: '2018-01-05', y: 14 },
      { x: '2018-01-06', y: 15 },
      { x: '2018-01-07', y: 11 },
      { x: '2018-01-08', y: 10 },
      { x: '2018-01-09', y: 12 },
      { x: '2018-01-10', y: 9 },
      { x: '2018-01-11', y: 7 },
    ],
  },
]

const perTicks = 4
const data6 = [
  {
    id: 'Grocer Rate of Sale',
    data: [
      { x: '2020-03-26', y: 90 },
      { x: '2020-03-27', y: 232.08 },
      { x: '2020-03-28', y: 189 },
      { x: '2020-03-29', y: 315.99 },
      { x: '2020-03-30', y: 196.44 },
      { x: '2020-03-31', y: 499.26 },
      { x: '2020-04-01', y: 126 },
      { x: '2020-04-02', y: 519.26 },
      { x: '2020-04-03', y: 166.44 },
      { x: '2020-04-04', y: 80.88 },
      { x: '2020-04-05', y: 94.5 },
      { x: '2020-04-06', y: 72 },
      { x: '2020-04-07', y: 18 },
      { x: '2020-04-08', y: 53.88 },
      { x: '2020-04-09', y: 94.44 },
      { x: '2020-04-10', y: 18 },
      { x: '2020-04-12', y: 105.6 },
      { x: '2020-04-13', y: 44.94 },
      { x: '2020-04-14', y: 36 },
      { x: '2020-04-15', y: 78 },
      { x: '2020-04-16', y: 42 },
      { x: '2020-04-17', y: 54 },
      { x: '2020-04-18', y: 78 },
      { x: '2020-04-19', y: 36 },
      { x: '2020-04-20', y: 58.489999999999995 },
      { x: '2020-04-21', y: 139.19 },
    ],
  },
]

// inner Height and width should be react states that update
function App() {
  return (
    <>
      <SimpleChart />
      {/* <MyResponsiveLine data={data} />
      <NivoLine
        dummyData={data6}
        type={{ metric: 'day', interval: '5' }}
        legend={'units per week'}
        color="#FF6B35"
        size={{
          height: windowSize().height * 0.5 || window.innerHeight * 0.5,
          width: windowSize().width * 0.6 || window.innerWidth * 0.6,
        }}
      /> */}
    </>
  )
}

export default App

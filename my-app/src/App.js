import React from 'react'
import MyResponsiveLine from './line'
import MyResponsiveLine2 from './nivoLine'
import ElmLine from './elmLine'
import styled from 'styled-components'

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

const data6 = [
  {
    id: 'Grocer Rate of Sale',
    data: [
      { x: '2020-03-26T00:00:00.000Z', y: 90 },
      { x: '2020-03-27T00:00:00.000Z', y: 232.08 },
      { x: '2020-03-28T00:00:00.000Z', y: 189 },
      { x: '2020-03-29T00:00:00.000Z', y: 315.99 },
      { x: '2020-03-30T00:00:00.000Z', y: 196.44 },
      { x: '2020-03-31T00:00:00.000Z', y: 499.26 },
      { x: '2020-04-01T00:00:00.000Z', y: 126 },
      { x: '2020-04-02T00:00:00.000Z', y: 519.26 },
      { x: '2020-04-03T00:00:00.000Z', y: 166.44 },
      { x: '2020-04-04T00:00:00.000Z', y: 80.88 },
      { x: '2020-04-05T00:00:00.000Z', y: 94.5 },
      { x: '2020-04-06T00:00:00.000Z', y: 72 },
      { x: '2020-04-07T00:00:00.000Z', y: 18 },
      { x: '2020-04-08T00:00:00.000Z', y: 53.88 },
      { x: '2020-04-09T00:00:00.000Z', y: 94.44 },
      { x: '2020-04-10T00:00:00.000Z', y: 18 },
      { x: '2020-04-12T00:00:00.000Z', y: 105.6 },
      { x: '2020-04-13T00:00:00.000Z', y: 44.94 },
      { x: '2020-04-14T00:00:00.000Z', y: 36 },
      { x: '2020-04-15T00:00:00.000Z', y: 78 },
      { x: '2020-04-16T00:00:00.000Z', y: 42 },
      { x: '2020-04-17T00:00:00.000Z', y: 54 },
      { x: '2020-04-18T00:00:00.000Z', y: 78 },
      { x: '2020-04-19T00:00:00.000Z', y: 36 },
      { x: '2020-04-20T00:00:00.000Z', y: 58.489999999999995 },
      { x: '2020-04-21T00:00:00.000Z', y: 139.19 },
    ],
  },
]
function App() {
  return (
    <>
      <MyResponsiveLine data={data} />
      <MyResponsiveLine2 />
      <Container>
        <ElmLine data={data6} />
      </Container>
    </>
  )
}

export default App

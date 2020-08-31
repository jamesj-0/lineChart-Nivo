import React from 'react'
import { TimeSeries, Index } from 'pondjs'

import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler,
} from 'react-timeseries-charts'
import data from './data'

// let max = 0

// loop over and creat the data set from out data..

// _.each(days, (value, day) => {
//   const dayOfMonth = Number(day)
//   const volIn = value.in
//   const volOut = value.out

//   // Max
//   max = Math.max(max, value.in)
//   max = Math.max(max, value.out)

//   trafficPoints.push([`2014-10-${dayOfMonth}`, volIn, volOut])
// })

// const octoberTrafficSeries = new TimeSeries({
//   name: 'October Traffic',
//   utc: false,
//   columns: ['index', 'in', 'out'],
//   points: trafficPoints,
// })

export default function SimpleChart() {
  const series = new TimeSeries({
    name: 'revenue bar',
    columns: ['index', 'sainsburys', 'tesco'],
    points: data.map((object) => {
      return [
        Index.getIndexString('1h', new Date(object.x)),
        object.y,
        object.z,
      ]
    }),
  })

  console.log('series is ', series)

  const style = styler([
    { key: 'sainsburys', color: '#A5C8E1', selected: '#2CB1CF' },
    { key: 'tesco', color: '#FFCC9E', selected: '#2CB1CF' },
  ])

  return (
    <>
      <Resizable>
        <ChartContainer
          format="day"
          enablePanZoom={true}
          timeRange={series.range()}
          maxTime={series.range().end()}
          minTime={series.range().begin()}
        >
          <ChartRow height="150">
            <YAxis
              id="rain"
              label="Rainfall (inches/hr)"
              min={0}
              max={700}
              type="linear"
            />
            <Charts>
              <BarChart
                axis="rain"
                style={style}
                spacing={1}
                width="100"
                absolute={true}
                columns={['sainsburys', 'tesco']}
                series={series}
              />
            </Charts>
          </ChartRow>
        </ChartContainer>
      </Resizable>
    </>
  )
}

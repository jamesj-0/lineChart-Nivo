import React from 'react'
import { Line } from '@nivo/line'

export default function MyResponsiveLine({ data }) {
  return (
    <div className="App">
      <Line
        data={data}
        width={550}
        height={300}
        margin={{
          top: 10,
          right: 30,
          bottom: 50,
          left: 30,
        }}
        xScale={{
          type: 'time',
          format: 'native',
        }}
        yScale={{ type: 'linear', min: '0', max: 'auto' }}
        curve="linear"
        axisBottom={{
          format: '%b %Y',
          // tickValues: 'every 3 months',
          tickValues: data[0].data.map((point) => point.x),
        }}
        axisLeft={{
          tickValues: 5,
          legendPosition: 'middle',
          format: '~s',
        }}
        gridXValues={data[0].data.map((point) => point.x)}
        enableSlices="x"
      />
    </div>
  )
}

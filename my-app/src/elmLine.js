import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import styled from 'styled-components'

export default function ElmLine({ data, legend, color }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'time',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 2,
        tickPadding: 1,
        tickRotation: 0,
        legend,
        legendOffset: -55,
        legendPosition: 'middle',
      }}
      colors={color}
      pointSize={7}
      pointColor={color}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh
      tooltip={({ id, value, color }) => (
        <strong style={{ color }}>
          {id}: {value}
        </strong>
      )}
      theme={{
        tooltip: {
          container: {
            background: '#333',
          },
        },
      }}
      animate
      // theme={{
      //   axis: {
      //     ticks: {
      //       tickColor: '#eee',
      //       text: {
      //         textColor: '#eee',
      //         fontSize: '12px',
      //       },
      //     },
      //   },
      //   fontFamily: 'futura',
      // tooltip: {
      //   container: {
      //     fontFamily: 'futura',
      //     fontSize: '9px',
      //     color: 'black',
      //     background: 'white',
      //   },
      // },
      // }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          translateX: 100,
          rotateX: -90,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

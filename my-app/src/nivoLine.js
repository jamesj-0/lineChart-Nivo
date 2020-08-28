import React from 'react'
import { Line } from '@nivo/line'
import styled from 'styled-components'

import { boolean, select } from '@storybook/addon-knobs'

const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #f5f0f0;
  background: #f5f0f0;
  border-radius: 6px;
  box-sizing: border-box;
`

const ToolTipText = styled.p`
  font-family: Poppins;
  margin: 0.4rem;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`

const commonProperties = {
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
}

const curveOptions = ['linear', 'monotoneX', 'step', 'stepBefore', 'stepAfter']

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <circle
      fill="#fff"
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
    />
    <circle
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
      fill={color}
      fillOpacity={0.35}
    />
  </g>
)

export default function NivoLine({ dummyData, legend, type, color, size }) {
  const tickVal = `every ${type.interval} ${type.metric}`
  return (
    <div className="App">
      <Line
        {...commonProperties}
        width={size.width}
        height={size.height}
        data={dummyData}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          useUTC: false,
          precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: boolean('stacked', false),
        }}
        axisLeft={{
          tickSize: 2,
          format: '~s',
          legend,
          tickPadding: 1,
          tickRotation: 0,
          legendOffset: -55,
          legendPosition: 'middle',
        }}
        axisBottom={{
          tickPadding: 5,
          format: '%b %d',
          tickSize: 5,
          tickValues: tickVal,
        }}
        colors={color}
        curve={select('curve', curveOptions, 'monotoneX')}
        enablePointLabel={true}
        pointColor={color}
        pointSymbol={CustomSymbol}
        pointSize={16}
        enableSlices="x"
        animate
        pointBorderWidth={1}
        pointBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.3]],
        }}
        pointLabelYOffset={-12}
        enableGridX={false}
        enableGridY={false}
        useMesh
        tooltip={(input) => (
          <ToolTip>
            <ToolTipText>
              {input.point.data.xFormatted} : {input.point.data.yFormatted}
            </ToolTipText>
          </ToolTip>
        )}
        enableSlices={false}
        theme={{
          axis: {
            ticks: {
              tickColor: '#eee',
              text: {
                textColor: '#eee',
                fontSize: '10px',
              },
            },
          },
          fontFamily: 'futura',
          tooltip: {
            container: {
              fontFamily: 'futura',
              fontSize: '9px',
              color: 'black',
              background: 'white',
            },
          },
        }}
        tooltipFormat={(value) =>
          Number(value).toLocaleString('en-US', { minimumFractionDigits: 2 }) +
          '$'
        }
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
    </div>
  )
}

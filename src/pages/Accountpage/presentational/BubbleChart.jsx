import styled from 'styled-components';
import { BubbleChart, BubbleLabel, BubbleSeries, Bubble, TooltipArea } from 'reaviz';

export default function CustomBubbleChart(props) {
  return (
    <BottomStyle>
      <BubbleChart
        data={[
          { key: '할리스', data: 40 },
          { key: '스타벅스', data: 30 },
          { key: '베르데', data: 17.5 },
          { key: '이디야', data: 12.5 },
        ]}
        height={props.height}
        width={props.width}
        center={true}
        series={
          <BubbleSeries
            animated={true}
            colorScheme={(data) => (data.data > 20 ? '#FFB0BB' : '#FFBFA5')}
            bubble={
              <Bubble
                onClick={(data) => {
                  console.log(data);
                }}
                animated={true}
                tooltip={<TooltipArea disabled={true} />}
              />
            }
            label={
              <BubbleLabel
                fontSize={20}
                fill="#000"
                format={(data) => {
                  return (
                    <g>
                      <text
                        dy={-(data.data.data / 2)}
                        textAnchor="middle"
                        fontSize={data.data.data}
                        fontWeight="bold"
                      >
                        {data.data.data + '%'}
                      </text>
                      <text
                        dy={data.data.data}
                        textAnchor="middle"
                        fontSize={data.data.data}
                        fontWeight="bold"
                      >
                        {data.data.key}
                      </text>
                    </g>
                  );
                }}
              />
            }
          />
        }
      />
      <div>총 자산 중</div>
      <div>10,000,000원</div>
    </BottomStyle>
  );
}

const BottomStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`;
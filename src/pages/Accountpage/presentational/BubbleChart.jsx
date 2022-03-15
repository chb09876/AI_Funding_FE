import styled from 'styled-components';
import { BubbleChart, BubbleLabel, BubbleSeries, Bubble, TooltipArea } from 'reaviz';

export default function CustomBubbleChart(props) {
  return (
    <div>
      <AINameStyle>투자 AI 이름</AINameStyle>
      <StartDateStyle>21.01.04</StartDateStyle>
      <PlustDayStyle>+00일</PlustDayStyle>
      <BottomStyle>
        <BubbleChart
					style={tempStyle}
          data={[
            { key: '할리스', data: 40 },
            { key: '스타벅스', data: 30 },
            { key: '베르데', data: 17.5 },
            { key: '이디야', data: 12.5 },
          ]}
          height={props.height*0.8}
          width={props.width}
					margin={50}
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
                  format={(data) => {
                    return (
                      <g>
                        <text
                          dy={-(data.data.data / 4)}
                          textAnchor="middle"
                          fontSize={data.data.data/2}
                          fontWeight="bold"
                        >
                          {data.data.data + '%'}
                        </text>
                        <text
                          dy={data.data.data /2}
                          textAnchor="middle"
                          fontSize={data.data.data/2}
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
        <MoneyIntroStyle>총 자산 중</MoneyIntroStyle>
        <MoneyStyle>10,000,000원</MoneyStyle>
      </BottomStyle>
    </div>
  );
}

const BottomStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const AINameStyle = styled.span`
	position: relative;
	top: 10px;
	left: 10px;
	font-weight: lighter;
	font-size: 20px;
`

const StartDateStyle = styled.span`
	position: relative;
	top: 10px;
	left: 100px;
	font-weight: lighter;
	font-size: 20px;
`

const PlustDayStyle = styled.div`
	position: relative;
	left: 250px;
	font-weight: lighter;
	font-size: 20px;
`

const MoneyIntroStyle = styled.div`
	font-size: 18px;
	font-weight: lighter;
` 

const MoneyStyle = styled.div`
	font-weight: bold; 
	font-size: 42px;
`

const tempStyle = {
	margin: "60px"
}
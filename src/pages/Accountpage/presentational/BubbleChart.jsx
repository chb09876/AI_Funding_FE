import styled from 'styled-components';
import { BubbleChart, BubbleLabel, BubbleSeries, Bubble, TooltipArea } from 'reaviz';

export default function CustomBubbleChart(props) {
  var bubbleData = [];

  for (var i = 0; i < props.profitDetail.length; i++) {
    bubbleData.push({
      key: props.profitDetail[i].profitName,
      data: props.profitDetail[i].createAtProfitPersent,
    });
  }

  return (
    <div>
      <AINameStyle>1234</AINameStyle>
      <StartDateStyle>21.01.04</StartDateStyle>
      <PlustDayStyle>+00일</PlustDayStyle>
      <BottomStyle>
        <BubbleChart
          data={bubbleData}
          height={props.height * 0.8}
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
                  format={(data) => {
                    return (
                      <g>
                        <text
                          dy={-(data.data.data / 4)}
                          textAnchor="middle"
                          fontSize={data.data.data / 2}
                          fontWeight="bold"
                        >
                          {data.data.data + '%'}
                        </text>
                        <text
                          dy={data.data.data / 2}
                          textAnchor="middle"
                          fontSize={data.data.data / 2}
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
  font-weight: lighter;
  font-size: 20px;
`;

const StartDateStyle = styled.span`
  position: relative;
  left: 100px;
  font-weight: lighter;
  font-size: 20px;
`;

const PlustDayStyle = styled.div`
  position: relative;
  left: 220px;
  font-weight: lighter;
  font-size: 20px;
`;

const MoneyIntroStyle = styled.div`
  font-size: 18px;
  font-weight: lighter;
`;

const MoneyStyle = styled.div`
  font-weight: bold;
  font-size: 42px;
`;

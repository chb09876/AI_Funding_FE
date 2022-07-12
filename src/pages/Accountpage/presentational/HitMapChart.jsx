import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
// import { BubbleChart, BubbleLabel, BubbleSeries, Bubble, TooltipArea } from 'reaviz';

export default function HitMapChart(props) {
  const [stockList, setStockList] = useState([]);
  const [aiTypeNum, setAITypeNum] = useState(0);

  useEffect(()=>{
    if (props.aiType === '아쿠아마린') {
      setAITypeNum(0);
    } else if (props.aiType === '가넷') {
      setAITypeNum(1);
    } else {
      setAITypeNum(2);
    }
  }, [props.aiType])

  useEffect(() => {
    setStockList(props.stockList);
  }, [props.stockList]);

  var chart = stockList.map((_, index) => (
    <ChartElement key={index} color={stockList[index].stockPercent} aiTypeNum={aiTypeNum}>
      <div>{stockList[index].stockName}</div>
      <div>{stockList[index].stockPercent + '%'}</div>
    </ChartElement>
  ));

  return <ChartStyle>{chart}</ChartStyle>;
}

const colorPallete = [
  [ //아쿠아마린
    '#000000',
    '#D8F3FF',
    '#BCEBFF',
    '#A2DBF0',
    '#7FC8E2',
    '#38A9D3',
    '#387FD3',
    '#0061D3',
    '#0008BC',
    '#00045F',
  ],
  [
    '#000000',
    '#EFD8D8',
    '#FFC9C9',
    '#EDB7B7',
    '#EA7979',
    '#EA5050',
    '#E01616',
    '#BA0000',
    '#980000',
    '#640000',
  ],
  [
    '#000000',
    '#E4CFF6',
    '#CEB8E2',
    '#9D7BBC',
    '#7D589F',
    '#6D3D99',
    '#5A268B',
    '#3C0470',
    '#27004B',
    '#0F001D',
  ],
];

const ChartStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 10px;
`;

const ChartElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => colorPallete[props.aiTypeNum][parseInt(props.color / 10)]};
  border-radius: 10px;
  font-size: 25px;
  color: white;
  padding-top: 23%;
  padding-bottom: 23%;
`;
//${colorPallete['aqua'][2]}
// ${(props) => {
//   var color = props.color/10;
//   return colorPallete[props.aiType][color]
// }};

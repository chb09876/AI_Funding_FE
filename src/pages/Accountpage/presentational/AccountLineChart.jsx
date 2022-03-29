import { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

export default function AccountLineChart({ period }) {
  // 계좌의 생성 기간부터 지금까지 period만큼 구간을 나눠야 함
  const chartRef = useRef(null);
  const [data, setData] = useState({
    labels: ['3월', '6월', '9월', '12월'],
    datasets: [
      {
        label: 'dataset1',
        data: [1, 4, -8, -3],
      },
      {
        label: 'dataset2',
        data: [1, 10, -8, -3],
      },
    ],
  });

  // update chart when fonts are loaded
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      chartRef.current.update();
    };
  }, []);

  // fetch data from api? or redux store?
  useEffect(() => {
    // get state from module
  }, []);

  return <StyledLine options={options} data={data} ref={chartRef} />;
}

// css to canvas tag
const StyledLine = styled(Line)`
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
`;

const options = {
  maintainAspectRatio: false,
  responsive: true,
  animation: false,
  elements: {
    line: {
      borderColor: 'red',
      borderWidth: 3,
    },
  },

  scales: {
    xAxis: {
      axis: 'x',
      grid: {
        display: false,
        drawBorder: false,
        color: '#777777',
      },
      ticks: {
        display: false,
        color: 'white',
        callback: (value, index, ticks) => {
          return value + '월';
        },
        font: {
          family: 'Spoqa Han Sans Neo, 궁서',
          size: 18,
        },
      },
    },
    yAxis: {
      axis: 'y',
      suggestedMin: -50,
      suggestedMax: 50,
      grid: {
        display: true,
        drawBorder: false,
        lineWidth: 0.5,
        color: '#777777',
      },
      ticks: {
        callback: (value, index, ticks) => value + '%',
        color: 'white',
        font: {
          family: 'Spoqa Han Sans Neo, 궁서',
          size: 18,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      // position: 'top',
    },
    title: {
      display: true,
      text: '누적 수익률',
      color: 'white',
      font: {
        family: 'Spoqa Han Sans Neo',
        size: 20,
      },
    },
  },
};

const horizontalDottedLine = {
  id: 'horizontalDottedLine',
  beforeDatasetsDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { left, width },
      scales: { yAxis },
    } = chart;
    ctx.save();
    ctx.strokeStyle = '#777777';
    ctx.setLineDash([10, 20]);
    ctx.strokeRect(left, yAxis.getPixelForValue(33), width, 0);
    ctx.restore();
  },
};

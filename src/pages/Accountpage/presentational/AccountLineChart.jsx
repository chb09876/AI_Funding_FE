import { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const colorTable = {
  aquamarine: 'aquamarine',
  ruby: 'pink',
};

export default function AccountLineChart({ labels, dataset }) {
  const chartRef = useRef(null);
  // chartjs 차트 관련 옵션(공식문서 참조)
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: false,
    elements: {
      line: {
        borderColor: 'rgb(152, 128, 101)',
        borderWidth: 3,
        tension: 0.4,
      },
      point: {
        radius: 0,
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
          display: true,
          color: 'grey',
          callback: (value, index, ticks) => {
            if (index === 0 || index === ticks.length - 1) {
              return labels[index];
            }
            return null;
          },
          font: {
            family: 'Spoqa Han Sans Neo, 궁서',
            size: 12,
          },
        },
      },
      yAxis: {
        axis: 'y',
        // suggestedMin: -30,
        // suggestedMax: 30,
        grid: {
          display: true,
          drawBorder: false,
          lineWidth: 0.8,
          color: '#777777',
        },
        ticks: {
          stepSize: 15,
          callback: (value) => value + '%',
          color: 'grey',
          font: {
            family: 'Spoqa Han Sans Neo, 궁서',
            size: 15,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'line',
          color: 'white',
          font: {
            size: 16,
          },
        },
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

  // 차트에 표시될 데이터 가공
  const data = {
    labels,
    datasets: dataset.map((data) => {
      console.log('data', data);
      return {
        label: data.accountName,
        data: Object.entries(data.profits).map(([date, profit]) => ({ x: date, y: profit })),
        order: 1,
        borderColor: colorTable[data.model],
      };
    }),
  };

  // update chart when fonts are loaded
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      chartRef.current.update();
    };
  }, []);

  return <StyledLine options={options} data={data} ref={chartRef} />;
}

// css to canvas tag
const StyledLine = styled(Line)`
  background-color: black;
  border-radius: 15px;
  padding: 10px;
`;

// const horizontalDottedLine = {
//   id: 'horizontalDottedLine',
//   beforeDatasetsDraw: (chart, args, options) => {
//     const {
//       ctx,
//       chartArea: { left, width },
//       scales: { yAxis },
//     } = chart;
//     ctx.save();
//     ctx.strokeStyle = '#777777';
//     ctx.setLineDash([10, 20]);
//     ctx.strokeRect(left, yAxis.getPixelForValue(33), width, 0);
//     ctx.restore();
//   },
// };

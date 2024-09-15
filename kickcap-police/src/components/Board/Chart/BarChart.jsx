import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // 추가된 플러그인
import styled from 'styled-components';

// 라이브러리 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels, // 추가된 플러그인
);

const s = {
  Container: styled.section`
    width: 100%;
    height: 85%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    margin: 0 auto;
    background-color: ${(props) => props.theme.dark};
  `,
};

const BarChart = ({ labels, datas }) => {
  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: '#fff',
        display: true,
        anchor: 'end',
        align: 'top',
        formatter: (value) => value.toString(),
        font: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12, // X축 레이블 크기
          },
        },
      },
      y: {
        display: false,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        // label: '벤치프레스',
        data: datas,
        borderColor: '#FFCB05',
        backgroundColor: '#FFCB05',
        // 데이터 포인트 스타일
        pointRadius: 3, // 포인트 크기
        pointBorderWidth: 1, // 포인트 경계 두께
      },
    ],
  };
  return (
    <>
      <s.Container>
        <Bar options={options} data={data} />
      </s.Container>
    </>
  );
};

export default BarChart;

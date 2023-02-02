import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface IProps {
  chartData: {
    hours: string;
    avg_cnt: string;
  }[];
}

const LineChart = ({ chartData }: IProps) => {
  const times = chartData.map(({ hours }) => `${hours}시`);
  const counts = chartData.map(({ avg_cnt }) => avg_cnt);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#E3E3E3',
        },
      },
    },
  };

  const data = {
    labels: times,
    datasets: [
      {
        data: counts,
        borderColor: `#5655a5`,
        backgroundColor: '#eee',
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

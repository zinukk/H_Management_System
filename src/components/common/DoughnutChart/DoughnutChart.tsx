import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from '@emotion/styled';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  robots: {
    error: string;
    refair: string;
    serving: string;
    stay: string;
  };
}

const DoughnutChart = ({ robots }: IProps) => {
  const { error, refair, serving, stay } = robots;

  const available: number = Number(serving) + Number(stay);
  const unavailable: number = Number(error) + Number(refair);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: true,
    },
  };

  const data = {
    labels: ['사용가능', '사용불가'],
    datasets: [
      {
        data: [available, unavailable],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <StDoughnutChart>
      <StChartWrapper>
        <Doughnut data={data} options={options} />
      </StChartWrapper>
    </StDoughnutChart>
  );
};

const StDoughnutChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StChartWrapper = styled.div`
  width: 90%;
`;

export default DoughnutChart;

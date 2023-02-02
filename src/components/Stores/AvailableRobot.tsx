import styled from '@emotion/styled';
import React from 'react';
import DoughnutChart from '../common/DoughnutChart/DoughnutChart';

interface IProps {
  robots: {
    error: string;
    refair: string;
    serving: string;
    stay: string;
  };
}

const AvailableRobot = ({ robots }: IProps) => {
  console.log(robots);

  return (
    <StAvailableRobot>
      <StHeader>사용 가능한 로봇 수</StHeader>
      <StBody>
        <DoughnutChart robots={robots} />
      </StBody>
    </StAvailableRobot>
  );
};

const StAvailableRobot = styled.div`
  grid-area: 2 / 4 / 3 / 5;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  margin-bottom: 1vw;
  font-size: 1.0333vw;
  font-weight: 700;
`;

const StBody = styled.div`
  width: 100%;
`;

export default AvailableRobot;

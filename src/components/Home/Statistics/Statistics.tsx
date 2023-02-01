import styled from '@emotion/styled';
import React, { useState } from 'react';
import { IStatistics } from './types';
import StatisticsInfo from './StatisticsInfo';

interface IProps {
  serving: IStatistics;
}

const Statistics = ({ serving }: IProps) => {
  const { day, week, month } = serving;

  const [tab, setTab] = useState<string>('일간');

  const tabHandler = (tab: string) => {
    setTab(tab);
  };

  const DATE_TAB: any = {
    일간: <StatisticsInfo data={day} />,
    주간: <StatisticsInfo data={week} />,
    월간: <StatisticsInfo data={month} />,
  };

  return (
    <StStatistics>
      <StHeader>
        {Object.keys(DATE_TAB).map((cur, idx) => (
          <StTabBtn
            key={idx}
            isCurrentTab={tab === cur}
            onClick={() => {
              tabHandler(cur);
            }}>
            {cur}
          </StTabBtn>
        ))}
      </StHeader>
      <StBody>{DATE_TAB[tab]}</StBody>
    </StStatistics>
  );
};

const StStatistics = styled.div`
  width: 100%;
  grid-area: 1 / 1 / 2 / 5;
`;

const StHeader = styled.div`
  display: flex;
  gap: 1.0417vw;
  width: 100%;
  height: 30px;
`;

const StBody = styled.div`
  width: 100%;
`;

const StTabBtn = styled.button<{ isCurrentTab: boolean }>`
  width: 5.2083vw;
  height: 1.8229vw;
  border: none;
  color: ${({ theme, isCurrentTab }) => (isCurrentTab ? theme.color.white : theme.color.black)};
  background: ${({ theme, isCurrentTab }) => (isCurrentTab ? theme.color.sub : theme.color.white)};
  border-radius: 0.2604vw;
  font-size: 0.7292vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;
`;

export default Statistics;

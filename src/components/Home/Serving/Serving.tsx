import styled from '@emotion/styled';
import React, { useState } from 'react';
import { IServing } from './types';
import ServingInfo from './ServingInfo';

interface IProps {
  serving: IServing;
}

const Serving = ({ serving }: IProps) => {
  const { day, week, month } = serving;

  const [tab, setTab] = useState<string>('일간');

  const tabHandler = (tab: string) => {
    setTab(tab);
  };

  const DATE_TAB: any = {
    일간: <ServingInfo data={day} />,
    주간: <ServingInfo data={week} />,
    월간: <ServingInfo data={month} />,
  };

  return (
    <StServing>
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
    </StServing>
  );
};

const StServing = styled.div`
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

export default Serving;

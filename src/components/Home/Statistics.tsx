import styled from '@emotion/styled';
import React from 'react';

const Statistics = () => {
  return <StStatistics></StStatistics>;
};

const StStatistics = styled.div`
  grid-area: statistics;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default Statistics;

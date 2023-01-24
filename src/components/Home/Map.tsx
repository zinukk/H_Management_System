import styled from '@emotion/styled';
import React from 'react';

const Map = () => {
  return <StMap></StMap>;
};

const StMap = styled.div`
  width: 100%;
  grid-area: 2 / 4 / 6 / 5;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default Map;

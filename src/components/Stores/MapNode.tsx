import styled from '@emotion/styled';
import React from 'react';

const MapNode = () => {
  return <StMapNode></StMapNode>;
};

const StMapNode = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

export default MapNode;

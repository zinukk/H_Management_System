import styled from '@emotion/styled';
import React from 'react';

const Stores = () => {
  return <StStores></StStores>;
};

const StStores = styled.div`
  width: 100%;
  grid-area: stores;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default Stores;

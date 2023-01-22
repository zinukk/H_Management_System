import styled from '@emotion/styled';
import React from 'react';

const ErrorState = () => {
  return <StErrorState></StErrorState>;
};

const StErrorState = styled.div`
  width: 100%;
  grid-area: errorState;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default ErrorState;
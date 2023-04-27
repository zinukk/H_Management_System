import styled from '@emotion/styled';
import React from 'react';

const ErrorSolution = () => {
  return <StErrorSolution>에러 솔루션</StErrorSolution>;
};

const StErrorSolution = styled.div`
  padding: 1vw;
  width: 100%;
  grid-area: 3 / 5 / 5 / 7;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

export default ErrorSolution;

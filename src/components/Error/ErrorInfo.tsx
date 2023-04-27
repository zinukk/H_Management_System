import styled from '@emotion/styled';
import React from 'react';

const ErrorInfo = () => {
  return <StErrorInfo>에러 인포</StErrorInfo>;
};

const StErrorInfo = styled.div`
  padding: 1vw;
  width: 100%;
  display: grid;
  grid-area: 1 / 7 / 2 / 9;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

export default ErrorInfo;

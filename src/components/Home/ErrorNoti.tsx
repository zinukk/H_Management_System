import styled from '@emotion/styled';
import React from 'react';

const ErrorNoti = () => {
  return <StErrorNoti></StErrorNoti>;
};

const StErrorNoti = styled.div`
  width: 100%;
  grid-area: 4 / 1 / 6 / 3;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default ErrorNoti;

import styled from '@emotion/styled';
import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import { layoutType } from './types';

const Layout = ({ children }: layoutType) => {
  return (
    <StLayout>
      <Header />
      <Nav />
      {children}
    </StLayout>
  );
};

const StLayout = styled.div`
  position: relative;
  padding: 4.9063vw 1vw 1vw 12.4523vw;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
`;

export default Layout;

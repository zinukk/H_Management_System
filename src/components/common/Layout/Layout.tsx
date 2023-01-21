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
  padding-left: 220px;
  padding-top: 75px;
  width: 100%;
`;

export default Layout;

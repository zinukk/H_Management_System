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
  padding-left: 11.4583vw;
  padding-top: 3.9063vw;
  width: 100%;
`;

export default Layout;

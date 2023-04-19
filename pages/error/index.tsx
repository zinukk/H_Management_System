import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import ErrorList from '@src/components/Error/ErrorList/ErrorList';
import storesAPI from '@src/api/stores';
import errorAPI from '@src/api/error';

export async function getStaticProps() {
  const stores = await storesAPI.getStores();

  const errors = await errorAPI.getDefailtErrorLists();

  return {
    props: {
      stores: stores,
      errors: errors,
    },
  };
}

interface IProps {
  stores: IResponse;
  errors: any;
}

const Error = ({ stores, errors }: IProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StError>
        <StBody>
          <ErrorList stores={stores} errors={errors} />
          <StErrorTypeChart>에러 타입 차트</StErrorTypeChart>
          <StGuideChart>가이드 이탈</StGuideChart>
          <StOverDriveChart>오버 드라이브</StOverDriveChart>
          <StLineBarChart>라인바차트</StLineBarChart>
        </StBody>
      </StError>
    </motion.div>
  );
};

const StError = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1vw;
`;

const StErrorTypeChart = styled.div`
  grid-area: 1 / 3 / 3 / 5;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StGuideChart = styled.div`
  grid-area: 1 / 5 / 3 / 7;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StOverDriveChart = styled.div`
  grid-area: 1 / 7 / 3 / 9;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StLineBarChart = styled.div`
  grid-area: 3 / 3 / 5 / 9;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

export default Error;

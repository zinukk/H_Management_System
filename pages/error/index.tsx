import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import ErrorList from '@src/components/Error/ErrorList/ErrorList';
import storesAPI from '@src/api/stores';
import errorAPI from '@src/api/error';
import { useRecoilState } from 'recoil';
import { errorsState } from '@src/store/errorsState';
import { useMutation } from 'react-query';
import { IErrorList } from '@src/types/error';
import LineBarChart from '@src/components/common/LineBarChart/LineBarChart';

export async function getStaticProps() {
  const stores = await storesAPI.getStores();

  const errors = await errorAPI.getErrorList();

  return {
    props: {
      stores: stores,
      errors: errors,
    },
  };
}

interface IProps {
  stores: IResponse;
  errors: IErrorList;
}

const Error = ({ stores, errors }: IProps) => {
  const [errorList, setErrorList] = useRecoilState(errorsState);
  const [mapId, setMapId] = useState<number>(0);

  useEffect(() => {
    setErrorList(errors.error_notice);
  }, []);

  const mapIdHandler = (mapName: string, mapId: string) => {
    setMapId(Number(mapId));
  };

  const { mutate, data, isLoading } = useMutation((data: any) => errorAPI.postErrorDates(data), {
    onSuccess: (data) => {
      setErrorList(data.error_notice);
    },
  });

  const handleClickDateInfo = (dates: any) => {
    if (mapId === 0) {
      return window.alert('검색하실 매장을 선택해주세요');
    }

    const data = { ...dates, map_id: mapId };

    mutate(data);
  };

  console.log(errors);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StError>
        <StBody>
          <ErrorList
            stores={stores}
            errorList={errorList}
            isLoading={isLoading}
            handleClickDateInfo={handleClickDateInfo}
            mapIdHandler={mapIdHandler}
          />
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

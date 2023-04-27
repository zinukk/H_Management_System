import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import errorAPI from '@src/api/error';
import storesAPI from '@src/api/stores';
import ErrorInfo from '@src/components/Error/ErrorInfo';
import ErrorList from '@src/components/Error/ErrorList';
import ErrorRecentList from '@src/components/Error/ErrorRecentList';
import ErrorResolveList from '@src/components/Error/ErrorResolveList';
import ErrorSolution from '@src/components/Error/ErrorSolution';
import ErrorStatus from '@src/components/Error/ErrorStatus';
import ServingInfo from '@src/components/Error/ServingInfo';
import { errorListState } from '@src/store/errorListState';
import { errorState } from '@src/store/errorState';
import { IErrorMsg } from '@src/types/error';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';

export async function getServerSideProps() {
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
  errors: any;
}

const ErrorDetail = ({ stores, errors }: IProps) => {
  const { query } = useRouter();
  const [errorList, setErrorList] = useRecoilState(errorListState);
  const [mapId, setMapId] = useState<number>(0);
  const [errorDetail, setErrorDetail] = useState({});
  const error = useRecoilValue(errorState);
  const errorMsg = useRecoilValue(errorState);

  console.log(errorMsg);

  const mapIdHandler = (mapName: string, mapId: string) => {
    setMapId(Number(mapId));
  };

  const { mutate: postDates, isLoading: errorListLoading } = useMutation((data: any) => errorAPI.postErrorDates(data), {
    onSuccess: (data) => {
      setErrorList(data.error_notice);
    },
  });

  const { mutate: postErrorMsg, isLoading: errorMsgLoading } = useMutation(
    (data: IErrorMsg) => errorAPI.postErrorDetail(data),
    {
      onSuccess: (data) => {
        setErrorDetail(data);
      },
    },
  );

  useEffect(() => {
    postErrorMsg(errorMsg);
  }, [query.errorId]);

  const handleClickDateInfo = (dates: any) => {
    if (mapId === 0) {
      return window.alert('검색하실 매장을 선택해주세요');
    }

    const data = { ...dates, map_id: mapId };

    postDates(data);
  };

  return (
    <StErrorDetail>
      <ErrorList
        stores={stores}
        errorList={errorList}
        isLoading={errorListLoading}
        handleClickDateInfo={handleClickDateInfo}
        mapIdHandler={mapIdHandler}
        errorId={query.errorId}
      />
      <ErrorStatus errorInfo={errorDetail && errorDetail.error_info} />
      <ErrorRecentList />
      <ErrorInfo />
      <ServingInfo />
      <ErrorSolution />
      <ErrorResolveList />
    </StErrorDetail>
  );
};

const StErrorDetail = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1vw;
`;

export default ErrorDetail;

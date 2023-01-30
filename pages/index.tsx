import styled from '@emotion/styled';
import { errorsState } from '@src/store/errorsState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IErrorsResponse } from '@src/components/Home/ErrorNoti/types';
import { IStatusResponse } from '@src/components/Home/ErrorStatus/types';
import { IServingResponse } from '@src/components/Home/Serving/types';
import { IStoreResponse } from '@src/components/Home/Stores/types';
import homeAPI from '@src/api/home';
import Serving from '@src/components/Home/Serving/Serving';
import Stores from '@src/components/Home/Stores/Stores';
import KakaoMap from '@src/components/Home/KakaoMap/KakaoMap';
import ErrorNoti from '@src/components/Home/ErrorNoti/ErrorNoti';
import ErrorStatus from '@src/components/Home/ErrorStatus/ErrorStatus';

export async function getServerSideProps() {
  const serving = await homeAPI.getServing();

  const stores = await homeAPI.getStores();

  const errorStatus = await homeAPI.getErrorStatus();

  const allErrors = await homeAPI.getAllErrors();

  return {
    props: {
      serving: serving,
      stores: stores,
      errorStatus: errorStatus,
      allErrors: allErrors,
    },
  };
}

interface IProps {
  serving: IServingResponse;
  stores: IStoreResponse;
  errorStatus: IStatusResponse;
  allErrors: IErrorsResponse;
}

const Home = ({ serving, stores, errorStatus, allErrors }: IProps) => {
  const [errors, setErrors] = useRecoilState(errorsState);

  useEffect(() => {
    setErrors(allErrors.error_notice);
  }, []);

  return (
    <StHome>
      <Serving serving={serving.all} />
      <Stores stores={stores.stores} />
      <KakaoMap stores={stores.stores} />
      <ErrorNoti errors={errors} setErrors={setErrors} />
      <ErrorStatus errorStatus={errorStatus.all} />
    </StHome>
  );
};

const StHome = styled.div`
  display: grid;
  width: 100%;
  height: 85vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1vw;
`;

export default Home;

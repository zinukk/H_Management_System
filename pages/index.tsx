import styled from '@emotion/styled';
import { errorsState } from '@src/store/errorsState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import homeAPI from '@src/api/home';
import Statistics from '@src/components/Home/Statistics/Statistics';
import AllStores from '@src/components/Home/AllStores/AllStores';
import KakaoMap from '@src/components/Home/KakaoMap/KakaoMap';
import ErrorNoti from '@src/components/Home/ErrorNoti/ErrorNoti';
import ErrorStatus from '@src/components/Home/ErrorStatus/ErrorStatus';
import { IAllErrors, IAllErrorStatus, IServing } from '@src/types/home';

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
  serving: IServing;
  stores: IResponse;
  errorStatus: IAllErrorStatus;
  allErrors: IAllErrors;
}

const Home = ({ serving, stores, errorStatus, allErrors }: IProps) => {
  const [errors, setErrors] = useRecoilState(errorsState);

  useEffect(() => {
    setErrors(allErrors.error_notice);
  }, []);

  return (
    <StHome>
      <Statistics serving={serving.all} />
      <AllStores stores={stores.stores} />
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

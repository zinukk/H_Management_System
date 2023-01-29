import styled from '@emotion/styled';
import homeAPI from '@src/api/home';
import ErrorNoti from '@src/components/Home/ErrorNoti/ErrorNoti';
import ErrorStatus from '@src/components/Home/ErrorStatus/ErrorStatus';
import KakaoMap from '@src/components/Home/KakaoMap/KakaoMap';
import Serving from '@src/components/Home/Serving/Serving';
import Stores from '@src/components/Home/Stores/Stores';

export async function getStaticProps() {
  const serving = await homeAPI.getServing();

  const stores = await homeAPI.getStores();

  const errorStatus = await homeAPI.getErrorStatus();

  return {
    props: {
      serving: serving,
      stores: stores,
      errorStatus: errorStatus,
    },
  };
}

const Home = ({ serving, stores, errorStatus }: any) => {
  return (
    <StHome>
      <Serving serving={serving.all} />
      <Stores stores={stores.stores} />
      <KakaoMap stores={stores.stores} />
      <ErrorNoti />
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

import styled from '@emotion/styled';
import homeAPI from '@src/api/home';
import ErrorNoti from '@src/components/Home/ErrorNoti';
import ErrorState from '@src/components/Home/ErrorState';
import Map from '@src/components/Home/Map';
import Serving from '@src/components/Home/Serving/Serving';
import Stores from '@src/components/Home/Stores';

export async function getStaticProps() {
  const serving = await homeAPI.getServing();

  return {
    props: {
      serving: serving,
    },
  };
}

const Home = ({ serving }: any) => {
  return (
    <StHome>
      <Serving serving={serving.all} />
      <Stores />
      <Map />
      <ErrorNoti />
      <ErrorState />
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

import styled from '@emotion/styled';
import ErrorNoti from '@src/components/Home/ErrorNoti';
import ErrorState from '@src/components/Home/ErrorState';
import Map from '@src/components/Home/Map';
import Statistics from '@src/components/Home/Statistics';
import Stores from '@src/components/Home/Stores';

const Home = () => {
  return (
    <StHome>
      <Statistics />
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
  gap: 1vw;
  grid-template-areas:
    'statistics statistics statistics statistics'
    'stores stores stores map'
    'stores stores stores map'
    'errorNoti errorNoti errorState map'
    'errorNoti errorNoti errorState map';
`;

export default Home;

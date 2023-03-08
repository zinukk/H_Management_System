import React from 'react';
import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import Dropdown from '@src/components/common/Dropdown/Dropdown';
import { IStoreResponse } from '@src/components/Home/AllStores/types';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { storeNameState } from '@src/store/storeNameState';
import robotAPI from '@src/api/robot';

export async function getServerSideProps() {
  const robots = await robotAPI.getRobots();

  const stores = await storesAPI.getStores();

  return {
    props: {
      robots: robots,
      stores: stores,
    },
  };
}

interface IProps {
  stores: IData;
  robots: IData;
}

const Robot = ({ stores, robots }: IProps) => {
  const router = useRouter();

  const setStoreName = useSetRecoilState(storeNameState);

  const asd = () => {
    console.log('asd');
  };

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/robot/${storeId}`);
  };

  return (
    <StRobot>
      <StHeader>
        <Dropdown type="store" dataList={stores.stores} event={pageHandler} />
        <Dropdown type="robot" dataList={ROBOT_STATE} event={asd} />
      </StHeader>
      <StBody>asd</StBody>
    </StRobot>
  );
};

const ROBOT_STATE = [
  { id: 0, state: '에러' },
  { id: 1, state: '이동중' },
  { id: 2, state: '대기중' },
  { id: 3, state: '충전중' },
  { id: 4, state: '수리중' },
];

const StRobot = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;

const StBody = styled.div`
  width: 100%;
`;

const StFooter = styled.div`
  width: 100%;
`;

export default Robot;

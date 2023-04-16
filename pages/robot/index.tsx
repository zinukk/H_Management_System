import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import Dropdown from '@src/components/common/Dropdown/Dropdown';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { storeNameState } from '@src/store/storeNameState';
import robotAPI from '@src/api/robot';
import { IRobotState } from '@src/types/robot';
import { IRobotDataList } from '@src/components/common/Dropdown/types';
import RobotState from '@src/components/common/RobotState/RobotState';

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
  stores: IResponse;
  robots: {
    robot: IRobotState[];
  };
}

const Robot = ({ stores, robots }: IProps) => {
  const router = useRouter();

  const [robotList, setRobotList] = useState<IRobotState[]>(robots.robot);

  const setStoreName = useSetRecoilState(storeNameState);

  const getRobotsByState = (state: string) => {
    const filteredList = state === '0' ? robots.robot : robots.robot.filter(({ robot_state }) => robot_state === state);
    return setRobotList(filteredList);
  };

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/robot/${storeId}`);
  };

  return (
    <StRobot>
      <StHeader>
        <Dropdown type="store" dataList={stores.stores} event={pageHandler} />
        <Dropdown type="robot" dataList={ROBOT_STATE} event={getRobotsByState} />
      </StHeader>
      <StBody>
        <StRobotList>
          {robotList.length !== 0 ? (
            robotList.map((robot, idx) => <RobotState {...robot} key={idx} ROBOT_STATE={ROBOT_STATE} />)
          ) : (
            <StNull>해당 상태의 로봇이 존재하지 않습니다 ;(</StNull>
          )}
        </StRobotList>
      </StBody>
    </StRobot>
  );
};

const ROBOT_STATE: IRobotDataList[] = [
  { id: '0', state: '전체로봇', color: '#DA376E' },
  { id: '1', state: '에러', color: '#DA376E' },
  { id: '2', state: '이동중', color: '#299D38' },
  { id: '3', state: '대기중', color: '#D9AC37' },
  { id: '4', state: '충전중', color: '#D9AC37' },
  { id: '5', state: '수리중', color: '#406DFA' },
  { id: '6', state: '정보없음', color: '#000' },
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

const StRobotList = styled.div`
  position: relative;
  margin-top: 1vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1vw;
`;

const StNull = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50%;
  color: ${({ theme }) => theme.color.gray500};
  font-size: 24px;
`;

export default Robot;

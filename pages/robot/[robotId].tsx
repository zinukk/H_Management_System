import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import robotAPI from '@src/api/robot';
import storesAPI from '@src/api/stores';
import Dropdown from '@src/components/common/Dropdown/Dropdown';
import { IRobotDataList } from '@src/components/common/Dropdown/types';
import RobotState from '@src/components/common/RobotState/RobotState';
import { robotState } from '@src/store/robotState';
import { storeNameState } from '@src/store/storeNameState';
import { IRobotState } from '@src/types/robot';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
// import React from 'react';

export async function getStaticPaths() {
  const response: any = await storesAPI.getStores();

  const paths = response.stores.map((store: IStore) => ({
    params: {
      robotId: store.map_id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const robot = await robotAPI.getRobotsDetail(params.robotId);

  const stores = await storesAPI.getStores();

  return {
    props: {
      robot: robot,
      stores: stores,
    },
  };
}

interface IProps {
  robot: {
    robot: IRobotState[];
  };
  stores: IResponse;
}

const RobotDetail = ({ robot, stores }: IProps) => {
  const router = useRouter();

  const [robotList, setRobotList] = useState<IRobotState[]>(robot.robot);

  const setStoreName = useSetRecoilState(storeNameState);

  const setRobotState = useSetRecoilState(robotState);

  const map_id = router.query.robotId;

  useEffect(() => {
    setRobotList(robot.robot);
    setRobotState('전체로봇');
  }, [robot.robot]);

  const getRobotsByState = (state: string) => {
    const filteredList = state === '0' ? robot.robot : robot.robot.filter(({ robot_state }) => robot_state === state);
    return setRobotList(filteredList);
  };

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/robot/${storeId}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StRobotDetail>
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
          <StMapWrapper>
            <StMapImg src={`/assets/images/map/map-background-${map_id}-monitoring.png`} alt="매장이미지" fill />
          </StMapWrapper>
        </StBody>
      </StRobotDetail>
    </motion.div>
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

const StRobotDetail = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  display: flex;
  gap: 1vw;
  width: 100%;
`;

const StBody = styled.div`
  margin-top: 1vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 1vw;
`;

const StRobotList = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  gap: 1vw;
  overflow: scroll;
`;

const StNull = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.gray500};
  font-size: 1.25vw;
`;

const StMapWrapper = styled.div`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  grid-area: 1 / 2 / 2 / 5;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StMapImg = styled(Image)`
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  object-fit: scale-down;
  width: 60% !important;
  height: 60% !important;
`;

export default RobotDetail;

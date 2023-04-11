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
    console.log(state);
    const filteredList = state === '0' ? robots.robot : robots.robot.filter(({ robot_state }) => robot_state === state);
    return setRobotList(filteredList);
  };

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/robot/${storeId}`);
  };

  const getColorById = (id: string) => {
    return ROBOT_STATE.filter((robot) => robot.id === id)[0].color;
  };

  const getStateById = (id: string) => {
    return ROBOT_STATE.filter((robot) => robot.id === id)[0].state;
  };

  return (
    <StRobot>
      <StHeader>
        <Dropdown type="store" dataList={stores.stores} event={pageHandler} />
        <Dropdown type="robot" dataList={ROBOT_STATE} event={getRobotsByState} />
      </StHeader>
      <StBody>
        <StRobotList>
          {robotList.map(({ k_map_name, serving_count, distance, state, battery, serial_number }, idx) => (
            <StRobotState key={idx}>
              <StFlexBox>
                <StStore>{k_map_name}</StStore>
                <StGapBox>
                  <StState color={getColorById(state)}>{getStateById(state)}</StState>
                  <StImg src={`assets/images/robot/robot_state_${state}.png`} alt="로봇이미지" />
                </StGapBox>
              </StFlexBox>
              <StSerialNumber>S/N. {serial_number}</StSerialNumber>
              <StGapBox>
                <StGray>서빙횟수</StGray>
                <StBlack>{serving_count ? serving_count : 0} 회</StBlack>
              </StGapBox>
              <StGapBox>
                <StGray>이동거리</StGray>
                <StBlack>{distance ? distance : 0} m</StBlack>
              </StGapBox>
              <StGapBox>
                <StBatteryBox>
                  <StBatteryBar width={Number(battery) > 0 ? Number(battery) : 0} />
                </StBatteryBox>
                <StBatteryPercent>{battery}%</StBatteryPercent>
              </StGapBox>
            </StRobotState>
          ))}
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
  margin-top: 1vw;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1vw;
`;

const StRobotState = styled.div`
  padding: 1vw;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StStore = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

const StGapBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const StState = styled.p<{ color: string | undefined }>`
  color: ${({ color }) => color};
  font-size: 13px;
  font-weight: 600;
`;

const StImg = styled.img`
  width: 30px;
  height: 30px;
`;

const StSerialNumber = styled.p`
  margin: 0.2vw 0;
  text-align: right;
  font-size: 10px;
`;

const StGray = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray600};
`;

const StBlack = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};
`;

const StBatteryBox = styled.div`
  margin-top: 0.5vw;
  position: relative;
  width: 100%;
  height: 0.3646vw;
  background: #e8e6f0;
  border-radius: 20px;
  overflow: hidden;
`;

const StBatteryBar = styled.span<{ width: number | undefined }>`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: ${({ width }) => `${width}%`};
  background: #4f79f9;
  border-left: 1px solid $subPrimary-color;
  opacity: 0.7;
  height: 100%;
  transition: width 0.5s ease-in-out;
`;

const StBatteryPercent = styled.p`
  margin-top: 0.5vw;
  font-size: 12px;
  color: ${({ theme }) => theme.color.black};
`;

const StFooter = styled.div`
  width: 100%;
`;

export default Robot;

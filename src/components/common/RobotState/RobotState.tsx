import styled from '@emotion/styled';
import { IRobotDataList } from '../Dropdown/types';
import { useRouter } from 'next/router';

interface IProps {
  k_map_name: string;
  serving_count: string;
  distance: string;
  state: string;
  battery: string;
  serial_number: string;
  map_id: string;
  ROBOT_STATE: IRobotDataList[];
}

const RobotState = ({
  k_map_name,
  serving_count,
  distance,
  state,
  battery,
  serial_number,
  ROBOT_STATE,
  map_id,
}: IProps) => {
  const router = useRouter();

  const getColorById = (id: string) => {
    return ROBOT_STATE.filter((robot) => robot.id === id)[0].color;
  };

  const getStateById = (id: string) => {
    return ROBOT_STATE.filter((robot) => robot.id === id)[0].state;
  };

  const pageHandler = (mapId: string) => {
    router.push(`/robot/${mapId}`);
  };

  return (
    <StRobotState
      onClick={() => {
        pageHandler(map_id);
      }}>
      <StHeader>
        <StStore>{k_map_name}</StStore>
        <StGapBox>
          <StState color={getColorById(state)}>{getStateById(state)}</StState>
          <StImg src={`/assets/images/robot/robot_state_${state}.png`} alt="로봇이미지" />
        </StGapBox>
      </StHeader>
      <StBody>
        <StSerialNumber>S/N. {serial_number}</StSerialNumber>
        <StGapBox>
          <StGray>서빙횟수</StGray>
          <StBlack>{serving_count ? serving_count : 0} 회</StBlack>
        </StGapBox>
        <StGapBox>
          <StGray>이동거리</StGray>
          <StBlack>{distance ? distance : 0} m</StBlack>
        </StGapBox>
      </StBody>
      <StFooter>
        <StBatteryBox>
          <StBatteryBar width={Number(battery) > 0 ? Number(battery) : 0} />
        </StBatteryBox>
        <StBatteryPercent>{battery}%</StBatteryPercent>
      </StFooter>
    </StRobotState>
  );
};

const StRobotState = styled.div`
  width: 100%;
  padding: 1vw;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.gray100};
  }
`;

const StHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StStore = styled.p`
  font-size: 0.625vw;
  font-weight: 500;
`;

const StGapBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const StState = styled.p<{ color: string | undefined }>`
  color: ${({ color }) => color};
  font-size: 0.6771vw;
  font-weight: 600;
`;

const StImg = styled.img`
  width: 1.5625vw;
  height: 1.5625vw;
`;

const StBody = styled.div`
  width: 100%;
`;

const StSerialNumber = styled.p`
  margin: 0.2vw 0;
  text-align: right;
  font-size: 0.5208vw;
`;

const StGray = styled.p`
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.gray600};
`;

const StBlack = styled.p`
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.black};
`;

const StFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const StBatteryBox = styled.div`
  margin-top: 0.5vw;
  position: relative;
  width: 100%;
  height: 0.3646vw;
  background: #e8e6f0;
  border-radius: 1.0417vw;
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
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.black};
`;

export default RobotState;

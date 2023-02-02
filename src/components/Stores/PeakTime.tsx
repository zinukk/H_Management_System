import styled from '@emotion/styled';
import LineChart from '../common/LineChart/LineChart';

interface IProps {
  servingCount: {
    hours: string;
    avg_cnt: string;
  }[];
}

const PeakTime = ({ servingCount }: IProps) => {
  const isValid: boolean = servingCount.length !== 0;

  return (
    <StPeakTime>
      <StHeader>피크타임</StHeader>
      <StBody>
        {isValid ? <LineChart chartData={servingCount} /> : <StNoResult>데이터가 존재하지 않습니다 :(</StNoResult>}
      </StBody>
    </StPeakTime>
  );
};

const StPeakTime = styled.div`
  position: relative;
  grid-area: 1 / 2 / 2 / 5;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  margin-bottom: 1vw;
  font-size: 1.0333vw;
  font-weight: 700;
`;

const StNoResult = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.gray500};
  font-size: 24px;
  font-weight: 600;
`;

const StBody = styled.div`
  width: 100%;
`;

export default PeakTime;

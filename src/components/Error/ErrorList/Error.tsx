import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface IProps {
  created_at: string;
  current_node: string;
  error_id: string;
  error_msg: string;
  error_type: string;
  map_id: string;
  robot_id: string;
}

const Error = ({ created_at, current_node, error_id, error_msg, error_type, map_id, robot_id }: IProps) => {
  const router = useRouter();

  const pageHandler = (errorId: string) => {
    router.push(`/error/${errorId}`);
  };

  return (
    <StError
      onClick={() => {
        pageHandler(error_id);
      }}>
      <StHeader>
        <StRobotNumber>Robot No. {robot_id}</StRobotNumber>
      </StHeader>
      <StDevider />
      <StBody>
        <StGray>현재 노드</StGray>
        <StDescription>{current_node}</StDescription>
        <StGray>발생 시간</StGray>
        <StDescription>{created_at}</StDescription>
        <StGray>에러 메세지</StGray>
        <StDescription>{error_msg}</StDescription>
      </StBody>
    </StError>
  );
};

const StError = styled.div`
  margin-bottom: 1vw;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.gray100};
  }
`;

const StHeader = styled.div`
  width: 100%;
`;

const StRobotNumber = styled.p`
  margin-bottom: 0.5vw;
  color: ${({ theme }) => theme.color.main};
  font-size: 14px;
  font-weight: 600;
`;

const StDevider = styled.hr`
  margin: 0.5vw 0;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StBody = styled.div`
  width: 100%;
`;

const StGray = styled.p`
  margin-bottom: 0.3vw;
  color: ${({ theme }) => theme.color.gray700};
  font-size: 10px;
`;

const StDescription = styled.p`
  margin-bottom: 0.5vw;
  color: ${({ theme }) => theme.color.main};
  font-size: 11px;
  font-weight: 700;
`;

export default Error;

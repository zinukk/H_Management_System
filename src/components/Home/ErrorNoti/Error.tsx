import styled from '@emotion/styled';
import { useRouter } from 'next/router';

interface IProps {
  error: IErrorNotice;
}

const Error = ({ error }: IProps) => {
  const router = useRouter();

  const { error_msg, created_at, k_map_name, risk_degree, error_id } = error;

  const errorDate = created_at.split(' ')[0];
  const errorTime = created_at.split(' ')[1];

  const pageHandler = (errorId: string) => {
    router.push(`/error/${errorId}`);
  };

  return (
    <StError
      onClick={() => {
        pageHandler(error_id);
      }}>
      <StTime>
        <StTimeText>{errorDate}</StTimeText>
        <StTimeText>{errorTime}</StTimeText>
      </StTime>
      <StErrorMessage>
        <StMessage>{error_msg}</StMessage>
        <StStore>{k_map_name}</StStore>
        <StErrorStatus>
          <StColor color={risk_degree} />
          <StStatus>{risk_degree}</StStatus>
        </StErrorStatus>
      </StErrorMessage>
    </StError>
  );
};

const StError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5208vw;
  width: 100%;
  gap: 2vw;
`;

const StTime = styled.div`
  width: 5.2083vw;
`;

const StTimeText = styled.p`
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.gray600};
`;

const StErrorMessage = styled.div`
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

const StMessage = styled.p`
  font-size: 0.6771vw;
  font-weight: 600;
`;

const StStore = styled.p`
  margin: 0.2604vw 0;
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.gray600};
`;

const StErrorStatus = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 0.5vw;
`;

const StColor = styled.div<{ color: string }>`
  width: 0.3646vw;
  height: 0.3646vw;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
`;

const StStatus = styled.p`
  font-size: 0.7292vw;
`;

export default Error;

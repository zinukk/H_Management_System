import styled from '@emotion/styled';
import { IErrorRecentList } from '@src/types/error';

interface IProps {
  errorRecentList: IErrorRecentList[];
}

const ErrorRecentList = ({ errorRecentList }: IProps) => {
  return (
    <StErrorRecentList>
      <StHeader>해당 로봇의 최근 에러 리스트</StHeader>
      <StBody>
        {errorRecentList &&
          errorRecentList.map(({ error_id, error_type, created_at }) => (
            <StError key={error_id}>
              <StFlexBox>
                <StTitle>Error Id :</StTitle>
                <StDescription>{error_id}</StDescription>
              </StFlexBox>
              <StDevider />
              <StFlexBox>
                <StTitle>Error Type</StTitle>
                <StDescription>{error_type}</StDescription>
              </StFlexBox>
              <StFlexBox>
                <StTitle>Created At</StTitle>
                <StDescription>{created_at}</StDescription>
              </StFlexBox>
            </StError>
          ))}
      </StBody>
    </StErrorRecentList>
  );
};

const StErrorRecentList = styled.div`
  padding: 1vw;
  width: 100%;
  grid-area: 1 / 5 / 3 / 7;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  overflow: hidden;
`;

const StHeader = styled.p`
  margin-bottom: 1vw;
  font-size: 16px;
  font-weight: 500;
`;

const StDevider = styled.hr`
  margin: 0.5vw 0;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StBody = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1vw;
  overflow: scroll;
`;

const StError = styled.div`
  padding: 0.5vw;
  width: 100%;
  border: ${({ theme }) => `1px solid ${theme.color.gray400}`};
  border-radius: 5px;
`;

const StFlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const StTitle = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 11px;
`;

const StDescription = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-size: 11px;
  font-weight: 600;
`;

export default ErrorRecentList;

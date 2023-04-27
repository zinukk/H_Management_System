import styled from '@emotion/styled';
import { ICount } from '@src/types/error';

interface IProps {
  errorCount: ICount;
}

const ErrorInfo = ({ errorCount }: IProps) => {
  console.log(errorCount);
  return (
    <StErrorInfo>
      <StHeader>에러 정보</StHeader>
      <StBody>
        <StGray>최근 에러 횟수</StGray>
        <StDevider />
        <StFlexBox>
          <StCountBox>
            <StMain>{errorCount && errorCount.week_error_count}</StMain>
            <StGray>일주일</StGray>
          </StCountBox>
          <StCountBox>
            <StMain>{errorCount && errorCount.month_error_count}</StMain>
            <StGray>한 달</StGray>
          </StCountBox>
        </StFlexBox>
      </StBody>
    </StErrorInfo>
  );
};

const StErrorInfo = styled.div`
  padding: 1vw;
  width: 100%;
  grid-area: 1 / 7 / 2 / 9;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  margin-bottom: 1vw;
  font-size: 16px;
  font-weight: 500;
`;

const StBody = styled.div`
  width: 100%;
`;

const StDevider = styled.hr`
  margin: 1vw 0;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StMain = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-size: 15px;
  font-weight: 600;
`;

const StGray = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 12px;
`;

const StFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;

const StCountBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ErrorInfo;

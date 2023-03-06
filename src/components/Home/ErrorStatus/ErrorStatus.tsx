import styled from '@emotion/styled';
import { IErrorStatus } from '@src/types/home';
import React from 'react';

interface IProps {
  errorStatus: IErrorStatus;
}

const ErrorStatus = ({ errorStatus }: IProps) => {
  const { critical, major, minor } = errorStatus;

  const totalCount = Object.values(errorStatus)
    .filter((cur) => typeof cur === 'number')
    .reduce((a, b) => Number(a) + Number(b));

  const ERROR_STATUS = [
    { id: 0, error: 'All', color: 'stroke', count: totalCount },
    { id: 1, error: 'Critical', color: 'critical', count: critical },
    { id: 2, error: 'Major', color: 'major', count: major },
    { id: 3, error: 'Minor', color: 'minor', count: minor },
  ];

  return (
    <StErrorStatus>
      <StHeader>에러 상태</StHeader>
      <StBody>
        {ERROR_STATUS.map(({ id, error, color, count }) => (
          <StStatusBox key={id}>
            <StStatusType>
              <StColor color={color} />
              <StError>{error}</StError>
            </StStatusType>
            <StCountBox>
              <StCount>{count}</StCount>
            </StCountBox>
          </StStatusBox>
        ))}
      </StBody>
    </StErrorStatus>
  );
};

const StErrorStatus = styled.div`
  padding: 1vw;
  width: 100%;
  height: 100%;
  grid-area: 4 / 3 / 6 / 4;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  font-size: 0.8333vw;
  font-weight: 600;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5625vw;
  width: 100%;
  height: 80%;
`;

const StStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StStatusType = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  gap: 1vw;
`;

const StColor = styled.div<{ color: string }>`
  width: 0.5646vw;
  height: 0.5646vw;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
`;

const StError = styled.p`
  font-size: 0.8771vw;
`;

const StCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.1042vw;
  width: 1.3021vw;
  height: 1.3021vw;
  background: ${({ theme }) => theme.color.gray400};
  border-radius: 50%;
`;

const StCount = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 0.6771vw;
  font-weight: 600;
`;

export default ErrorStatus;

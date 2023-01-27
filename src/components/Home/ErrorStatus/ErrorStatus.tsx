import styled from '@emotion/styled';
import React from 'react';

interface IProps {
  errorStatus: any;
}

const ErrorStatus = ({ errorStatus }: IProps) => {
  const { critical, major, minor } = errorStatus;

  const totalCountHandler = (data: any) => {
    let sum = 0;

    for (const key in data) if (data[key] !== 'all') sum += data[key];

    return sum;
  };

  const ERROR_STATUS = [
    { id: 0, error: 'All', color: 'stroke', count: totalCountHandler(errorStatus) },
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
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  font-size: 0.8333vw;
  font-weight: 600;
`;

const StBody = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const StStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
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
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme, color }) => theme.color[color]};
`;

const StError = styled.p`
  font-size: 13px;
`;

const StCountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.color.gray400};
  border-radius: 50%;
`;

const StCount = styled.p`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 13px;
  font-weight: 600;
`;

export default ErrorStatus;

import styled from '@emotion/styled';
import { IErrorInfo } from '@src/types/error';
import React from 'react';

interface IProps {
  errorInfo: IErrorInfo;
}

const ErrorStatus = ({ errorInfo }: IProps) => {
  const target = errorInfo && errorInfo.robot_path.split(',')[0].split('!');

  return (
    <StErrorStatus>
      <StHeader>에러 스탯</StHeader>
      <StBody>
        <StTitle>최근 목적지</StTitle>
        <StDescription>: {errorInfo && errorInfo.recent_table}번 테이블</StDescription>
        <StTitle>최근 배터리</StTitle>
        <StDescription>: {errorInfo && errorInfo.battery}</StDescription>
        <StTitle>최근 경로</StTitle>
        <StDescription>: {errorInfo && errorInfo.robot_path}</StDescription>
        <StTitle>최근 Final target</StTitle>
        <StDescription>
          : {target && target[0]}, {target && target[1]}
        </StDescription>
        <StTitle>Map 상황</StTitle>
        <StDescription>: {errorInfo && errorInfo.recent_table}</StDescription>
      </StBody>
    </StErrorStatus>
  );
};

const StErrorStatus = styled.div`
  padding: 1vw;
  width: 100%;
  grid-area: 1 / 3 / 5 / 5;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StHeader = styled.p`
  margin-bottom: 0.5vw;
  font-size: 16px;
  font-weight: 500;
`;

const StBody = styled.div`
  width: 100%;
  word-wrap: break-word;
  overflow: auto;
`;

const StTitle = styled.p`
  margin-bottom: 0.5vw;
  color: ${({ theme }) => theme.color.gray700};
  font-size: 15px;
`;

const StDescription = styled.p`
  margin-bottom: 1vw;
  color: ${({ theme }) => theme.color.main};
  font-size: 14px;
  font-weight: 600;
`;

export default ErrorStatus;

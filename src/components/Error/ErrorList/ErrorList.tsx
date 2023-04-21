import styled from '@emotion/styled';
import React, { useState } from 'react';
import Dropdown from '../../common/Dropdown/Dropdown';
import Calendar from '../../common/Calendar/Calendar';
import Error from './Error';

import Spinner from '@src/components/common/Spinner';

interface IProps {
  stores: IResponse;
  errorList: IErrorNotice[];

  isLoading: boolean;
  handleClickDateInfo: (arg: any) => void;
  mapIdHandler: (arg1: string, arg2: string) => void;
}

const ErrorList = ({ stores, errorList, isLoading, handleClickDateInfo, mapIdHandler }: IProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [startDate, setStartDate] = useState<Date>(new Date(year, month, day - 6));
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <StErrorList>
      <StHeader>
        <Dropdown type="store" dataList={stores.stores} event={mapIdHandler} />
        <Calendar
          event={handleClickDateInfo}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </StHeader>
      <StBody>
        {isLoading ? (
          <Spinner />
        ) : errorList.length === 0 ? (
          <StNull>해당 조건에 맞는 에러가 존재하지 않습니다 :(</StNull>
        ) : (
          errorList.map((error: any) => <Error key={error.error_id} {...error} />)
        )}
      </StBody>
    </StErrorList>
  );
};

const StErrorList = styled.div`
  grid-area: 1 / 1 / 5 / 3;
  padding: 1vw;
  width: 100%;
  height: 88vh;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1vw;
`;

const StBody = styled.div`
  position: relative;
  margin-top: 1vw;
  padding: 1vw;
  width: 100%;
  height: 72.5vh;
  background: ${({ theme }) => theme.color.background};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  overflow: scroll;
`;

const StNull = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.color.gray700};
  font-size: 15px;
`;

export default ErrorList;

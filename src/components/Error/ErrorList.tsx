import styled from '@emotion/styled';
import React, { useState } from 'react';
import Dropdown from '../common/Dropdown/Dropdown';
import Calendar from '../common/Calendar/Calendar';

interface IProps {
  stores: IResponse;
}

const ErrorList = ({ stores }: IProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const [startDate, setStartDate] = useState<Date>(new Date(year, month, day - 6));
  const [endDate, setEndDate] = useState<Date>(new Date());

  const pageHandler = () => {
    console.log(stores);
  };

  return (
    <StErrorList>
      <StHeader>
        <Dropdown type="store" dataList={stores.stores} event={pageHandler} />
        <Calendar
          event={pageHandler}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </StHeader>
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

export default ErrorList;

import styled from '@emotion/styled';
import Calendar from '@src/components/common/Calendar/Calendar';
import { useState } from 'react';

const ErrorNoti = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const post = () => {
    console.log('post!');
  };

  return (
    <StErrorNoti>
      <Calendar
        event={post}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </StErrorNoti>
  );
};

const StErrorNoti = styled.div`
  width: 100%;
  grid-area: 4 / 1 / 6 / 3;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid black;
`;

export default ErrorNoti;

import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  event: () => void;
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  setEndDate: Dispatch<SetStateAction<Date>>;
}

const Calendar = ({ event, startDate, setStartDate, endDate, setEndDate }: IProps) => {
  return (
    <StCalendar>
      <StCustomDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd (eee)"
        showPopperArrow={false}
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
        }}
      />
      <StCustomDatePicker
        locale={ko}
        dateFormat="yyyy.MM.dd (eee)"
        showPopperArrow={false}
        minDate={startDate}
        selected={endDate}
        onChange={(date: Date) => {
          setEndDate(date);
        }}
      />
      <StSubmitBtn onClick={event}>검색</StSubmitBtn>
    </StCalendar>
  );
};

const StCalendar = styled.div`
  display: flex;
  width: fit-content;
`;

const StCustomDatePicker = styled(DatePicker)`
  width: 6.5104vw;
  height: 1.5625vw;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.stroke};
  border: none;
  border-radius: 0.2604vw;
  font-size: 0.7292vw;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

const StSubmitBtn = styled.button`
  width: 8.5104vw;
  height: 1.5625vw;
  border-radius: 0.2604vw;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.main};
  font-size: 0.7292vw;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export default Calendar;

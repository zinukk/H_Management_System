import styled from '@emotion/styled';
import { AxiosResponse } from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from 'react-query';
import { IDates, IErrors, IErrorsResponse } from './types';
import Error from './Error';
import homeAPI from '@src/api/home';
import Calendar from '@src/components/common/Calendar/Calendar';
import Spinner from '@src/components/common/Spinner';

interface IProps {
  errors: IErrorNotice[];
  setErrors: Dispatch<SetStateAction<IErrorNotice[]>>;
}

const ErrorNoti = ({ errors, setErrors }: IProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const { mutate: postDates, isLoading } = useMutation((data: IDates) => homeAPI.postDates(data), {
    onSuccess: (data: AxiosResponse<IResponse>) => {
      setErrors(data.error_notice.reverse());
    },
  });

  return (
    <StErrorNoti>
      <StHeader>
        <StTitle>에러 알림</StTitle>
        <StCalendarBox>
          <Calendar
            event={postDates}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </StCalendarBox>
      </StHeader>
      <StBody>
        {isLoading ? <Spinner /> : errors.map((error: IErrorNotice) => <Error error={error} key={error.error_id} />)}
      </StBody>
    </StErrorNoti>
  );
};

const StErrorNoti = styled.div`
  padding: 1vw;
  width: 100%;
  grid-area: 4 / 1 / 6 / 3;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StTitle = styled.p`
  font-size: 0.8333vw;
  font-weight: 600;
`;

const StCalendarBox = styled.div`
  width: 20vw;
`;

const StBody = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 1vw;
  width: 100%;
  height: 80%;
  background: ${({ theme }) => theme.color.background};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  overflow: scroll;
`;

export default ErrorNoti;

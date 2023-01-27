import styled from '@emotion/styled';
import React from 'react';
import { serving } from './types';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

interface IProps {
  data: serving;
}

const ServingInfo = ({ data }: IProps) => {
  const {
    serving_count,
    serving_count_before,
    move_distance,
    move_distance_before,
    avg_serving_time,
    avg_serving_time_before,
    performance,
    performance_before,
  } = data;

  const SERVING_INFO = [
    {
      id: 1,
      title: '서빙횟수',
      unit: '',
      currentValue: serving_count,
      prevValue: serving_count_before,
    },
    {
      id: 2,
      title: '이동거리',
      unit: 'km',
      currentValue: parseInt(move_distance),
      prevValue: move_distance_before,
    },
    {
      id: 3,
      title: '서빙평균시간',
      unit: 'm',
      currentValue: avg_serving_time,
      prevValue: avg_serving_time_before,
    },
    {
      id: 4,
      title: '주행효율',
      unit: '%',
      currentValue: Number(performance) * 100,
      prevValue: Number(performance_before) * 100,
    },
  ];

  const calcComparedPrev = (cur: number, prev: number) => {
    return Math.abs(parseInt(((cur - prev) / prev) * 100));
  };

  return (
    <StServingInfo>
      <StBody>
        {SERVING_INFO.map(({ id, title, unit, currentValue, prevValue }) => (
          <StInfoBox key={id}>
            <StCurrentBox>
              <StCurrent>
                {currentValue}
                {unit}
              </StCurrent>
              <StTitle>{title}</StTitle>
            </StCurrentBox>
            <StPercentageBox isOver={prevValue > currentValue}>
              {prevValue > currentValue ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
              <StPercentage>{calcComparedPrev(currentValue, prevValue)}%</StPercentage>
            </StPercentageBox>
          </StInfoBox>
        ))}
      </StBody>
    </StServingInfo>
  );
};

const StServingInfo = styled.div`
  margin-top: 1vw;
  width: 100%;
  height: 100%;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1vw;
`;

const StInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5vw;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StCurrentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const StCurrent = styled.p`
  font-size: 1.6667vw;
  font-weight: 600;
`;

const StTitle = styled.p`
  font-size: 0.7813vw;
  color: ${({ theme }) => theme.color.gray600};
`;

const StPercentageBox = styled.div<{ isOver: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125vw;
  height: 3.125vw;
  border-radius: 3.125vw;
  border: ${({ theme, isOver }) =>
    isOver ? `0.2604vw solid ${theme.color.major}` : `0.2604vw solid ${theme.color.critical}`};
  color: ${({ theme, isOver }) => (isOver ? theme.color.major : theme.color.critical)};
`;

const StPercentage = styled.p`
  font-size: 0.8333vw;
`;

export default ServingInfo;

import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import WeatherImg from '/public/assets/icons/header/icons_weather.png';

const Header = () => {
  const [day, setDay] = useState<any>(new Date());

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      setDay(new Date());
    }, 1000);
    return () => clearInterval(timeUpdate);
  }, []);

  const today = day.toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    weekday: 'short',
  });

  const time = day.toLocaleString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <StHeader>
      <StLogo>H_MANAGEMENT_SYSTEM</StLogo>
      <StDate>
        <Image src={WeatherImg} alt="날씨사진" width={30} height={30} style={{ marginBottom: '5px', color: 'white' }} />
        <StToday>{today}</StToday>
        <StTime>{time}</StTime>
      </StDate>
    </StHeader>
  );
};

const StHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  width: 100%;
  height: 75px;
  background: ${({ theme }) => theme.color.background};
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  z-index: 100;
`;

const StLogo = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const StDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StToday = styled.p`
  margin: 0 20px;
  font-size: 16px;
`;
const StTime = styled.p`
  font-size: 16px;
`;

export default Header;

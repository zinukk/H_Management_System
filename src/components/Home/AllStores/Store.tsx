import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

interface IProps {
  store: IStore;
  pageHandler: (arg1: string, arg2: string) => void;
}

const Store = ({ store, pageHandler }: IProps) => {
  const {
    img_src,
    map_name,
    map_id,
    location,
    error,
    serving,
    stay,
    refair,
    total,
    serving_count,
    error_count,
    performance,
  } = store;

  const STATUS = [
    { id: 0, color: 'main', count: parseInt(error) },
    { id: 1, color: 'sub', count: parseInt(serving) },
    { id: 2, color: 'stroke', count: parseInt(refair) },
    { id: 3, color: 'light', count: parseInt(stay) },
  ];

  const STATISTICS = [
    { id: 0, title: '서빙횟수', count: serving_count },
    { id: 1, title: '에러횟수', count: error_count },
    { id: 2, title: '주행효율', count: performance },
  ];

  const widthHandler = (count: number, total: number) => {
    return (count / total) * 100;
  };

  return (
    <StStore
      onClick={() => {
        pageHandler(map_name, map_id);
      }}>
      <StHeader>
        <StLogo>
          <Image src={img_src} alt="매장로고" width={60} height={40} />
        </StLogo>
        <StStoreInfo>
          <StName>{map_name}</StName>
          <StLocation>{location}</StLocation>
        </StStoreInfo>
      </StHeader>
      <StDevider />
      <StBody>
        <StStatusBarBox>
          {STATUS.map(({ id, color, count }) => {
            return <StStatusBar key={id} color={color} style={{ width: widthHandler(count, total) }} />;
          })}
        </StStatusBarBox>
        <StStatisticsBox>
          {STATISTICS.map(({ id, title, count }) => (
            <StStatistics key={id}>
              <StCount>{count}</StCount>
              <StTitle>{title}</StTitle>
            </StStatistics>
          ))}
        </StStatisticsBox>
      </StBody>
    </StStore>
  );
};

const StStore = styled.div`
  padding: 1vw;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.gray100};
  }
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1vw;
`;

const StStoreInfo = styled.div`
  width: 100%;
`;

const StLogo = styled.div`
  width: fit-content;
`;

const StName = styled.p`
  color: ${({ theme }) => theme.color.blue100};
  font-size: 0.6771vw;
  font-weight: 600;
`;

const StLocation = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.color.blue};
  font-size: 0.5729vw;
`;

const StDevider = styled.hr`
  margin: 0.5vw 0;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StStatusBarBox = styled.div`
  display: flex;
  width: 100%;
  height: 0.5208vw;
  border-radius: 0.5208vw;
  background: ${({ theme }) => theme.color.light};
  overflow: hidden;
`;

const StStatusBar = styled.div<{ color: string }>`
  height: 0.5208vw;
  background: ${({ theme, color }) => theme.color[color]};
`;

const StStatisticsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StStatistics = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1vw;
  width: 100%;
`;

const StCount = styled.p`
  margin-bottom: 0.2vw;
  font-size: 0.8854vw;
  font-weight: 600;
`;

const StTitle = styled.p`
  font-size: 0.625vw;
  color: ${({ theme }) => theme.color.gray600};
`;

export default Store;

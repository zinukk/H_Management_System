import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { IStore } from '../Home/AllStores/types';

interface IProps {
  event: (arg1: string, arg2: string) => void;
  store: IStore;
}

const Store = ({ store, event }: IProps) => {
  const { map_id, map_name, location } = store;

  return (
    <StStore
      onClick={() => {
        event(map_name, map_id);
      }}>
      <StHeader>
        <StName>{map_name}</StName>
        <StLocation>{location}</StLocation>
      </StHeader>
      <StDevider />
      <StBody>
        <StMapImg src={`/assets/images/map/map-background-${map_id}-monitoring.png`} alt="매장이미지" fill />
      </StBody>
    </StStore>
  );
};

const StStore = styled.div`
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
  cursor: pointer;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StName = styled.p`
  margin-bottom: 0.2604vw;
  color: ${({ theme }) => theme.color.blue100};
  font-size: 1.0292vw;
  font-weight: 700;
`;

const StLocation = styled.p`
  color: ${({ theme }) => theme.color.blue};
  font-size: 0.8256vw;
`;

const StDevider = styled.hr`
  margin: 1.0417vw 0;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StMapImg = styled(Image)`
  position: relative !important;
  object-fit: scale-down;
  width: 60% !important;
  height: 60% !important;
`;

export default Store;

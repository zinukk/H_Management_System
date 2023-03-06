import styled from '@emotion/styled';
import { IMap } from '@src/types/home';
import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

interface IProps {
  stores: IStore[];
}

const KakaoMap = ({ stores }: IProps) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const [info, setInfo] = useState<IMap>({
    map_id: '',
    map_name: '',
    store_lat: '',
    store_lng: '',
  });

  const organizedStores = stores.slice(0, 3);

  return (
    <StKakaoMap>
      <Map
        center={{
          lat: 37.1485,
          lng: 127.075,
        }}
        style={{
          height: '100%',
          borderRadius: '0.5208vw',
        }}
        level={12}>
        {organizedStores.map(({ map_id, map_name, store_lat, store_lng }) => (
          <div key={map_id}>
            <MapMarker
              key={map_id}
              clickable={true}
              onMouseOver={() => {
                setisOpen(true);
                setInfo({ map_id, map_name, store_lat, store_lng });
              }}
              onMouseOut={() => {
                setisOpen(false);
              }}
              position={{
                lat: Number(store_lat),
                lng: Number(store_lng),
              }}
            />
            {isOpen && info.map_id === map_id && (
              <CustomOverlayMap
                position={{
                  lat: Number(store_lat),
                  lng: Number(store_lng),
                }}
                yAnchor={2.7}
                xAnchor={0.5}>
                <StCustomOverlay>
                  <StStore>{map_name}</StStore>
                </StCustomOverlay>
              </CustomOverlayMap>
            )}
          </div>
        ))}
      </Map>
    </StKakaoMap>
  );
};

const StKakaoMap = styled.div`
  width: 100%;
  grid-area: 2 / 4 / 6 / 5;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.5208vw;
`;

const StCustomOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0.2604vw;
  width: 100%;
  background: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.1563vw;
  font-size: 0.5729vw;
  font-weight: 600;
`;

const StStore = styled.div`
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.1563vw;
  font-size: 0.5729vw;
  font-weight: 600;
`;

export default KakaoMap;

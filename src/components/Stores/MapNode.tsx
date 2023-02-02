import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const MapNode = () => {
  const { query } = useRouter();

  console.log(query.storeId);

  return (
    <StMapNode>
      <StHeader>맵 노드</StHeader>
      <StBody>
        <StMapImg src={`/assets/images/map/map-background-${query.storeId}-test.png`} fill alt="맵노드" />
      </StBody>
    </StMapNode>
  );
};

const StMapNode = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.p`
  margin-bottom: 1vw;
  font-size: 1.0333vw;
  font-weight: 700;
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StMapImg = styled(Image)`
  position: relative !important;
  object-fit: scale-down;
  width: 80% !important;
  height: 80% !important;
`;

export default MapNode;

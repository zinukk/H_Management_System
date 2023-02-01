import styled from '@emotion/styled';
import React from 'react';
import Store from './Store';
import { IStore } from './types';

interface IProps {
  stores: IStore;
}

const AllStores = ({ stores }: IProps) => {
  const organizedStores = (stores: any) => {
    return stores.slice(0, 3).map((cur: IStore) => ({
      ...cur,
      total: parseInt(cur.error) + parseInt(cur.serving) + parseInt(cur.stay) + parseInt(cur.refair),
    }));
  };

  return (
    <StStores>
      <StHeader>
        <StTitle>모든 매장</StTitle>
        <StStatusBox>
          {STATUS.map(({ id, status, color }) => (
            <StStatusWrapper key={id}>
              <StColor status={status} color={color} />
              <StStatus>{status}</StStatus>
            </StStatusWrapper>
          ))}
        </StStatusBox>
      </StHeader>
      <StBody>
        {organizedStores(stores).map((store: IStore, idx: number) => (
          <Store key={idx} store={store} />
        ))}
      </StBody>
    </StStores>
  );
};

const STATUS = [
  { id: 0, status: '에러', color: 'main' },
  { id: 1, status: '서빙중', color: 'sub' },
  { id: 2, status: '대기중', color: 'stroke' },
  { id: 3, status: '수리중', color: 'light' },
];

const StStores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1vw;
  width: 100%;
  grid-area: 2 / 1 / 4 / 4;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5208vw;
  width: 100%;
`;

const StTitle = styled.p`
  font-size: 0.8333vw;
  font-weight: 600;
`;

const StStatusBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
  width: fit-content;
`;

const StStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 0.3vw;
`;

const StColor = styled.div<{ color: string; status: string }>`
  width: 0.5208vw;
  height: 0.5208vw;
  border-radius: 50%;
  border: ${({ status }) => status === '수리중' && '1px solid black'};
  background: ${({ theme, color }) => theme.color[color]};
`;

const StStatus = styled.p`
  font-size: 0.5208vw;
`;

const StBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
  width: 100%;
`;

export default AllStores;

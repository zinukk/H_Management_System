import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import { IStore, IStoreResponse } from '@src/components/Home/AllStores/types';
import StoreMap from '@src/components/Stores/StoreMap';
import React from 'react';

export async function getStaticProps() {
  const response = await storesAPI.getStores();

  return {
    props: {
      stores: response,
    },
  };
}

interface IProps {
  stores: IStoreResponse;
}

const Stores = ({ stores }: IProps) => {
  return (
    <StStores>
      <StHeader>헤더입니다</StHeader>
      <StBody>
        {stores.stores.map((store: IStore) => (
          <StoreMap key={store.map_id} store={store} />
        ))}
      </StBody>
    </StStores>
  );
};

const StStores = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2vw;
`;

export default Stores;

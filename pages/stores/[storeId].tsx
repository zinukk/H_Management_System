import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import Dropdown from '@src/components/common/Dropdown/Dropdown';
import { IStore } from '@src/components/Home/AllStores/types';
import AvailableRobot from '@src/components/Stores/AvailableRobot';
import MapNode from '@src/components/Stores/MapNode';
import PeakTime from '@src/components/Stores/PeakTime';
import StoreInfo from '@src/components/Stores/StoreInfo';

import React from 'react';

export async function getStaticPaths() {
  const response: any = await storesAPI.getStores();

  const paths = response.stores.map((store: IStore) => ({
    params: {
      storeId: store.map_id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const store = await storesAPI.getStores(params.storeId);
  const stores = await storesAPI.getStores();

  return {
    props: {
      store: store,
      stores: stores,
    },
  };
}

const Store = ({ store, stores }: any) => {
  console.log(store);

  return (
    <StStore>
      <StoreInfo store={store.stores} storeList={stores.stores} />
      <PeakTime servingCount={store.week} />
      <MapNode />
      <AvailableRobot />
    </StStore>
  );
};

const StStore = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  gap: 1vw;
`;

export default Store;

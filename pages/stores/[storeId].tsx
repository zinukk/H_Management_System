import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import { IStore } from '@src/components/Home/Stores/types';
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
  const response = await storesAPI.getStores(params.storeId);

  return {
    props: {
      store: response,
    },
  };
}

const Store = ({ store }: any) => {
  console.log(store.stores);
  return <StStore></StStore>;
};

const StStore = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
`;

export default Store;

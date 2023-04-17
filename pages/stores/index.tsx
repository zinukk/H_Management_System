import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import Dropdown from '@src/components/common/Dropdown/Dropdown';
import Store from '@src/components/Stores/Store';
import { storeNameState } from '@src/store/storeNameState';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const stores = await storesAPI.getStores();

  return {
    props: {
      stores: stores,
    },
  };
}

interface IProps {
  stores: IResponse;
}

const Stores = ({ stores }: IProps) => {
  const router = useRouter();

  const setStoreName = useSetRecoilState(storeNameState);

  const pageHandler = (storeName: string, storeId: string) => {
    router.push(`/stores/${storeId}`);
    setStoreName(storeName);
  };

  useEffect(() => {
    setStoreName('전체매장');
  }, []);

  return (
    <StStores>
      <StHeader>
        <Dropdown type="store" event={pageHandler} dataList={stores.stores} />
      </StHeader>
      <StBody>
        {stores.stores.map((store: IStore) => (
          <Store key={store.map_id} store={store} event={pageHandler} />
        ))}
      </StBody>
    </StStores>
  );
};

const StStores = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  margin-bottom: 1vw;
  width: fit-content;
`;

const StBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2vw;
`;

export default Stores;

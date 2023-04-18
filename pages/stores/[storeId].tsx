import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import storesAPI from '@src/api/stores';
import AvailableRobot from '@src/components/Stores/AvailableRobot';
import MapNode from '@src/components/Stores/MapNode';
import PeakTime from '@src/components/Stores/PeakTime';
import StoreInfo from '@src/components/Stores/StoreInfo';
import { IStoreDetail } from '@src/types/store';

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

interface IProps {
  store: IStoreDetail;
  stores: IResponse;
}

const Store = ({ store, stores }: IProps) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StStore>
        <StoreInfo store={store.stores} storeList={stores.stores} />
        <PeakTime servingCount={store.week} />
        <MapNode />
        <AvailableRobot robots={store.robot_counts[0]} />
      </StStore>
    </motion.div>
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

import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { storeNameState } from '@src/store/storeNameState';
import Image from 'next/image';
import Dropdown from '../common/Dropdown/Dropdown';

interface IProps {
  store: IStore[];
  storeList: IStore[];
}

const StoreInfo = ({ store, storeList }: IProps) => {
  const { img_src, map_name, location, descirbe, map_id, login, start_node, wifi_id, wifi_pw, home } = store[0];

  const router = useRouter();

  const setStoreName = useSetRecoilState(storeNameState);

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/stores/${storeId}`);
  };

  const STORE_INFO = [
    { id: 0, title: '설명', description: descirbe },
    { id: 1, title: 'Map_id', description: map_id },
    { id: 2, title: 'Login', description: login },
    { id: 3, title: 'Start_node', description: start_node },
    { id: 4, title: 'Wifi_id', description: wifi_id },
    { id: 5, title: 'Wifi_pw', description: wifi_pw },
    { id: 6, title: 'Home', description: home },
  ];

  return (
    <StStoreInfo>
      <StHeader>
        <Dropdown dataList={storeList} event={pageHandler} type={'store'} />
      </StHeader>
      <StBody>
        <StInfo>
          <Image src={img_src} width={70} height={50} alt="가게로고" />
          <StStore>
            <StName>{map_name}</StName>
            <StLocation>{location}</StLocation>
          </StStore>
        </StInfo>
        <StDevider />
        {STORE_INFO.map(({ id, title, description }) => (
          <StDetailInfo key={id}>
            <StTitle>{title}</StTitle>
            <StDescription>{description}</StDescription>
          </StDetailInfo>
        ))}
      </StBody>
    </StStoreInfo>
  );
};

const StStoreInfo = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  padding: 1vw;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.2604vw;
  box-shadow: rgba(99, 99, 99, 0.2) 0vw 0.1042vw 0.4167vw 0vw;
`;

const StHeader = styled.div`
  margin-bottom: 1vw;
  width: fit-content;
`;

const StBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vw;
  width: 100%;
  border-radius: 0.2604vw;
  border: ${({ theme }) => `1px solid ${theme.color.gray400}`};
`;

const StInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StStore = styled.div`
  width: 100%;
`;

const StName = styled.p`
  color: ${({ theme }) => theme.color.blue100};
  font-size: 0.9771vw;
  font-weight: 700;
`;

const StLocation = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.color.blue};
  font-size: 0.7729vw;
`;

const StDevider = styled.hr`
  margin: 1vw 0;
  width: 100%;
  border: ${({ theme }) => `0.5px solid ${theme.color.gray400}`};
`;

const StDetailInfo = styled.div`
  margin-bottom: 1.0417vw;
  width: 100%;
`;

const StTitle = styled.p`
  margin-bottom: 0.2604vw;
  color: ${({ theme }) => theme.color.main};
  font-size: 0.9813vw;
  font-weight: 700;
`;

const StDescription = styled.p`
  font-size: 0.8292vw;
  color: ${({ theme }) => theme.color.gray600};
`;

export default StoreInfo;

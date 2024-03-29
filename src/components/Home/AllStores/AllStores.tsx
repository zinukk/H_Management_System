import styled from '@emotion/styled';
import { storeNameState } from '@src/store/storeNameState';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import Slider from 'react-slick';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Store from './Store';

interface IProps {
  stores: IStore[];
}

const AllStores = ({ stores }: IProps) => {
  const router = useRouter();

  const setStoreName = useSetRecoilState(storeNameState);

  const organizedStores = (stores: IStore[]) => {
    return stores.map((cur: IStore) => ({
      ...cur,
      total: parseInt(cur.error) + parseInt(cur.serving) + parseInt(cur.stay) + parseInt(cur.refair),
    }));
  };

  const pageHandler = (storeName: string, storeId: string) => {
    setStoreName(storeName);
    router.push(`/stores/${storeId}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 한 화면에 보이는 이미지 개수
    slidesToScroll: 3, // 한 번에 스크롤되는 이미지 개수

    nextArrow: (
      <Next>
        <MdArrowForwardIos className="nextIcon" />
      </Next>
    ),
    prevArrow: (
      <Pre>
        <MdArrowBackIos className="prevIcon" />
      </Pre>
    ),
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
        <StyledSlider {...settings}>
          {organizedStores(stores).map((store: IStore, idx: number) => (
            <Store key={idx} store={store} pageHandler={pageHandler} />
          ))}
        </StyledSlider>
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
  position: relative;
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
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  padding: 1vw;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Pre = styled.div`
  position: absolute;
  left: -0.5%;
  width: 30px;
  height: 30px;
  z-index: 10;

  .prevIcon {
    color: ${({ theme }) => theme.color.main};
    font-size: 30px;
    z-index: 11;
  }
`;

const Next = styled.div`
  position: absolute;
  right: -1.5%;
  width: 30px;
  height: 30px;
  z-index: 10;

  .nextIcon {
    color: ${({ theme }) => theme.color.main};
    font-size: 30px;
    z-index: 11;
  }
`;

export default AllStores;

import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tabState } from '@src/store/tabState';
import { Tab } from './types';

const Nav = () => {
  const router = useRouter();

  const [tab, setTab] = useRecoilState(tabState);

  const currentPath = router.pathname;

  useEffect(() => {
    setTab(currentPath);
  }, [currentPath]);

  const pageHandler = (path: string) => {
    router.push(path);
  };

  return (
    <StNav>
      {TAB.map(({ id, name, path }) => (
        <StTab
          key={id}
          isSame={tab === path}
          onClick={() => {
            pageHandler(path);
          }}>
          <Image
            src={tab === path ? `/assets/icons/tab/icons_active_${name}.png` : `/assets/icons/tab/icons_${name}.png`}
            alt="탭아이콘"
            width={20}
            height={20}
          />
          <StName>{name}</StName>
        </StTab>
      ))}
    </StNav>
  );
};

const TAB: Tab[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Store',
    path: '/store',
  },
  {
    id: 3,
    name: 'Robot',
    path: '/robot',
  },
  {
    id: 4,
    name: 'Error',
    path: '/error',
  },
  {
    id: 5,
    name: 'Log',
    path: '/log',
  },
  {
    id: 6,
    name: 'Statistics',
    path: '/statistics',
  },
];

const StNav = styled.div`
  position: fixed;
  top: 3.9063vw;
  left: 0;
  width: 11.4583vw;
  height: 100vh;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const StTab = styled.div<{ isSame: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5625vw;
  width: 100%;
  height: 3.6458vw;
  color: ${({ theme, isSame }) => (isSame ? theme.color.white : theme.color.black)};
  background: ${({ theme, isSame }) => (isSame ? theme.color.sub : theme.color.white)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isSame }) => !isSame && theme.color.background};
    color: ${({ theme, isSame }) => !isSame && theme.color.black};
  }
`;

const StName = styled.p`
  margin-left: 1.0417vw;
  font-size: 0.9375vw;
`;

export default Nav;

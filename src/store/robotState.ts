import { atom } from 'recoil';

export const robotState = atom<string>({
  key: 'robotState',
  default: '전체로봇',
});

import { atom } from 'recoil';

export const storeNameState = atom<number | string>({
  key: 'storeNameState',
  default: '전체매장',
});

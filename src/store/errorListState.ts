import { atom } from 'recoil';

export const errorListState = atom<IErrorNotice[]>({
  key: 'errorListState',
  default: [],
});

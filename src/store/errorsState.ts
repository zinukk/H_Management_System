import { atom } from 'recoil';

export const errorsState = atom<IErrorNotice[]>({
  key: 'errorsState',
  default: [],
});

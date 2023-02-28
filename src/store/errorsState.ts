import { IErrors } from '@src/components/Home/ErrorNoti/types';
import { atom } from 'recoil';

export const errorsState = atom<IErrors[]>({
  key: 'errorsState',
  default: [],
});

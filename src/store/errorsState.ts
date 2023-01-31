import { IErrors } from '@src/components/Home/ErrorNoti/types';
import { atom } from 'recoil';

export const errorsState = atom<Array<IErrors>>({
  key: 'errorsState',
  default: [],
});

import { IErrorMsg } from '@src/types/error';
import { atom } from 'recoil';

export const errorState = atom<IErrorMsg>({
  key: 'errorState',
  default: {
    created_at: '',
    error_id: '',
    error_type: '',
    map_id: '',
    robot_id: '',
  },
});

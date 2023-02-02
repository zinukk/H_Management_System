import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IStore } from '@src/components/Home/AllStores/types';
import useOnClickOutside from '@src/hooks/useOnClickOutside';
import { useRecoilValue } from 'recoil';
import { storeNameState } from '@src/store/storeNameState';

interface IProps {
  event: (arg1: string, arg2: string) => void;
  dataList: IStore;
}

const Dropdown = ({ dataList, event }: IProps) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const storeName = useRecoilValue(storeNameState);

  const ref = useRef<HTMLDivElement>(null);

  const dropdownHandler = () => {
    setisOpen(!isOpen);
  };

  useOnClickOutside(ref, () => {
    setisOpen(false);
  });

  return (
    <StDropdown ref={ref}>
      <StSelected isOpen={isOpen} onClick={dropdownHandler}>
        {storeName}
      </StSelected>
      <StSelect isOpen={isOpen}>
        {dataList.map(({ map_name, map_id }: IStore) => (
          <StOption
            onClick={() => {
              dropdownHandler();
              event(map_name, map_id);
            }}
            key={map_id}>
            {map_name}
          </StOption>
        ))}
      </StSelect>
    </StDropdown>
  );
};

const StDropdown = styled.div`
  position: relative;
`;

const StSelected = styled.button<{ isOpen: boolean }>`
  position: relative;
  padding: 0 5px;
  width: 120px;
  height: 30px;
  background: ${({ theme, isOpen }) => (isOpen ? theme.color.main : theme.color.sub)};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 5px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  font-size: 11px;
  z-index: 2;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.color.main};
  }
`;

const StSelect = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 120px;
  border-radius: 5px;
  border-top-left-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  border-top-right-radius: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  translate: ${({ isOpen }) => (isOpen ? '0' : '0 -30px')};
  transition: 0.4s;
  overflow: hidden;
  z-index: 1;
`;

const StOption = styled.button`
  padding: 0 5px;
  width: 120px;
  height: 30px;
  background: ${({ theme }) => theme.color.sub};
  color: ${({ theme }) => theme.color.white};
  border: 0;
  cursor: pointer;
  font-size: 10px;

  :hover {
    background: ${({ theme }) => theme.color.main};
  }
`;

export default Dropdown;

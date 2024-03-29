import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import useOnClickOutside from '@src/hooks/useOnClickOutside';
import { useRecoilState } from 'recoil';
import { robotState } from '@src/store/robotState';
import { IRobotDataList } from './types';

interface IProps {
  event: (arg1: string) => void;
  dataList: IRobotDataList[];
}

const RobotDropDown = ({ dataList, event }: IProps) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const [robot, setRobotState] = useRecoilState(robotState);

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
        {robot}
      </StSelected>
      <StSelect isOpen={isOpen}>
        {dataList.map(({ id, state }: { id: string; state: string }) => (
          <StOption
            onClick={() => {
              dropdownHandler();
              setRobotState(state);
              event(id);
            }}
            key={id}>
            {state}
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
  border-bottom: ${({ theme }) => `0.1px solid ${theme.color.white}`};
  cursor: pointer;
  font-size: 10px;

  :hover {
    background: ${({ theme }) => theme.color.main};
  }
`;

export default RobotDropDown;

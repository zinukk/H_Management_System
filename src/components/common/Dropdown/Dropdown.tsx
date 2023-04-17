import StoreDropDown from './StoreDropDown';
import RobotDropDown from './RobotDropDown';

interface IProps {
  type: 'store' | 'robot';
  dataList: any;
  event: any;
}

const Dropdown = ({ type, dataList, event }: IProps) => {
  const dropdown = {
    store: <StoreDropDown dataList={dataList} event={event} />,
    robot: <RobotDropDown dataList={dataList} event={event} />,
  };

  return <>{dropdown[type]}</>;
};

export default Dropdown;

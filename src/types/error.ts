export type IObj = {
  [key: string]: string;
};

export type IError = {
  created_at: string;
  current_node: string;
  error_id: string;
  error_msg: string;
  error_type: string;
  map_id: string;
  robot_id: string;
};

export type IErrorCount = {
  RFID_sensing_error_node: null | number;
  callback_from_wemos_timeout: null | number;
  charging_RFID_sensing_error: null | number;
  etc: null | number;
  guide_departure: null | number;
  guide_error: null | number;
  low_battery: null | number;
  motor_driver_fault: null | number;
  motor_driver_return_timeout: null | number;
  network: null | number;
  over_current: null | number;
  over_drive_100cm: null | number;
  over_voltage: null | number;
  path: null | number;
  path_flow_miss: null | number;
  path_matcing_error_node: null | number;
  path_plan_request_timeout: null | number;
  sleep_long: null | number;
  under_voltage: null | number;
};

export type IErrorList = {
  RFID_sensing_error_node: null | IObj;
  allback_from_wemos_timeout: null | IObj;
  charging_RFID_sensing_error: null | IObj;
  error_count: IErrorCount;
  error_notice: IError[];
  etc: null | IObj;
  guide_departure: null | IObj;
  guide_error: null | IObj;
  low_battery: null | IObj;
  motor_driver_fault: null | IObj;
  motor_driver_return_timeout: null | IObj;
  network: null | IObj;
  over_current: null | IObj;
  over_drive_100cm: null | IObj;
  over_voltage: null | IObj;
  path: null | IObj;
  path_flow_miss: null | IObj;
  path_matcing_error_node: null | IObj;
  path_plan_request_timeout: null | IObj;
  sleep_long: null | IObj;
  under_voltage: null | IObj;
};

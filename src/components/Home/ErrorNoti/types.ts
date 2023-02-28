export type IErrors = {
  created_at: string;
  error_id: string;
  error_msg: string;
  format_date: string;
  k_map_name: string;
  map_id: string;
  risk_degree: string;
  robot_id: string;
};

export type IError = {
  created_at: string;
  error_id: string;
  error_msg: string;
  format_date: string;
  k_map_name: string;
  map_id: string;
  risk_degree: string;
  robot_id: string;
};

export type IDates = {
  start_date: string;
  end_date: string;
};

export type IErrorsResponse = {
  error_notice: IErrors[] | ((currVal: IErrors[]) => IErrors[]);
};

export type Iasd = {
  error_notice: IErrors[];
};

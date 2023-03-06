export type IServing = {
  1: IServingByDate;
  2: IServingByDate;
  3: IServingByDate;
  4: IServingByDate;
  901: IServingByDate;
  908: IServingByDate;
  909: IServingByDate;
  910: IServingByDate;
  914: IServingByDate;
  all: IServingByDate;
};

export type IServingByDate = {
  day: IStatistics;
  week: IStatistics;
  month: IStatistics;
};

export type IAllErrorStatus = {
  all: {
    map_name: string;
    critical: number;
    major: number;
    minor: number;
  };
  detail: {
    map_id: string;
    k_map_name: string;
    risk_degree: string;
  }[];
};

export type IErrorStatus = {
  map_name: string;
  critical: number;
  major: number;
  minor: number;
};

export type IAllErrors = {
  error_notice: IErrorNotice[] | ((currVal: IErrorNotice[]) => IErrorNotice[]);
};

export type IMap = {
  map_id: string;
  map_name: string;
  store_lat: string;
  store_lng: string;
};

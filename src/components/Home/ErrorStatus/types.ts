export type IStatus = {
  critical: number;
  major: number;
  minor: number;
  map_name: number;
};

export type IStatusResponse = {
  all: IStatus;
};

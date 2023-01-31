export type serving = {
  avg_serving_time: string;
  avg_serving_time_before: string;
  created_at: string;
  day_type: string;
  map_id: string;
  map_name: string;
  move_distance: string;
  move_distance_before: string;
  performance: string;
  performance_before: string;
  serving_count: string;
  serving_count_before: string;
};

export type IServing = {
  day: serving;
  week: serving;
  month: serving;
};

export type IServingResponse = {
  all: IServing;
  // data: IServing;
};

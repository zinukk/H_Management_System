const API = {
  getServing: '/api/monitoring-system/statistic',
  getStores: '/api/monitoring-system/store',
  getErrorStatus: '/api/monitoring-system/risk_count',
  getAllErrors: '/api/monitoring-system/error-notice/all',
  postDates: '/api/monitoring-system/error-notice/by-time',
  getRobots: '/api/monitoring-system/robot?state=',
  getRobotsDetail: '/api/monitoring-system/robot/map_id',
  getDefaultErrorLists: '/api/monitoring-system/error-statistic',
};

export default API;

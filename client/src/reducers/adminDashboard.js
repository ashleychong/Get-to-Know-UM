import { ADMIN_START_LOADING, ADMIN_END_LOADING } from "../constants/actionTypes";

const adminDashboardReducer = (
  state = { dashboardLoading: false },
  action
) => {
  switch (action.type) {
    case ADMIN_START_LOADING:
      return { ...state, dashboardLoading: true };
    case ADMIN_END_LOADING:
      return { ...state, dashboardLoading: false };
    
    default:
      return state;
  }
};

export default adminDashboardReducer;

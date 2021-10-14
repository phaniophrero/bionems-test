import {
  ANALYTIC_LIST_REQUEST,
  ANALYTIC_LIST_SUCCESS,
  ANALYTIC_LIST_FAIL,
} from "../constants/analyticConstants";

export const analyticListReducer = (state = { analytics: [] }, action) => {
  switch (action.type) {
    case ANALYTIC_LIST_REQUEST:
      return { loading: true, analytics: [] };

    case ANALYTIC_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case ANALYTIC_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

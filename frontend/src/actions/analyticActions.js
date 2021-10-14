import axios from "axios";
import {
  ANALYTIC_LIST_REQUEST,
  ANALYTIC_LIST_SUCCESS,
  ANALYTIC_LIST_FAIL,
} from "../constants/analyticConstants";

export const listAnalytics = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ANALYTIC_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/bionems-admin/analyticlist`, config);

    dispatch({
      type: ANALYTIC_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ANALYTIC_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

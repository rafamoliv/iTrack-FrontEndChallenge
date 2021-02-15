import api from "~/services/api";
import { ActionCreators } from "../Reducers/positionListReducer";

export const GetPositionList = (item) => async (dispatch) => {
  try {
    dispatch(ActionCreators.positionListLoading());

    const { data } = await api.get(`recruitmentpositionapi/vehicles/${item}/positions`);

    dispatch(ActionCreators.positionListSuccess(data));
  } catch (error) {
    dispatch(ActionCreators.positionListFail());
  }
};

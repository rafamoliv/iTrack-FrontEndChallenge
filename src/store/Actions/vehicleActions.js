import api from "~/services/api";
import { ActionCreators } from "../Reducers/vehicleListReducer";

export const GetVehicleList = async (dispatch) => {
  try {
    dispatch(ActionCreators.vehicleListLoading());

    const { data } = await api.get(`recruitmentpositionapi/vehicles`);

    dispatch(ActionCreators.vehicleListSuccess(data));
  } catch (error) {
    dispatch(ActionCreators.vehicleListFail());
  }
};

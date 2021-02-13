import api from "~/services/api";

export const GetVehicleList = async (dispatch) => {
  try {
    dispatch({
      type: "VEHICLE_LIST_LOADING",
    });

    const response = await api.get(`recruitmentpositionapi/vehicles`);

    dispatch({
      type: "VEHICLE_LIST_SUCCESS",
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: "VEHICLE_LIST_FAIL",
    });
  }
};

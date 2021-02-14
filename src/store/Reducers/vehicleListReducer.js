const initialState = {
  vehicles: [],
  loading: false,
  errorMsg: "",
};

export const ActionTypes = {
  VEHICLE_LIST_FAIL: "VEHICLE_LIST_FAIL",
  VEHICLE_LIST_LOADING: "VEHICLE_LIST_LOADING",
  VEHICLE_LIST_SUCCESS: "VEHICLE_LIST_SUCCESS",
};

export const ActionCreators = {
  vehicleListFail: (payload) => ({ type: ActionTypes.VEHICLE_LIST_FAIL, payload }),
  vehicleListLoading: (payload) => ({ type: ActionTypes.VEHICLE_LIST_LOADING, payload }),
  vehicleListSuccess: (payload) => ({ type: ActionTypes.VEHICLE_LIST_SUCCESS, payload }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.VEHICLE_LIST_LOADING:
      return { ...state, loading: true, errorMsg: "" };

    case ActionTypes.VEHICLE_LIST_FAIL:
      return { ...state, loading: true, errorMsg: "Poxa, seu carro não foi encontrado." };

    case ActionTypes.VEHICLE_LIST_SUCCESS:
      return { ...state, vehicles: [...action.payload] };

    default:
      return state;
  }
};

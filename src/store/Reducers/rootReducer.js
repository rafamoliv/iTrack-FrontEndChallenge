import { combineReducers } from "redux";
import VehicleListReducer from "./vehicleListReducer";

const RootReducer = combineReducers({
  VehicleList: VehicleListReducer,
});

export default RootReducer;

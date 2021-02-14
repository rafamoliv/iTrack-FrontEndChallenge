import api from "~/services/api";
import { ActionCreators } from "../Reducers/positionListReducer";
import { useRoute } from "@react-navigation/native";

export const GetPositionList = async (dispatch) => {
  const { id } = useRoute().params;

  try {
    dispatch(ActionCreators.positionListLoading());

    const { data } = await api.get(`recruitmentpositionapi/vehicles/${id.id}/positions`);

    dispatch(ActionCreators.positionListSuccess(data));
  } catch (error) {
    dispatch(ActionCreators.positionListFail());
  }
};

import Scheduling from "./actionTypes";

const initialState = {
  appointment: {
    id_people_client: null,
    id_people_professional: null,
    date: null,
    time: null,
  },
};

const schedulingReducer = (
  state = initialState,
  action: {
    payload: unknown;
    type: string;
  }
) => {
  switch (action.type) {
    case Scheduling.GET:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default schedulingReducer;

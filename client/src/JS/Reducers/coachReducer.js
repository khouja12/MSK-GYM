import { FAIL_COACH, GET_COACH, GET_COACHS, LOAD_COACH } from "../ActionsTypes/CoachTypes";

const InitialState = {
  coachsList: [],
  selectedCoach: {},
  fail: null,
  loading: false,
};

 const coachReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_COACH:
      return { ...state, fail : null , loading: true };
    case GET_COACHS:
      return { ...state, fail : null , loading: false, coachsList: payload.coachsList};
      case GET_COACH : 
      return {...state , fail : null , loading : false , selectedCoach : payload.coach}
      case FAIL_COACH : 
      return {...state , fail : {payload} ,loading : false}
    default:
      return state;
  }
};


export default coachReducer;
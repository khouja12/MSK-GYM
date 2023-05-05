import {
  CURRENT_MEMBER,
  FAIL_MEMBER,
  GET_MEMBER,
  GET_MEMBERS,
  LOAD_MEMBER,
  LOGIN_MEMBER,
  LOGOUT_MEMBER,
  REGISTER_MEMBER,
} from "../ActionsTypes/MemberTypes";

const InitialState = {
  membersList: [],
  selectedMember: {},
  currentMember: {},
  fail: null,
  isAuth: false,
  loading: false,
};

const memberReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOAD_MEMBER:
      return { ...state, fail: null, loading: true };
    case GET_MEMBERS:
      return {
        ...state,
        fail: null,
        loading: false,
        membersList: payload.listMembers,
      };
    case GET_MEMBER:
      return {
        ...state,
        fail: null,
        loading: false,
        selectedMember: payload.member,
      };
    case FAIL_MEMBER:
      return { ...state, fail: { payload }, loading: false };
    case REGISTER_MEMBER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        fail: null,
        loading: false,
        currentMember: payload.newMember,
      };

    case LOGIN_MEMBER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        fail: null,
        loading: false,
        currentMember: payload.Member,
        isAuth: true,
      };
    case CURRENT_MEMBER:
      return {
        ...state,
        fail: null,
        loading: false,
        currentMember: payload.currentMember,
        isAuth: true,
      };
    case LOGOUT_MEMBER:
      localStorage.removeItem("token");
      return {
        membersList: [],
        selectedMember: {},
        currentMember: {},
        fail: null,
        isAuth: false,
        loading: false,
      };

    case FAIL_MEMBER:
      return { ...state, loading: false, fail: payload };
    default:
      return state;
  }
};

export default memberReducer;

import { Axioss } from "../instanse/GymServer";
import {
  FAIL_COACH,
  GET_COACH,
  LOAD_COACH,
  GET_COACHS,
} from "../ActionsTypes/CoachTypes";

export const getCoachs = () => async (dispatch) => {
  dispatch({ type: LOAD_COACH });
  try {
    let resault = await Axioss.get("/api/coach/all/coach");
    dispatch({ type: GET_COACHS, payload: resault.data });
  } catch (error) {
    dispatch({ type: FAIL_COACH, payload: error.response });
  }
};

export const addC = (newCoach) => async (dispatch) => {
  dispatch({ type: LOAD_COACH });
  try {
    let resault = await Axioss.post("/api/coach/add", newCoach);
    dispatch(getCoachs());
  } catch (error) {
    dispatch({ type: FAIL_COACH, payload: error.response });
  }
};

export const deleteCoach = (id) => async (dispatch) => {
  dispatch({ type: LOAD_COACH });
  try {
    let resault = await Axioss.delete(`/api/coach/${id}`);
    dispatch(getCoachs());
  } catch (error) {
    dispatch({ type: FAIL_COACH, payload: error.response });
  }
};

export const editCoach =
  (id, newCoach, handleClose) => async (dispatch) => {
    dispatch({ type: LOAD_COACH });
    try {
      await Axioss.put(`/api/coach/${id}`, newCoach);
      dispatch(getCoachs());
      handleClose()
    } catch (error) {
      dispatch({ type: FAIL_COACH, payload: error.response });
    }
  };

export const getCoach = (id) => async (dispatch) => {
  dispatch({ type: LOAD_COACH });
  try {
    let resault = await Axioss.get(`/api/coach/${id}`);
    dispatch({ type: GET_COACH, payload: resault.data });
  } catch (error) {
    dispatch({ type: FAIL_COACH, payload: error.response });
  }
};

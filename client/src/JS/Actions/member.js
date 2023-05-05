
import { CURRENT_MEMBER, FAIL_MEMBER, GET_MEMBERS, LOAD_MEMBER, LOGIN_MEMBER, LOGOUT_MEMBER, REGISTER_MEMBER } from "../ActionsTypes/MemberTypes"
import { Axioss } from "../instanse/GymServer"
import axios from "axios"

export const getMembers = () => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
        let resault = await Axioss.get("/api/member/all/member")
        dispatch({type : GET_MEMBERS , payload : resault.data})
        
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}  

export const addMember = (newMember,navigate) => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
        let resault = await Axioss.post("/api/member/register" , newMember) 
        dispatch({type:REGISTER_MEMBER , payload : resault.data })

        navigate('/Member')
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}
export const loginMember = (Member,navigate) => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
        let resault = await Axioss.post("/api/member/login" , Member) 
        dispatch({type:LOGIN_MEMBER , payload : resault.data })

        navigate('/Member')
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_MEMBER });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/member/current", config);
    dispatch({ type: CURRENT_MEMBER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_MEMBER, payload: error.response.data.errors });
  }
};


export const logout = ()=> async (dispatch)=>{
    dispatch ({type:LOGOUT_MEMBER})
}




export const deleteMember = (id) => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
        let resault = await Axioss.delete(`/api/member/${id}`)
        dispatch(getMember())
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}

export const editMember = (id , newMember) => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
     await Axioss.put(`/api/member/${id}` , newMember)
        dispatch(getMembers())
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}

export const getMember = (id) => async (dispatch) => {
    dispatch({type : LOAD_MEMBER})
    try {
        let resault = await Axioss.get(`/api/member/${id}`)
        dispatch({type : GET_MEMBERS , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_MEMBER , payload : error.response})
    }
}  
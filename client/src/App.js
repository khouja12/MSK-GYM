import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPages from "./pages/adminpages/AdminPages";
import LandingPages from "./pages/landingPages/LandingPages";
import SignIn from "./pages/signinpages/SignIn";
import PlanningPages from "./pages/planningPages/PlanningPages";
import TarifPages from "./pages/tarifPage/TarifPages";
import MemberAdmin from "./pages/memberAdmin/MemberAdmin";
import Coach from "./pages/coach/Coach";
import Member from "./pages/member/Member";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/member";
import memberReducer from './JS/Reducers/memberReducer'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);
const isAuth = useSelector(state =>state.memberReducer.isAuth)
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element=<LandingPages /> />
       <Route path="/admin" element= {<AdminPages />} /> 
        <Route path="/signin" element=<SignIn /> />
        <Route path="/PlanningPages" element=<PlanningPages /> />
        <Route path="/TarifPages" element=<TarifPages /> />
        <Route path="/MemberAdmin" element=<MemberAdmin /> />
        <Route path="/Coach" element=<Coach /> />
        <Route path="/Member" element=<Member /> />
      </Routes>
    </div>
  );
}

export default App;

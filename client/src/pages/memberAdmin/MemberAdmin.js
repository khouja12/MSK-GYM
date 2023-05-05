import React, { useState , useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./MemberAdmin.css"
import { useDispatch , useSelector } from "react-redux";
import { getMembers } from "../../JS/Actions/member";





const MemberAdmin = () => {

  
const dispatch = useDispatch()
const membersList = useSelector((state) => state.memberReducer.membersList )

 useEffect(() => {
  
dispatch(getMembers())
 
}, [dispatch])

console.log(membersList)


    
  return (
    <div>
    <NavBar/>
      <h2 style={{color:"white" , marginLeft:'15%'}}>Members</h2>
      {membersList.length > 0 && (
        <table>
          <thead>
            <tr >
              <th style={{color:'black'}}>Name</th>
              <th style={{color:'black'}}>Email</th>
              <th style={{color:'black'}}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {membersList.map((member) => (
              <tr key={member.id}>
              
                <td>{`${member.name} `}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MemberAdmin;

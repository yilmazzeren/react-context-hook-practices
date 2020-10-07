import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Users() {

  const data = useContext(UserContext);
 
  
  return (
    <div>
      {data.users.map((dat) => (
        <div style={{background:dat.color}} key={dat.id}>
          <h5>Name : {dat.name} </h5>
          <p>email : {dat.email} </p>
          <p>age : {dat.age}</p>
          <input onChange={e=> data.changeColor(dat.id,e.target.value)}  type="text" />
        </div>
      ))}
    </div>
  );
}

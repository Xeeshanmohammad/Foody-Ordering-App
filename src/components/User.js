import React, { useState } from "react";

function User(props) {
    const [count, setCount] = useState(0)

  return (
    <div>
      <h1>User Details</h1>
      <h3>Name : {props.name}</h3>
      <h3>Location : {props.location}</h3>
      <h3>Contact With Gmail : {props.email}</h3>
      <h3>Count : {count}</h3>
      <button onClick={()=>{
        setCount(count +1)
      }}>click to increase me</button>

    </div>
  );
}

export default User;

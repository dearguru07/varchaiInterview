import { useState } from "react";
import React from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  //   const Result = () => {
  //     return (
  //       <div>
  //         <h5>{name}</h5>
  //         <h5>{mail}</h5>
  //         <h5>{msg}</h5>
  //       </div>
  //     );
  //   };

  const handleName = (name) => {
    setName((prev) => (prev, name));
  };
  const handleMail = (mail) => {
    setMail((prev) => (prev, mail));
  };
  const handleMsg = (msg) => {
    setMsg((prev) => (prev, msg));
  };
  const GenarateAlert = () => {
    alert([name, mail, msg]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => handleName(e.target.value)}
      />
      <input
        type="mail"
        placeholder="Enter email"
        value={mail}
        onChange={(e) => handleMail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter message"
        value={msg}
        onChange={(e) => handleMsg(e.target.value)}
      />
      <button onClick={() => GenarateAlert()}>Submit</button>
    </div>
  );
};
export default Form;

import React, { useState } from "react";

export default function LogIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSubmit = () => {
    if (name != "" && password != "") {
      setName(name + "222");
      setPassword(password + "333");
    } else {
      window.alert("Please enter both username and password!");
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <label>
        <b>User Name: {name}</b>
      </label>
      <input type="text" value={name} onChange={onChangeUserName} />
      <br />
      <br />
      <label>
        <b>Password: {password}</b>
      </label>
      <input type="Password" value={password} onChange={onChangePassword} />
      <br />
      <br />
      <button onClick={onClickSubmit}>
        <b>Submit</b>
      </button>
    </div>
  );
}

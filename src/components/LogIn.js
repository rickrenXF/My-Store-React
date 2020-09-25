import React from "react";

export default function LogIn() {
  return (
    <div>
      <h2>Log in</h2>
      <label>
        <b>User Name: </b>
      </label>
      <input type="text" />
      <br />
      <br />
      <label>
        <b>Password: </b>
      </label>
      <input type="Password" />
      <br />
      <br />
      <button>
        <b>Submit</b>
      </button>
    </div>
  );
}

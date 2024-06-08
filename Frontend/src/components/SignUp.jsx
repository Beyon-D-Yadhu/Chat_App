import React, { useState } from "react";

function SignUp() {
  const [usName, setusName] = useState(null);
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);

    function signUP(){
        axios.post
    }

  return (
    <>
      <div className="mt-5 w-full h-2/3 bg-slate-100 p-3">
        <h1>Sign Up</h1>
        <label htmlFor="name">user name:</label>
        <br />
        <input
          type="text"
          className="mb-3"
          placeholder="user name"
          name=""
          value={usName}
          id="name"
          onChange={(e) => {
            setusName(e.target.value);
          }}
        />
        <br />

        <label htmlFor="email">email:</label>
        <br />
        <input
          type="text"
          className="mb-3"
          name=""
          value={email}
          placeholder="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label htmlFor="password">password:</label>
        <br />
        <input
          type="password"
          className="mb-3"
          name=""
          placeholder="password"
          value={passwd}
          id="password"
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
        />
        <br />

        <div className="w-full flex justify-center">
          <button className="bg-green-300 hover:bg-sky-700 rounded px-2 mt-5 py-3" onClick={signUP}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;

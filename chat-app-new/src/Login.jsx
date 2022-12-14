import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="login_container">
        <img
          src="https://i.postimg.cc/nhhCVp5L/pngtree-initial-p-chat-logo-design-vector-illustration-image-310613-removebg-preview.png"
          alt="IMAGE"
        />
        <div className="login_text">
          <h1>Sign in to Chat-App</h1>
          <Button onClick={signIn}>Sign in With Google</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;

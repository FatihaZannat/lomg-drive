import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./../firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { Button } from "@material-ui/core";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        console.log(result.user);
        const signedInUser = { name: displayName, email };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFaceBookSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const { displayName, email } = result.user;

        const signedInUser = { name: displayName, email };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGoogleSignIn}
      >
        Login Using Google
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFaceBookSignIn}
      >
        Login Using Facebook
      </Button>
    </div>
  );
};

export default Login;

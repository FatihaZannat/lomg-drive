import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from './../../App';
import firebaseConfig from './../FirebaseConfig/FirebaseConfig';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/category-details/:id"} };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn : false,
        email : '',
        password : ''
    })
    const handleBlur = (e) =>{
        let isFromValid = true; 
        if(e.target.name === 'email'){
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if(e.target.name === 'password'){
          const  isPasswordValid = e.target.value.length > 6;
          const  passwordHasNumber = /\d{1}/.test(e.target.value.test)
            isFromValid = isPasswordValid && passwordHasNumber
        }
        if(isFromValid){
            const newUserInfo = {...user}
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }
    const handleSubmit = (e) => {
        console.log( user.password )
        if(user.email && user.password){
            console.log('submit')
        }
        e.preventDefault();

    }
    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser)
                // console.log(signedInUser);
                history.replace(from);
            }).catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // var email = error.email;
                // var credential = error.credential;
                // console.log(errorCode, errorMessage, email, credential);
            });
    }

    // handle fb signin 
    const handlefbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth()
        .signInWithPopup(fbProvider)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 mx-auto mt-5">
                    <div className="card bg-info">
                        <div className="card-body">
                       <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input required onBlur={handleBlur} className="form-control" type="email" name="email"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input required onBlur={handleBlur} className="form-control" type="password" name="password" />
                                </div>

                                <input type="submit" className="btn-danger btn" value="Login"/>
                          </form>
                            <br />
                            <button onClick={handleGoogleSignIn} className="btn btn-danger w-100 mb-3">Sign With Google</button>
                            <button onClick={handlefbSignIn} className="btn btn-success w-100">Sign With Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
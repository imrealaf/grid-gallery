import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import config from "../constants/config";
import * as routes from "../constants/routes";
import * as authCodes from "../constants/authCodes";
import { auth } from "../firebase";
import Preloader from "../components/Preloader";

const Login: React.FC = () => {
  // Get history to navigate routes
  const history = useHistory();

  /* 
    States
  */
  // Note: these are defined any because they are undefined at the time of creation
  const [username, setUsername] = useState(null) as any;
  const [password, setPassword] = useState(null) as any;
  const [error, setError] = useState(null) as any;
  const [loading, setLoading] = useState(false) as any;

  /* 
    Element refs 
  */
  // Note: defined as any because the ref is null on creation
  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  /* 
    Hook for when fields change
  */
  useEffect(
    () => {
      // If all conditions are met, clear the error
      if (error && username && password) {
        setError(null);
      }
    },
    [username, password]
  );

  /* 
    Hook for when there is an error
  */
  useEffect(
    () => {
      if (error) {
        switch (error.code) {
          // Focus on username
          default:
          case authCodes.ERROR_USERNAME:
          case authCodes.ERROR_EMPTY:
            usernameRef.current.focus();
            break;

          // Focus on password
          case authCodes.ERROR_PASSWORD:
            passwordRef.current.focus();
            break;
        }
      }
    },
    [error]
  );

  /* 
    On submit handler
  */
  const onSubmitHandler = (e: React.FormEvent) => {
    // Prevent form from actually submitting
    e.preventDefault();

    // If both fields populated ..
    if (username && password) {
      setLoading(true);

      // Simulate a little loading delay, before db call ..
      setTimeout(() => {
        auth
          .doSignInWithEmailAndPassword(username, password)
          .then(() => {
            // Login was successfull
            setLoading(false);
            history.push(routes.HOME);
          })
          .catch(error => {
            setLoading(false);
            setError(error);
          });
      }, config.login.delayTime);

      // Missing data, set error ..
    } else {
      setError({
        code: authCodes.ERROR_EMPTY,
        message: "Please fill in the required fields",
      });
    }
  };

  /* 
    Render 
  */
  return (
    <div className={`card ${loading ? "is-loading" : ""}`}>
      <div className="card-body">
        <form
          className={error ? "has-error" : ""}
          onSubmit={onSubmitHandler}
          noValidate
        >
          <h3>Login</h3>

          {/* Error text */}
          {error ? (
            <p id="error" className="text-danger">
              <small>
                {error.code !== authCodes.ERROR_EMPTY ? (
                  <strong>Uh oh!</strong>
                ) : null}
                <br />
                {error.message}
              </small>
            </p>
          ) : null}

          {/* Username field */}
          <div className="form-group">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              className="form-control"
              type="email"
              name="username"
              placeholder="Username"
              ref={usernameRef}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLFormElement;
                setUsername(target.value);
              }}
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLFormElement;
                setPassword(target.value);
              }}
            />
          </div>

          {/* Submit button */}
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div className="card-loading-body">
        <Preloader />
        <p>{config.login.loadingText}</p>
      </div>
    </div>
  );
};

export default Login;

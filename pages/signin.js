/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Context } from '../store/GlobalState';
import { postData } from '../services/fetchData';
import Cookie from 'json-cookie';

function SignIn() {
  const initialState = { userName: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { userName, password } = userData;

  const [state, dispatch] = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('authentication/login', userData);

    if (res.error) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    }

    dispatch({ type: 'NOTIFY', payload: { success: true } });
    dispatch({
      type: 'AUTHENTICATE',
      payload: { token: res.access_token, userName: res.userName },
    });

    Cookie.set('access_token', res.access_token, {
      path: 'api/authentication/accessToken',
    });

    localStorage.setItem('token', true);
  };
  return (
    <>
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
      </div>
      <form
        className="mx-auto my-4"
        style={{ maxWidth: '500px' }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p>
          You dont have an account?
          <Link href="/register">
            <a style={{ color: 'blue' }}> Register</a>
          </Link>
        </p>
      </form>
    </>
  );
}

export default SignIn;

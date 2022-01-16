/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DataContext from '../store/GlobalContext';
import { postData } from '../services/fetchData';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function SignIn() {
  const initialState = { userName: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { userName, password } = userData;

  const [state, dispatch] = useContext(DataContext);
  const { authentication } = state;
  const router = useRouter();

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

    Cookies.set('access_token', res.access_token, {
      path: 'api/authentication/accessToken',
    });

    localStorage.setItem('token', true);
  };

  useEffect(() => {
    if (Object.keys(authentication).length !== 0) router.push('/');
  }, [authentication]);
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

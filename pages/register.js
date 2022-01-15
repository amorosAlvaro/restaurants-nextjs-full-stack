import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import validation from '../helpers/validation';
import { Context } from '../store/GlobalState';
import { postData } from '../services/fetchData';

function Register() {
  const initialState = { userName: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { userName, password, cf_password } = userData;

  const [state, dispatch] = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: 'NOTIFY', payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validation(userName, password, cf_password);
    if (errorMessage) {
      return dispatch({
        type: 'NOTIFY',
        payload: { error: errorMessage },
      });
    }
    dispatch({ type: 'NOTIFY', payload: { loading: true } });

    const res = await postData('authentication/register', userData);
  };

  return (
    <>
      <div>
        <Head>
          <title>Register In</title>
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
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="cf_password"
            name="cf_password"
            value={cf_password}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <p>
          You already have an account?
          <Link href="/signin">
            <a style={{ color: 'blue' }}> Login</a>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;

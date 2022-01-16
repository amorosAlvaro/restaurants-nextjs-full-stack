import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import validation from '../helpers/validation';
import { Context } from '../store/GlobalState';
import { postData } from '../services/fetchData';

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

    const res = await postData('authentication/register', userData);

    if (res.error) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    }

    if (res.message) {
      dispatch({ type: 'NOTIFY', payload: { success: true } });
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>Sign In</title>
        </Head>
      </div>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User name</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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

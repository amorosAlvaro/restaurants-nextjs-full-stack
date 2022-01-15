import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Register() {
  return (
    <>
      <div>
        <Head>
          <title>Register In</title>
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

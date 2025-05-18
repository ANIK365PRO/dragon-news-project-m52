import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h2 className="text-primary text-2xl text-center">
            Login your account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>

              <p className="text-center font-semibold mt-5">
                Don't have an account? Please{' '}
                <Link to="/auth/register" className="underline text-secondary">
                  {' '}
                  Register
                </Link>{' '}
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

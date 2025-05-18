import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const {loginUser}=use(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log('trying to login ...', { email, password })

    loginUser(email, password)
      .then(result => {
        // Signed in
        const user = result.user;
        console.log(user)
        alert('you login successful')
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
      });
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h2 className="text-primary text-2xl text-center">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">

              {/* email  */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />

              {/* password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Login</button>

              <p className="text-center font-semibold mt-5">
                Don't have an account? Please{' '}
                <Link to="/auth/register" className="underline text-secondary">
                  {' '}
                  Register
                </Link>{' '}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

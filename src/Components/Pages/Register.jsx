import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = (e.target);
    console.log(form)

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log([name, photo,email,password])

    createUser(email, password)
    .then((result) => {
      // Signed up 
      const user = result.user;

      setUser(user);
      console.log(user);
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
     
    
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h2 className="text-primary text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
              />

              {/* photo url  */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Your Photo URL"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <p className="text-center font-semibold mt-5">
                Already have an account? Please{' '}
                <Link to="/auth/login" className="underline text-secondary">
                  {' '}
                  Login
                </Link>{' '}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

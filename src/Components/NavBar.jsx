import React, { use }  from 'react';
import { Link, NavLink } from 'react-router';
import userImage from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

  const { user } = use(AuthContext)
  
  console.log(user)
  return (
    <section className="flex justify-between items-center">
      <div className='font-bold text-primary'>
        {
          user && user.email
        }
      </div>

      <nav className="flex justify-center gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>

      <div className="flex gap-5">
        <img src={userImage} alt="userImage" />
        <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </section>
  );
};

export default NavBar;

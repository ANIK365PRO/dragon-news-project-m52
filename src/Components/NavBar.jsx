import React, { use }  from 'react';
import { Link, NavLink } from 'react-router';
import userImage from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

  const { user , logOut} = use(AuthContext)  
  // console.log(user)

  const handleLogOut = () => {
    // console.log('trying to logOut...')

    logOut()
      .then(() => {
        // Sign-out successful.

        alert('You logged out successful')
      })
      .catch(error => {
        // An error happened.
        console.log(error)
      });
  }
  return (
    <section className="flex justify-between items-center">
      <div className="font-bold text-primary">{user && user.email}</div>

      <nav className="flex justify-center gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>

      <div className="flex gap-5">
        <img src={userImage} alt="userImage" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}

        {/* {
          user ? "":""
        } */}
        {/* <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link> */}
      </div>
    </section>
  );
};

export default NavBar;

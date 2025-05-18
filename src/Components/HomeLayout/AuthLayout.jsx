import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto py-5 bg-base-200">
      <NavBar></NavBar>

      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;

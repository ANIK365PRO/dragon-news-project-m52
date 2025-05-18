import React from 'react';
import { Outlet } from 'react-router';
import './Root.css';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const Root = () => {
  return (
    <div>
      <header className="container mx-auto">
        <Header></Header>

        <section>
          <LatestNews></LatestNews>
        </section>

        <nav>
          <NavBar></NavBar>
        </nav>
      </header>

      <main className="container mx-auto py-3  grid grid-cols-12 gap-4 text-center mt-2">
        {/* Left aside  */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

        {/* Right Aside  */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;

import React from 'react';
import Header from './Header';
import HomeMain from './HomeMain';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <hr className="hide"></hr>
      <main id="kakaoContent">
        <article id="mArticle">
          {/* <HomeMain /> */}
          {/* <Brand /> */}
          <Outlet />
        </article>
      </main>
    </>
  )
}

export default Home;
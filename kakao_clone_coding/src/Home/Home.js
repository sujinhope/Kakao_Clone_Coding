import React from 'react';
import Header from './Header';
import HomeMain from './HomeMain';

const Home = () => {

  return (
    <div id="_body" _ngcontent-keh-c87 className="bg_gray gift_new ios"> 
      <div id="kakaoWrap" _ngcontent-keh-c87 className="gnb_type1 wrap_home">
        <Header />
        <hr className="hide"></hr>
        <HomeMain />
      </div>
    </div>
  )
}

export default Home;
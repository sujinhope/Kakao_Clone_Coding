import React from 'react';
import Header from './Header';
import HomeMain from './HomeMain';

const Home = () => {

  return (
    <app-root _nghost-keh-c89>
    <router-outlet _ngcontent-keh-c89=""></router-outlet>
    <app-view-wrapper _nghost-keh-c87>
    <div id="_body" _ngcontent-keh-c87 className="bg_gray gift_new ios"> 
      <div id="kakaoWrap" _ngcontent-keh-c87 className="gnb_type1 wrap_home">
        <Header />
        <hr className="hide"></hr>
        <main id="kakaoContent">
          <article id="mArticle">
            <HomeMain />
          </article>
        </main>
      </div>
    </div>
    </app-view-wrapper>
    </app-root>
  )
}

export default Home;
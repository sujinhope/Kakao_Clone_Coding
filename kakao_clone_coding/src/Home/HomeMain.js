import React from 'react';
import GiftRanking from './GiftRanking';
import GiftBnr from './GiftBnr';
import AIKeyword from './AIKeyword';
import HomeTheme from './HomeTheme';

const HomeMain = () => {
  return (
    <>
        <h2 className="screen_out">홈</h2>
        {/** Home_Profile */}
        <div className="area_home_profile">
          <div className="wrap_home_profile">
            <h3 className="screen_out">친구 선택</h3>
            <div className="inner_home_profile">
              <div className="cell_home_profile">
                <strong className="tit_home_profile">
                  <span>누구를 위한 선물인가요?</span>
                </strong>
                <a href="" className="btn_profile">
                  <div className="mask_outline">
                    <div className="thumb_outline">

                    </div>
                  </div>
                  <span className="ico_main ico_plus">친구 선택 바로가기</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/** Home_Theme */}
        <HomeTheme />
        <AIKeyword />
        <GiftBnr />
        <GiftRanking />
    </>
  )
}

export default HomeMain;
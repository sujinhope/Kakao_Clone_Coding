import React from 'react';

const BrandAd = ( props ) => {

  console.log(props);

  return (
    <>
      {/* 광고 */}
      <div>
        <div className="brandv_ad">
          <gl-link class="" data-tiara-copy="도미노피자_이안">
            <a _ngcontent-mbd-c55="" className="link_ad" href="">
            {/* <a _ngcontent-mbd-c55="" className="link_ad" href="/page/9046"> */}
              <img className="img_thumb" src="https://t1.daumcdn.net/gift/brand/displayBanner/20220210_KCHBE.png?w=600&amp;h=167&amp;convert=crop" alt="2/14주차_도미노피자_이안" />
            </a>
          </gl-link>
        </div>
        <div className="brandv_brandnews">
          <h3 className="tit_brandnews">브랜드소식</h3>
          <ul className="list_brandnews">
            <li key="1">
              <gl-link data-tiara-type="promotionId" _nghost-mbd-c55="" 
              data-tiara-copy="뿌링클,맛초킹,골드킹 4천원 할인 😍" 
              data-tiara-id="7110">
                <a _ngcontent-mbd-c55="" className="link_brandnews" href="/page/9050">
                  <span className="brandnew_logo">
                    <img className="img_thumb" src="https://st.kakaocdn.net/product/gift/gift_brand/20210705111917_309194a3c13b4f1e8866a774ea9cb823.jpg?w=100&amp;h=100&amp;convert=resize" alt="뿌링클,맛초킹,골드킹 4천원 할인 😍" />
                  </span>뿌링클,맛초킹,골드킹 4천원 할인 😍
                </a>
              </gl-link>
            </li>
            <li key="2">
              <gl-link data-tiara-type="promotionId" _nghost-mbd-c55="" 
              data-tiara-copy="따뜻한 마음을 전하는 이디야커피 선물☕️" 
              data-tiara-id="7110">
                <a _ngcontent-mbd-c55="" className="link_brandnews" href="/page/9050">
                  <span className="brandnew_logo">
                    <img className="img_thumb" src="https://st.kakaocdn.net/product/gift/gift_brand/20200331035653_68c4fa7b62224fc6820bb254dab23687?w=100&amp;h=100&amp;convert=resize" alt="" />
                  </span>따뜻한 마음을 전하는 이디야커피 선물☕️
                </a>
              </gl-link>
            </li>
            <li key="3">
              <gl-link data-tiara-type="promotionId" _nghost-mbd-c55="" 
              data-tiara-copy="달콤한 선물엔 투썸플레이스🎁" 
              data-tiara-id="7110">
                <a _ngcontent-mbd-c55="" className="link_brandnews" href="/page/9050">
                  <span className="brandnew_logo">
                    <img className="img_thumb" src="https://st.kakaocdn.net/product/gift/gift_brand/20200331035700_e1074baea8b343b98d783201f88c8884?w=100&amp;h=100&amp;convert=resize" alt="달콤한 선물엔 투썸플레이스🎁" />
                  </span>달콤한 선물엔 투썸플레이스🎁
                </a>
              </gl-link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BrandAd;
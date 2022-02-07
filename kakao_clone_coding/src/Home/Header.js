import React from 'react';

const Header = () => {
    return (
        <header id="kakaoHead" _ngcontent-keh-c87>
            <div className="khead">
                <div className="wrap_tit">
                    <h1 className="tit_gift">
                        <a className="link_gift" href="/home">
                            <span className="tit_gift2">선물하기</span>
                        </a>
                    </h1>
                    <h1 className="back_gift">
                        <a role="button" href="#none" className="link_back" data-tiara-layer="navigation btn_back">
                            <span className="ico_gift3 ico_back">이전 페이지로</span>
                        </a>
                    </h1>
                    <a className="link_cart">
                        <span className="ico_gift3 ico_cart">선물상자</span>
                    </a>
                    <div className="wrap_util">
                        <a className="link_search" href="/search">
                            <span className="ico_gift3 ico_search">검색</span>
                        </a>
                    </div>
                </div>
                <div className="wrap_gnv" id="Gnb">
                    <h2 className="screen_out">선물하기 메인메뉴</h2>
                    <ul className="gnb_gift">
                        <li className="home on"> {/* on - 활성화 */}
                            <a href="" className="link_menu">
                                <span className="txt_menu">홈</span>
                            </a>
                        </li>
                        <li className="food">
                            <a href="" className="link_menu">
                                <span className="txt_menu">미식선물</span>
                            </a>
                        </li>
                        <li className="season">
                            <a href="" className="link_menu">
                                <span className="txt_menu">
                                    발렌타인
                                    <span className="ico_dot"></span>
                                </span>
                            </a>
                        </li>
                        <li className="best">
                            <a href="" className="link_menu">
                                <span className="txt_menu">베스트</span>
                            </a>
                        </li>
                        <li className="brand">
                            <a href="" className="link_menu">
                                <span className="txt_menu">브랜드</span>
                            </a>
                        </li>
                        <li className="giftbox">
                            <a href="" className="link_menu">
                                <span className="txt_menu">선물함</span>
                            </a>
                        </li>
                        <li className="">
                            {/* last child - display: none */}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
import React from 'react';

const GiftBnrContent = () => {
  return (
    <div className="panel" style={{width: "390px"}}> {/* 390px -> window.width; */}
      <a className="link_bnr" href="">
        <img className="img_g" 
            src="https://mud-i0.kakaocdn.net/dn/PKHeK/bIcBkAKfRVI/u20xWNmnTkizduT1XgZsek/img.png?w=1005&h=199&convert=crop"
            alt=""/>
        <em className="ico_main ico_ad">광고</em>
      </a>
    </div>
  )
}

export default GiftBnrContent;
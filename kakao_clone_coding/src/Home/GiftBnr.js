import React from 'react';
import GiftBnrContent from './GiftBnrContent';

const GiftBnr = () => {
  return (
    <div _ngcontent-keh-c123="true" className="area_g area_gift_bnr">
      <div className="wrap_list_rail">
        <div className="list_rail">
          <ngx-flicking _ngcontent-keh-c119 className="flicking_viewport" 
            style={{display:"block", touchAction:"pan-y", userSelect:"none"}}>
            <div className="flicking_camera">
                {/* style={{transform: "translate(-3120px)"}}> */}
              <GiftBnrContent />
            </div>
          </ngx-flicking>
        </div>
        <span className="nav_rail">
          <span className="txt_g">
            <span className="screen_out">현재 배너</span>
            <strong>1</strong> {/** 현재 페이지(변수) */}
            /
            <span className="screen_out">전체 배너</span>
            10 {/** 전체 페이지 수(변수) */}
          </span>
        </span>
      </div>
    </div>
  )
}

export default GiftBnr;
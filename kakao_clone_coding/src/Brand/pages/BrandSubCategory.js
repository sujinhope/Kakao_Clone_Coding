import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { BrandList } from '../data/BrandCategoryKeyword';
import '../data/BrandHomeKeyword';
import { MainCategoryList } from '../data/BrandHomeKeyword';
import BrandAd from './BrandAd';

const BrandSubCategory = () => {

  const { cateId, subCateId } = useParams();

  const [ opencate, setOpencate ] = useState('');
  const [ category, setCategory ] = useState('140');

  const openSubCategory = (event) => {
    event.preventDefault();
    opencate === '' ? setOpencate('open_topcate') : setOpencate('');
  }

  useEffect(() => {
    setCategory(MainCategoryList.filter(e => {return e.id == cateId})[0])
  })

  return (
    <>
      <div _ngcontent-vuf-c141="" className="brandv_botcate">
        <div _ngcontent-vuf-c141="" className="inner_botcate">
        {/* <h2>SubCategory, {subCateId}</h2> */}
          <div className="listtype_botcate" data-tiara-layer="Mcate">
            <h3 className="tit_listtype"><span className="txt_listtype">베이커리/도넛/떡</span></h3>
            <div className="wrap_filter">
              <div className="box_filter">
                <em _ngcontent-pio-c132="" className="screen_out">상품정렬 선택</em>
                <a _ngcontent-pio-c132="" href="" className="link_filter">
                  <span _ngcontent-pio-c132="" className="ico_gift2">선택내용 : </span>
                  추천순
                </a>
                <div _ngcontent-mbd-c114="" className="sort_layer">
                  <em _ngcontent-mbd-c114="" className="screen_out">선택 옵션</em>
                  <ul _ngcontent-mbd-c114="" className="list_sort">
                    <li _ngcontent-mbd-c114="" className="on">
                      <a _ngcontent-mbd-c114="" href="" className="link_sort">추천순</a>
                      <a _ngcontent-mbd-c114="" href="" className="btn_info">
                        <span _ngcontent-mbd-c114="" className="ico_gift2">추천순 안내 레이어 보기</span>
                      </a>
                    </li>
                    <li _ngcontent-mbd-c114="">
                      <a _ngcontent-mbd-c114="" href="" className="link_sort">가나다순</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
          <div className="list_brands custom_mobile_carousel custom_mobile_list_brands ng-star-inserted" data-tiara-layer="Mcate">
            <cu-carousel class="custom_mobile_carousel ng-tns-c53-0 ng-star-inserted"
              style={{touchAction: "pan-y", userSelect: "none"
                  , WebkitUserDrag: "none", WebKitTapHighlightColor: "rgba(0, 0, 0, 0)"
                  , width: "390px", height: "360px"}}
              _ngcontent-mbd-c114
              _nghost-mbd-c53
              >
              <div className="viewport ng-tns-c53-0" _ngcontent-mbd-c53="">
                <div className="rail-wrapper ng-tns-c53-0" _ngcontent="">
                  <div className="rail ng-tns-c53-0 ng-trigger ng-trigger-rail"
                    style={{width: "1560px", height: "360px", transform: "translateX(0px)"}}>
                    <div className="inner_brand ng-star-inserted" 
                        style={{display: "inline-block", verticalAlign: "top"
                              , width: "390px", position: "absolute", left: "0px"}}>
                      
                      {/* 브랜드(ex - 투썸) */}
                      { BrandList.map(e => {
                          return (
                            <div className="wrap_brand ng-star-inserted" key={`${e.subCateId} ${e.brandId}`}>
                              <div>
                                <gl-link>
                                  <a className="link_item ng-star-inserted"
                                    href={"/brand/"+e.url}>
                                    <div _ngcontent-mbd-c114="" className="frame_brandlogo ng-star-inserted">
                                      <img _ngcontent-mbd-c114="" className="img_thumb" 
                                        src={e.imgSrc} />
                                    </div>
                                    <div _ngcontent-mbd-c114="" className="wrap_txt_botcate ng-star-inserted">
                                      <div _ngcontent-mbd-c114="" className="inner_txt_botcate">
                                        <span _ngcontent-mbd-c114="" className="txt_botcate">{e.keyword}</span>
                                      </div>
                                    </div>
                                  </a>
                                </gl-link>
                              </div>
                            </div>
                          );
                        })
                      }
                    
                    </div>
                  </div>
                </div>
              </div>

            </cu-carousel>
          </div>
        </div>
      </div>

      <BrandAd cateId={cateId} />
    </>
  );

}

export default BrandSubCategory;
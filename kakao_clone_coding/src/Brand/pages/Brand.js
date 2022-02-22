import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { BrandDetailList } from '../data/BrandDetailKeyword';
import { BrandList } from '../data/BrandCategoryKeyword';
import { ProductList } from '../data/BrandProductKeyword';
import '../BrandMain.scss';
import '../Brand.scss';
import '../../styles1b7d53e9ef54d4d78152.css';

const Brand = () => {

  const { brandId } = useParams();
  const [ brand, setBrand ] = useState('');

  useEffect(() => {
    // console.log('useEffect: ' + brandId);
    setBrand(BrandList.filter(e=> {return e.brandId == brandId})[0]);
  }, []);

  return (
    <>
      <gl-promotion className="ng-star-inserted">
        <h3 _ngcontent-bit-c73="" className="screen_out ng-star-inserted"> 선물하기 기획전 </h3>
        <div _ngcontent-bit-c73="" className="cont_builder ng-star-inserted">
          <gl-promotion-share>
            <div className="module_share" style={{top: "19px"}}>
              <Link to="" _ngcontent-bit-c65="" className="ico_module link_module_share">공유하기</Link>
            </div>
          </gl-promotion-share>
          <gl-text-banner class="module_wrapper ng-star-inserted">
          <div _ngcontent-bit-c66="" className="module_intro_brand ng-star-inserted">
            <span _ngcontent-bit-c66="" className="wrap_img">
              <img _ngcontent-bit-c66="" className="img_g" src={brand.imgSrc} alt="투썸플레이스" />
            </span>
            <strong _ngcontent-bit-c66="" className="tit_intro">{brand.keyword}</strong></div>
          </gl-text-banner>
          <gl-product-group class="module_wrapper">
            <div className="">
              <div className="module_wrapper">
                <div className="module_list module_list_type2">
                  <div className="module_title">

                    <div _ngcontent-ogy-c70="" className="wrap_filter">
                      <div _ngcontent-ogy-c70="" className="box_filter" data-tiara-layer="sorting">
                        <em _ngcontent-ogy-c70="" className="screen_out">상품정렬 선택</em>
                        <a _ngcontent-ogy-c70="" href="" data-tiara-layer="open" data-tiara-copy="정렬 옵션 열기" className="link_filter">
                          <span _ngcontent-ogy-c70="" className="ico_module ico_sort">선택내용 : </span>
                          MD 추천순
                        </a>
                        <div _ngcontent-ogy-c70="" className="sort_layer">
                          <em _ngcontent-ogy-c70="" className="screen_out">선택 옵션</em>
                          <ul _ngcontent-ogy-c70="" className="list_sort">
                            <li _ngcontent-ogy-c70="" className="on">
                              <a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="PRIORITY_DESC" data-tiara-copy="MD 추천순">MD 추천순</a>
                            </li>
                            <li _ngcontent-ogy-c70="">
                              <a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="PRICE_ASC" data-tiara-copy="가격낮은순">가격낮은순</a>
                            </li>
                            <li _ngcontent-ogy-c70="">
                              <a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="PRICE_DESC" data-tiara-copy="가격높은순">가격높은순</a>
                            </li>
                            <li _ngcontent-ogy-c70=""><a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="DISCOUNT_DESC" data-tiara-copy="할인율높은순">할인율높은순</a></li>
                            <li _ngcontent-ogy-c70=""><a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="DISCOUNT_ASC" data-tiara-copy="할인율낮은순">할인율낮은순</a></li>
                            <li _ngcontent-ogy-c70=""><a _ngcontent-ogy-c70="" href="" className="link_sort" data-tiara-layer="RELEASE_DESC" data-tiara-copy="최근등록순">최근등록순</a></li>
                          </ul>
                        </div>
                      </div>
                      <div _ngcontent-ogy-c70="" data-tiara-layer="filter" className="box_filter">
                        <em _ngcontent-ogy-c70="" className="screen_out">가격대 선택</em>
                        <a _ngcontent-ogy-c70="" href="" data-tiara-layer="open" data-tiara-copy="가격 필터 열기" className="link_filter">
                          <span _ngcontent-ogy-c70="" className="ico_module ico_price"></span>
                          가격
                        </a>
                      </div>
                    </div>
                  
                    <strong _ngcontent-ogy-c70="" className="tit_list">달콤한 투썸케이크 선물</strong>
                  </div>
                
                  {/* 상품 리스트 */}
                  <ul className="list_product scroll_hori">
                    {
                      ProductList.filter(e=>{ return e.brandId == brandId}).map(e=>{ 
                        return (
                          <li>
                            <gl-link>
                              <a className="link_product">
                                <span className="wrap_img">
                                  <img className="img_g" src={e.imgSrc} />
                                </span>
                                <span _ngcontent-ogy-c70="" className="product_detail">
                                  <span _ngcontent-ogy-c70="" className="screen_out">브랜드명</span>
                                  <em _ngcontent-ogy-c70="" className="emph_brand">{brand.keyword}</em>
                                  <span _ngcontent-ogy-c70="" className="screen_out">{e.keyword}</span>
                                  <strong _ngcontent-ogy-c70="" className="tit_product">{e.keyword}</strong>
                                  <span _ngcontent-ogy-c70="" className="price_product">
                                    <span _ngcontent-ogy-c70="" className="screen_out">현재 가격</span>
                                    <span _ngcontent-ogy-c70="" className="txt_price">{e.price}
                                      <span _ngcontent-ogy-c70="" className="txt_won">원</span>
                                    </span>
                                  </span>
                                </span>
                              </a>
                            </gl-link>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>

          </gl-product-group>
        </div>
      </gl-promotion>
    </>
  )
}

export default Brand;
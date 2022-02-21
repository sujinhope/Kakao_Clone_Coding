import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { BrandDetailList } from '../data/BrandDetailKeyword';
import { BrandList } from '../data/BrandCategoryKeyword';
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
      <gl-promotion class="ng-star-inserted">
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
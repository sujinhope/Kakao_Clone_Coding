import React from 'react';
import { BrandCategoryList } from './Keyword';
import Category from './Category';

const CateBanner = () => {
  return (
    <>
      <div className="brand_boxcate" id="cateBanner">
        <h3 className="screen_out">브랜드 카테고리</h3>
        <div className="boxcate_type1 list_boxcate ng_star_inserted">
          {BrandCategoryList.filter(e => {
            return (e.box_type == "boxcate_type1")
          }).map((e, index) => {
            return (
              <Category id={"type1_"+index} category = {e} />
            )
          })}
        </div>
        <div className="boxcate_type2 list_boxcate ng_star_inserted">
          {BrandCategoryList.filter(e => {
            return (e.box_type == "boxcate_type2")
          }).map((e, index) => {
            return (
              <Category id={"type2_"+index} category = {e} />
            )
          })}
        </div>
        <div className="boxcate_type3 list_boxcate ng_star_inserted">
          {BrandCategoryList.filter(e => {
            return (e.box_type == "boxcate_type3")
          }).map((e, index) => {
            return (
              <Category id={"type3_"+index} category = {e} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CateBanner;
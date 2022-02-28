import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { SubCategoryList, BrandList } from '../data/BrandCategoryKeyword';

const BrandSubCategoryMenu = () => {

  const { cateId, subCateId } = useParams();
  const [selected, setSelected] = useState('140'); // default 페이지/값 설정하기

  const onClick = (event) => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.getAttribute("data-id"));
    setSelected(event.currentTarget.getAttribute("data-id"))
  }
  
  return (
    <>
      <div className="brand_Mcate">
        <div className="brandv_midcate">
          <h3 className="screen_out">~~카테고리</h3>
          <ul className="list_midcate">
            {
              SubCategoryList.map(e => {
                return (
                  <li key={e.subCateId} className={e.subCateId == selected ? "ng-star-inserted on" : "ng-star-inserted"}>
                    <NavLink 
                      to={"/brand/category/"+cateId+"/subcategory/"+e.url} 
                      className="link_midcate"
                      onClick={onClick}
                      data-id={e.subCateId}
                    >
                      {e.keyword}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default BrandSubCategoryMenu;
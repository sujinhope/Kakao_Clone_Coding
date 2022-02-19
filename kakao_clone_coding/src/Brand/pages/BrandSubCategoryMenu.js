import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { SubCategoryList, BrandList } from '../data/BrandCategoryKeyword';

const BrandSubCategoryMenu = () => {

  const { cateId, subCateId } = useParams();
  const [selected, setSelected] = useState('');
  console.log(selected);

  useEffect(() => {
    setSelected(subCateId);
  })
  
  return (
    <>
      <div className="brand_Mcate">
        <div className="brandv_midcate">
          <h3 className="screen_out">~~카테고리</h3>
          <ul className="list_midcate">
            {
              SubCategoryList.map(e => {
                console.log(subCateId == selected);
                console.log(e);
                return (
                  <li key={e.brandId} className={e.brandId == selected ? "ng-star-inserted on" : "ng-star-inserted"}>
                    <NavLink 
                      to={"/brand/category/"+cateId+"/subcategory/"+e.url} 
                      className="link_midcate"
                      data-id={e.brandId}
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
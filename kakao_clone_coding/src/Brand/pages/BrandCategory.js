import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import '../data/BrandHomeKeyword';
import { MainCategoryList } from '../data/BrandHomeKeyword';
import BrandSubCategory from './BrandSubCategory';
import BrandSubCategoryMenu from './BrandSubCategoryMenu';

const BrandCategory = () => {

  const { cateId } = useParams();

  const [ opencate, setOpencate ] = useState('');
  const [ category, setCategory ] = useState('');

  const openSubCategory = (event) => {
    event.preventDefault();
    opencate === '' ? setOpencate('open_topcate') : setOpencate('');
  }

  useEffect(() => {
    setCategory(MainCategoryList.filter(e => {return e.id == cateId})[0])
    console.log(category);
  })

  return (
    <>
      <div _ngcontent-vuf-c141="" className="ng-star-inserted">
        <div _ngcontent-vuf-c135="" className={"brandv_top " + opencate}
          style={{backgroundImage: "url("+category.backgroundImage+")"}} >
          <h3 className="screen_out">브랜드 카테고리</h3>
          <div className="box_intro">
            <div className="inner_intro">
              <strong _ngcontent-vuf-c135="">
                <NavLink _ngcontent-vuf-c135="" to="/" 
                  className="tit_brandvtop"
                  onClick={openSubCategory}
                  data-tiara-layer="brandgroup_more">
                  모바일교환권 
                  <span  _ngcontent-vuf-c135="" className="ico_gift2">하위 카테로리 열기/닫기</span>
                </NavLink>
              </strong>
              
              <div _ngcontent-vuf-c135="" className="brandv_topcate ng-star-inserted">
                <ul _ngcontent-vuf-c135="" data-tiara-layer="brandgroup_more" className="list_topcate">
                  <li _ngcontent-vuf-c135="" className="on ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="모바일교환권" data-tiara-id="1">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        모바일교환권
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="상품권/영화/도서" data-tiara-id="2">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        상품권/영화/도서
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="패션" data-tiara-id="3">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">패션
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="식품" data-tiara-id="4">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        식품
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="뷰티" data-tiara-id="5">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        뷰티
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="리빙/주방/꽃배달" data-tiara-id="6">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        리빙/주방/꽃배달
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="카카오프렌즈" data-tiara-id="7">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">
                        카카오프렌즈
                      </NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="임신/출산/유아동" data-tiara-id="8">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">임신/출산/유아동</NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="디지털/가전" data-tiara-id="9">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">디지털/가전</NavLink>
                    </gl-link>
                  </li>
                  <li _ngcontent-vuf-c135="" className="ng-star-inserted">
                    <gl-link _ngcontent-vuf-c135="" data-tiara-type="categoryId" cutiara="" _nghost-vuf-c55="" data-tiara-copy="레저/스포츠" data-tiara-id="10">
                      <NavLink _ngcontent-vuf-c55="" to="" className="link_topcate ng-star-inserted">레저/스포츠</NavLink>
                    </gl-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      
        <BrandSubCategoryMenu />
        <Outlet />
      </div>
    </>
  );

}

export default BrandCategory;
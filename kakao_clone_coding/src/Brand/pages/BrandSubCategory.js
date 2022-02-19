import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import '../data/BrandHomeKeyword';
import { MainCategoryList } from '../data/BrandHomeKeyword';

const BrandSubCategory = () => {

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
        <h2>SubCategory</h2>
      </div>
    </>
  );

}

export default BrandSubCategory;
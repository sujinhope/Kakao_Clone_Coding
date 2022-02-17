import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Brand.scss';
import CateBanner from './CateBanner';

const Brand = () => {
  return (
    <>
      <div className="cont_brand">
        <h2 className="screen_out">브랜드탭</h2>
        <div>
          <div>
            <CateBanner />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
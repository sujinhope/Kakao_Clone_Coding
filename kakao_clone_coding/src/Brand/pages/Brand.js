import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../Brand.scss';

const Brand = () => {
  console.log('BrandTab')
  return (
    <>
      <div className="cont_brand">
        <h2 className="screen_out">브랜드탭</h2>
        <Outlet />
      </div>
    </>
  );
}

export default Brand;
import React from 'react';
import CateBanner from '../components/CateBanner';
import HotBrand from '../components/HotBrand';

const BrandHome = () => {
  return (
    <>
      <div className="cont_brand">
        <h2 className="screen_out">λΈλλν­</h2>
        <div>
          <div>
            <CateBanner />
            <HotBrand />
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandHome;
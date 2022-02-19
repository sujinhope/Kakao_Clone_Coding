import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const BrandCategory = () => {

  const { num } = useParams();
  console.log(num);

  return (
    <>
      <h2>{num}</h2>
      <Outlet />
    </>
  );

}

export default BrandCategory;
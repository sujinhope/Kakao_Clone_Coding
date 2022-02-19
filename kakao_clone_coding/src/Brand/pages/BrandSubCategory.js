import React from 'react';
import { useParams } from 'react-router-dom';

const BrandSubCategory = () => {

  const { num } = useParams();
  console.log(num);

  return (
    <>
      <h2>Sub</h2>
    </>
  );

}

export default BrandSubCategory;
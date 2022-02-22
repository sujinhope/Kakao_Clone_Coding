import React from 'react';
import { useParams } from 'react-router-dom';
import '../data/BrandCategoryKeyword';

const BrandDetail = () => {

  const { brandId } = useParams();

  return (
    <>
      <div>{brandId}</div>
    </>
  )
}

export default BrandDetail;
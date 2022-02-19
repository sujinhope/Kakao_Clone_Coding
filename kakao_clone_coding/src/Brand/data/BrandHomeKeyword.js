import React from 'react';

const MainCategoryList = [
  {
    id: 91,
    box_type: "boxcate_type1",
    itme_type: "boxcate_itme1",
    keyword: "모바일교환권",
    url: "/brand/category/91",
    imgSrc: "https://gift-s.kakaocdn.net/dn/gift/c1/brands/top/01mobile_01starbucks.png",
    backgroundImage: "https://mud-i0.kakaocdn.net/dn/hHwuj/bIcgJzYSM0N/SCkxFUadubBbXz1vbKeJpK/img.png?w=600&h=272&convert=resize",
    flickingCamera: false,
  },
  {
    id: 92,
    box_type: "boxcate_type1",
    itme_type: "boxcate_itme1",
    keyword: "상품권/영화/도서",
    url: "/brand/category/92",
    imgSrc: "https://gift-s.kakaocdn.net/dn/gift/c1/brands/top/02life_01cgv.png",
    backgroundImage: "https://mud-i0.kakaocdn.net/dn/Xw5f2/bIcgJrmeyk6/AuZdAP5BuNf7dm6S4c8u61/img.png?w=600&h=272&convert=resize",
    flickingCamera: false,
  },
  {
    id: 93,
    box_type: "boxcate_type1",
    itme_type: "boxcate_itme1",
    keyword: "패션",
    url: "/brand/category/93",
    imgSrc: "http://t1.daumcdn.net/gift/brand/displayContent/schedule/20210325_KCJBV.png",
    backgroundImage: "https://t1.daumcdn.net/gift/brand/displayCategory/9620211231_RXXID.png?w=600&h=272&convert=resize",
    flickingCamera: false,
  },
  {
    id: 94,
    box_type: "boxcate_type2",
    itme_type: "boxcate_itme2",
    keyword: "식품",
    url: "/brand/category/94",
    imgSrc: "http://t1.daumcdn.net/gift/brand/displayContent/schedule/1720210430_BHLZH.png",
    backgroundImage: "https://t1.daumcdn.net/gift/brand/displayCategory/9320220206_SIYAP.jpeg?w=600&h=272&convert=resize",
    flickingCamera: false,
    paddingTop: "45.24%",
    subText: "졸업선물",
  },
  {
    id: 95,
    box_type: "boxcate_type2",
    itme_type: "boxcate_itme1",
    keyword: "뷰티",
    url: "/brand/category/95",
    imgSrc: "https://t1.daumcdn.net/gift/brand/displayContent/schedule/3520211230_SURAK.jpg",
    backgroundImage: "https://mud-i0.kakaocdn.net/dn/d8OZA7/bIcgJtEl5gd/vTVcd21avDKoW7zhFR1Wo1/img.png?w=600&h=272&convert=resize",
    flickingCamera: false,
  },
  {
    id: 96,
    box_type: "boxcate_type3",
    itme_type: "boxcate_itme3",
    keyword: "리빙/주방/꽃배달",
    url: "/brand/category/96",
    imgSrc: "https://gift-s.kakaocdn.net/dn/gift/c1/brands/top/06living.png",
    backgroundImage: "",
    flickingCamera: false,
    paddingTop: "180.95%",
  },
  {
    id: 100,
    box_type: "boxcate_type3",
    itme_type: "boxcate_itme1",
    keyword: "",
    url: "/brand/category/100",
    imgSrc: "http://t1.daumcdn.net/gift/brand/displayContent/schedule/20210622_HPNTL.png",
    backgroundImage: "",
    flickingCamera: true,
  },
  {
    id: 97,
    box_type: "boxcate_type3",
    itme_type: "boxcate_itme1",
    keyword: "임신/출산/유아동",
    url: "/brand/category/97",
    imgSrc: "http://t1.daumcdn.net/gift/brand/displayContent/schedule/820210603_PISIU.png",
    backgroundImage: "",
    flickingCamera: false,
  },
  {
    id: 98,
    box_type: "boxcate_type3",
    itme_type: "boxcate_itme1",
    keyword: "디지털/가전",
    url: "/brand/category/98",
    imgSrc: "https://gift-s.kakaocdn.net/dn/gift/c1/brands/top/09digital.png",
    backgroundImage: "",
    flickingCamera: false,
  },
  {
    id: 99,
    box_type: "boxcate_type3",
    itme_type: "boxcate_itme1",
    keyword: "레저/스포츠",
    url: "/brand/category/99",
    imgSrc: "https://gift-s.kakaocdn.net/dn/gift/c1/brands/top/10sports.png",
    backgroundImage: "",
    flickingCamera: false,
  },
];

const HotList = [
  {
    id: 1,
    keyword: "Dior",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220214_ZSHPG.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331041243_64b9b65cff1d4a2d9516ed032a84268f",
  },
  {
    id: 2,
    keyword: "JO MALONE",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220211_WDXLH.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20210215121710_8a6b0521760944178e61e01388eda48c.jpg",
  },
  {
    id: 3,
    keyword: "LAB SERIES",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220211_BADWI.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035328_d847189961094e86a2960e5fe5f4752d",
  },
  {
    id: 4,
    keyword: "athe",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220211_LEYFV.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331041403_c819ab58f92d4cb08afcf1f2a70450c8",
  },
  {
    id: 5,
    keyword: "PIAGET",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220209_EUWSG.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20220106160304_c858c431f6cf4b66be01a777409497a7.jpg",
  },
  {
    id: 6,
    keyword: "NARS",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220209_BIQLQ.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331040852_b7c5d1ba877d4eaeb29d4d8cdf84ba7c",
  },
  {
    id: 7,
    keyword: "LAROCHE POSAY",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220209_NNBKC.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20210119100955_8c6d9469ae0c49b2a2b95095c18314f0.jpg",
  },
  {
    id: 8,
    keyword: "YVES SAINT LAURENT",
    ad_href: "",
    ad_background: "https://t1.daumcdn.net/gift/brand/displayBanner/20220209_CEMUC.png?w=600&h=338&convert=crop",
    imgSrc: "https://img1.kakaocdn.net/thumb/C70x70.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331040854_ff683e45f4d246ef9da5787115ead31c",
  },
];


const BrandHomeKeyword = () => {

  return (
    <div>
      Keyword 
    </div>
  )

}
export { MainCategoryList, HotList };
export default BrandHomeKeyword;
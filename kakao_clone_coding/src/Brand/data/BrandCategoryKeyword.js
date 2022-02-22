import React from 'react';

const SubCategoryList = [
  {
    subCateId: 140,
    keyword: "베이커리/도넛/떡",
    url: "140",
  },
  {
    subCateId: 141,
    keyword: "카페",
    url: "141",
  },
  {
    subCateId: 142,
    keyword: "아이스크림/빙수",
    url: "142",
  },
  {
    subCateId: 143,
    keyword: "구이/족발",
    url: "143",
  },
  {
    subCateId: 144,
    keyword: "치킨",
    url: "144",
  },
  {
    subCateId: 145,
    keyword: "버거/피자",
    url: "145",
  },
  {
    subCateId: 146,
    keyword: "편의점",
    url: "146",
  },
];

const BrandList = [
    {
      brandId: 32,
      subCateId: 140,
      keyword: "투썸플레이스",
      url: "32",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035700_e1074baea8b343b98d783201f88c8884",
    },
    {
      brandId: 33,
      subCateId: 140,
      keyword: "파리바게트",
      url:"33",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035701_6f415246667f453ab99efaf64dcae28c",
    },
    {
      brandId: 34,
      subCateId: 140,
      keyword: "던킨",
      url:"34",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035637_912cd69641ea4723861dc213f6a0619f",
    },
    {
      brandId: 35,
      subCateId: 140,
      keyword: "크리스피크림",
      url:"35",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20201022174148_47db523539f443e0a8af6cd038ca25ad.jpeg",
    },
    {
      brandId: 36,
      subCateId: 140,
      keyword: "뚜레쥬르",
      url:"36",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200529171100_8183b1bb5e454e8484145cd881bc264d.jpeg",
    },
    {
      brandId: 37,
      subCateId: 140,
      keyword: "아띠제",
      url:"37",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035650_4ef260dc8b314659ae872a3b13cd8fd6",
    },
    {
      brandId: 38,
      subCateId: 140,
      keyword: "디저트39",
      url:"38",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20210917135631_d70897ed159a46188c8e3eb70b1d4fc7.jpeg",
    },
    {
      brandId: 39,
      subCateId: 140,
      keyword: "한스케익",
      url:"39",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035704_543c54de1e6b424ba44926094776f9c7",
    },
    {
      brandId: 40,
      subCateId: 140,
      keyword: "파리크라상",
      url:"40",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20211015111646_369c75b27a454095b647f53ef2d12c4d.jpeg",
    },
    // 2
    {
      brandId: 101,
      subCateId: 141,
      keyword: "스타벅스",
      url: "101",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035648_4f7fd5bab2564f88ae561161dce7966d",
    },
    {
      brandId: 102,
      subCateId: 141,
      keyword: "투썸플레이스",
      url: "102",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331035700_e1074baea8b343b98d783201f88c8884",
    },
    {
      brandId: 201,
      subCateId: 142,
      keyword: "배스킨라빈스",
      url: "201",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20210204193138_b71ce85b9bb44a0eab9ff3bae729ab30.png",
    },
    {
      brandId: 202,
      subCateId: 142,
      keyword: "백미당",
      url: "202",
      imgSrc: "https://img1.kakaocdn.net/thumb/C130x130.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200331040809_583d73cb5fde4caba50bfe45e6ee7173",
    },
]

export { SubCategoryList, BrandList };
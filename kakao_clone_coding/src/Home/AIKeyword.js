import React from 'react';

const AIKeywordList = [
  {
    keyword: "카페/제과/아이스크림",
    url: "/standardCategory/103107114",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220107172612_e94f93ffc95247ad8e4c951747e7d7b2.jpg",
  },
  {
    keyword: "외식/프렌차이즈",
    url: "/standardCategory/103107115",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210611140225_86aeed03170547a4a60989665f706522.jpg",
  },
  {
    keyword: "편의점",
    url: "/standardCategory/103107116",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200404013511_eba35cf84c6c4bc8ac39951f705139ea",
  },
  {
    keyword: "핸드/풋케어",
    url: "/standardCategory/103107117",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220204143933_7e015e6925324a76bfc668bb403f4f1a.jpg",
  },
  {
    keyword: "상품권/기프트카드",
    url: "/standardCategory/103107118",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200404051422_cb787dca9f744ef1b297da9696df3e13",
  },
  {
    keyword: "색조/메이크업",
    url: "/standardCategory/103107119",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220204182016_1e3c1661caf649dfbd2682a32b066bfd.jpg",
  },
  {
    keyword: "건강기능식품",
    url: "/standardCategory/103107120",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210531142221_3a56c0f4bd7f47a3bdfed3fc9643a3ac.jpg",
  },
  {
    keyword: "초콜릿",
    url: "/standardCategory/103107121",
    imgSrc: "https://img1.kakaocdn.net/thumb/C48x48.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210217105636_01063dfe788b45d8ba02a58a268e5160.png",
  },
];

const AIKeyword = () => {
  return (
    <div _ngcontent-keh-c123="true" className="area_g area_ai_keyword">
      <app-view-recommend-category>
        <div >
          <h3 _ngcontent-keh-c118 className="tit_keyword">
            <span className="ico_main ico_kakaoai">AI</span>
            추천
          </h3>
          <div _ngcontent-keh-c118 className="group_home_keyword">
            {
              AIKeywordList.map((e, index) => {
                return (
                  <gl-link _ngcontent-keh-c118 key={index}>
                    <a _ngcontent-keh-c55="" className="link_keyword" href={e.url}>
                      <span _ngcontent-keh-c118="" className="wrap_thumb">
                        <img _ngcontent-keh-c118="" 
                            alt="" className="img_g" 
                            src={e.imgSrc} />
                      </span>{e.keyword}
                    </a>
                  </gl-link>
                )
              })
            }
          </div>
          <div _ngcontent-keh-c118 data-tiara-layer="personal_category" className="group_btn_more">
            <span _ngcontent-keh-c118 className="ico_main ico_gradation"></span>
            <button _ngcontent-keh-c118 type="button" cu-tiara="" className="btn_more" data-tiara-layer="close">
              <span _ngcontent-keh-c118 className="ico_main ico_arrow"> 닫기 </span>
            </button>
          </div>
        </div>
      </app-view-recommend-category>
    </div>
  )
}

export default AIKeyword;
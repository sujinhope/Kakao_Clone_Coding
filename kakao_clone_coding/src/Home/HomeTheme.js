import React from 'react';

const themeList = [
  {
    id: 0,
    themeName: "생일",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220113094316_fb17fd7f61e9479182993f65e6376292.jpg",
    isNewTheme: false,
  },
  {
    id: 1,
    themeName: "발렌타인데이",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20211227100903_35a02fe9b5d14217b2b9ecaa4e602d7e.jpg",
    isNewTheme: true,
  },
  {
    id: 2,
    themeName: "가벼운선물",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220114112131_057e4d2e715d4f4d8a02fae45f1d649b.png",
    isNewTheme: true,
  },
  {
    id: 3,
    themeName: "스몰럭셔리",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20211216143355_18604396db3e41a09e7ad70778725515.jpg",
    isNewTheme: false,
  },
  {
    id: 4,
    themeName: "건강회복",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220203103107_9850a50614234ecca70df63cd888ade5.jpg",
    isNewTheme: false,
  },
  {
    id: 5,
    themeName: "따뜻한선물",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200827185647_fa3a031d68c44e09a44ce4fb7d3ce4b5.jpg",
    isNewTheme: false,
  },
  {
    id: 6,
    themeName: "명품선물",
    imgSrc: "https://k.kakaocdn.net/dn/d2kOix/bIcBwvWhSNE/ZP9RoJ0rjaVOs3gZedUJR0/img.jpg",
    isNewTheme: false,
  },
  {
    id: 7,
    themeName: "어른선물",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210914165131_70edddb11adf42b9990c00dbc256e159.jpg",
    isNewTheme: false,
  },
  {
    id: 8,
    themeName: "출산/백일돌",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20211230111436_2c4b02b9434f400c9ae1f24fe7a3ad06.jpg",
    isNewTheme: false,
  },
  {
    id: 9,
    themeName: "쓸모없는선물",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220204114652_22e33a9d75b5465e8fb7c8fcff4de493.jpg",
    isNewTheme: false,
  },
  {
    id: 10,
    themeName: "결혼/집들이",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210806134750_2c04cabccf46404381d5e82c89bcac4f.png",
    isNewTheme: false,
  },
  {
    id: 11,
    themeName: "배달선물",
    imgSrc: "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210611135706_b8141e7f308e4b70a2c83499ac67eb19.jpg",
    isNewTheme: false,
  },
];

const HomeTheme = () => {
  return (
    <div _ngcontent-keh-c123="true" className="area_g area_home_theme">
      <h3 className="screen_out">선물 테마 선택</h3>
      <div className="wrap_home_theme">
        <div className="inner_home_theme">
          <strong className="screen_out">테마 리스트</strong>
          <ul className="list_home_theme">
          {
            themeList.map(e => {
              return (
                <li key={e.id}>
                  <a className="link_item">
                    <span className="wrap_thumb">
                      <img className="img_g" src={e.imgSrc} />
                    </span>
                    <span className="txt_item">
                      {e.isNewTheme && <span className="ico_newtheme"></span>}
                      <span className="txt_g">{e.themeName}</span>
                    </span>
                  </a>
                </li>
              );
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomeTheme;
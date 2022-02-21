import Header from './Home/Header';
import Home from './Home/Home';
import HomeMain from './Home/HomeMain';
import Brand from './Brand/pages/Brand';
import './App.css';
import './styles_kakao.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandCategory from './Brand/pages/BrandCategory';
import BrandHome from './Brand/pages/BrandHome';
import BrandSubCategory from './Brand/pages/BrandSubCategory';
import BrandDetail from './Brand/pages/BrandDetail';

function App() {
  return (
    <app-root _nghost-keh-c89>
    <router-outlet _ngcontent-keh-c89=""></router-outlet>
    <app-view-wrapper _nghost-keh-c87="">
    <div id="_body" _ngcontent-keh-c87="" className="bg_gray gift_new ios"> 
      <div id="kakaoWrap" _ngcontent-keh-c87="" className="gnb_type1 wrap_home">
        <Router>
          {/* Link를 쓰기 위해서는 Router 안에 위치시켜야 함 */}
          <Header /> 
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<HomeMain />} />
              <Route path="/best" element={<HomeMain />} />
              <Route path="/brand" >
                <Route path="/brand" element={<BrandHome />} />
                <Route path="/brand/:brandId" element={<Brand />} />
                <Route path="/brand/category" >
                  <Route path="/brand/category/:cateId" element={<BrandCategory />} >
                    <Route path="/brand/category/:cateId" element={<BrandSubCategory />} />
                    <Route path="/brand/category/:cateId/subcategory/:subCateId" element={<BrandSubCategory />} />
                  </Route>
                </Route>
              </Route>
            </Route>
              {/* {definitions.map(({number, elem}) => <Route path={`/brand/category/:${number}`} elemment={elem} />)} */}
              {/* <Route path="/brand/category/:number" element={<DetailBrand />} /> */}
              <Route path="/*" element={<Home />} />     
          </Routes>
        </Router>
        </div>
      </div>
    </app-view-wrapper>
    </app-root>
  );
}

export default App;

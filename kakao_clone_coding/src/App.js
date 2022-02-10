import Header from './Home/Header';
import Home from './Home/Home';
import HomeMain from './Home/HomeMain';
import Category from './Brand/Category';
import Brand from './Brand/Brand';
import logo from './logo.svg';
import './App.css';
import './styles_kakao.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <app-root _nghost-keh-c89>
    <router-outlet _ngcontent-keh-c89=""></router-outlet>
    <app-view-wrapper _nghost-keh-c87>
    <div id="_body" _ngcontent-keh-c87 className="bg_gray gift_new ios"> 
      <div id="kakaoWrap" _ngcontent-keh-c87 className="gnb_type1 wrap_home">
        <Header />
        <Router>
          <Routes>
              <Route path="/home" element={<HomeMain />} />
              <Route path="/best" element={<HomeMain />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/brand/category/:num" element={<Category />} />
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

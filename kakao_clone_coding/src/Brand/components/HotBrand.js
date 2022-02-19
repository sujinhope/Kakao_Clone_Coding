import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrandHotList } from '../data/BrandHomeKeyword';

const HotBrand = () => {

  const [selected, setSelected] = useState(0);
  const [background, setBackground] = useState('https://t1.daumcdn.net/gift/brand/displayBanner/20220209_EUWSG.png?w=600&amp;h=338&amp;convert=crop');
  const [href, setHref] = useState('/brand/12677');

  const onClick = (event) => {
    // event.preventDefault();
    // console.log(ReactDOM.findDOMNode(event.currentTarget));
    setSelected(event.currentTarget.id);
    setBackground(event.currentTarget.getAttribute("data-ad-background"));
  }

  return (
    <>
      <div className="brand_hotnew" id="hotBrand">
        <h3 className="screen_out">hot & new</h3>
        <gl-link>
          <a _ngcontent-exp-c55="true" className="link_hotnew" href={href}>
            <div _ngcontent-exp-c109="true" 
                className="selected_brand custom_selected_brand" 
                style={{ backgroundImage: "url("+background+")"}}>
            </div>
            <em _ngcontent-exp-c109="" className="ico_main ico_ad"> 광고</em>
          </a>
        </gl-link>
        <ul className="list_hotnew">
          {
            BrandHotList.map((e, index) => {
              return (
                <li _ngcontent-exp-c109="" className="hotnew_item" key={e.id}>
                  <a _ngcontent-exp-c109="" id={index} 
                    href={void(0)} 
                    onClick={onClick} 
                    data-ad-background={e.ad_background}
                    data-ad-href={e.ad_href}
                    className={index == selected ? "link_hotnew" : "unselected link_hotnew"} 
                    data-tiara-layer="brand_img" data-tiara-type="hotBrandId" data-tiara-ordnum="1" data-tiara-id="570">
                    <img _ngcontent-exp-c109="" 
                        className="img_thumb"
                        src={e.imgSrc}
                        alt={e.keyword} />
                  </a>
                </li>
              );
            })
          }
          
        </ul>
      </div>
    </>
  )
}

export default HotBrand;
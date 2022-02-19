import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ( props ) => {

  const styleViewPort = {
    "display" : "block",
    "touchAction" : "pan-y",
    "userSelect" : "none",
  };

  const category = props.category;

  return (
    <div className={"ng-star-inserted " + category.itme_type}>
      <div _ngcontent-jkn-c108="true" className="_box-wrapper">
        <div _ngcontent-jkn-c108="true" className="_box" style={{paddingTop : category.paddingTop ? category.paddingTop : "90.4762%"}}>
          <div _ngcontent-jkn-c108="true" className="_box-inner" >
            <gl-link _ngcontent-jkn-c108="true" class="_gl-link">
              <NavLink className="link_boxcate ng-star-inserted" to={category.url}>
                {
                  category.flickingCamera ? 
                    <>
                      <ngx-flicking className="flicking-viewport" style={styleViewPort}>
                        <div className="flicking-camera">
                          <div className="panel ng-star-inserted" style={{width: "115px"}}>
                            <img className="img_thumb" src={category.imgSrc} />
                          </div>
                        </div>
                      </ngx-flicking>
                    </>
                    :
                    <>
                      <img className="img_thumb" src={category.imgSrc} />
                    </>
                }
                <span className="txt_boxcate" style={{zIndex: "1"}}>
                  {category.keyword}
                  {
                    category.subText ?
                      <><em className="info_boxcate" style={{color: "rgb(181, 86, 44)"}}>졸업선물 💐 </em></>
                      :
                      <></>
                  }
                </span>
              </NavLink>
            </gl-link>
          </div>
        </div>
      </div>
    </div>      
  )

}
export default Category;
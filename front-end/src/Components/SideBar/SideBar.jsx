import React from 'react'

// Assets
import addIcon from "../../assets/images/plus.svg";
import demoImage from "../../assets/images/image1.png";

// Components
import Header from './Header'
import Content from './Content';
const SideBar = () => {
  return (
    <div className='sidebar col-md-5 col-lg-3 col-8'>
        <div className="position-absolute start-0 top-0 w-100">
          <Header addIcon={addIcon} />
          <hr />
          <div className="content-area">
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
            <Content demoImage={demoImage} />
          </div>
        </div>
    </div>
  )
}

export default SideBar

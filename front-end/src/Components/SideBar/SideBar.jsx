import React from 'react'

// Assets
import addIcon from "../../assets/images/plus.svg";
import demoImage from "../../assets/images/image1.jpg";

// Components
import Header from './Header'
import Content from './Content';

const SideBar = () => {
  return (
    <div className='sidebar col-lg-3 col-12'>
      <Header addIcon={addIcon} />
      <hr />
      <div className="sidebar-content-area">
        <Content demoImage={demoImage} />
      </div>
    </div>
  )
}

export default SideBar

import React from 'react'

// Assets
import demoImage from "../../assets/images/image1.jpg";

// Components
import Header from './Header'
import Content from './Content';

const SideBar = () => {
  return (
    <div className='sidebar col-lg-3 col-12'>
      <Header demoImage={demoImage} />
      <hr />
      <div className="sidebar-content-area">
        <Content demoImage={demoImage} />
      </div>
    </div>
  )
}

export default SideBar

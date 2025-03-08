import React from 'react'
import demoImage from "../../assets/images/image1.jpg";

const Header = () => {
  return (
    <>
        <div className='body-header col-lg-9 col-12'>
            <div className="d-flex align-items-center gap-2">
                <div className="profile-pic-container">
                    <img src={demoImage} alt="" />
                </div>
                <div className="d-flex flex-column text-white">
                    <span className='fw-bold'>Muhammad Ali Zain</span>
                    <span className="" style={{fontSize: "14px"}}>Online</span>
                </div>
            </div>
            <div className="d-flex gap-4 align-items-center">
                <i className="bi bi-telephone-fill text-white pointer"></i>
                <i className="bi bi-camera-video-fill text-white pointer"></i>
                <i className="bi bi-three-dots-vertical fw-bold text-white pointer" data-bs-toggle="dropdown" aria-expanded="false"></i>
                {/* Dropdown list */}
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item">Report</button></li>
                    <li><button className="dropdown-item">Block</button></li>
                    <li><button className="dropdown-item">Clear Chat</button></li>
                    <li><button className="dropdown-item">Export Chat</button></li>
                </ul>
                {/* Dropdown list */}
            </div>
        </div>
        <hr />
    </>
  )
}

export default Header

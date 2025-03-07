const Content = (props) => {
  return (
    <>
      <div className='w-100 shadow py-3 px-2 sidebar-content d-flex gap-3 align-items-center pointer'>
          <div className="profile-pic-container">
              <img src={props.demoImage} alt="" />
          </div>
          <div className="info-container d-flex flex-column align-items-start justify-content-center">
              <div className="name">Ali Zain</div>
              <div className="last-message">Last Message</div>
          </div>
      </div>
      <hr />
    </>
  )
}

export default Content

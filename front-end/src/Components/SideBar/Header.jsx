const Header = (props) => {
  return (
    <div className='w-100 shadow py-3 px-2 siderbar-header'>
      <div className='d-flex align-items-center gap-3'>
        <input type="text" className='sidebar-input rounded' 
          placeholder="Search here"
        />
        <div className="pe-1">
          <img className="addIcon" src={props.addIcon} alt="plus-icon"
            title="Add new conversation"
          />
        </div>
      </div>
    </div>
  )
}

export default Header 

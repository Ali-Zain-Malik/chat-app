import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <div className='w-100 shadow py-3 px-2 siderbar-header'>
      <div className='d-flex align-items-center gap-3 justify-content-evenly'>
        <Link className="my-profile" role="button" to="/profile/1">
          <img className="my-profile-pic" src={props.demoImage} alt="" />
        </Link>
        <div className="" style={{"width": "68%"}}>
          <input type="text" className='sidebar-input rounded' 
            placeholder="Search here"
          />
        </div>
        <div className="">
          <span data-bs-placement="bottom" data-bs-title="Add New Conversation" data-bs-toggle="tooltip">
            <i className="bi bi-plus-lg fs-4 text-white" role="button" data-bs-toggle="modal" data-bs-target="#searchUser"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
// Enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

export default Header 

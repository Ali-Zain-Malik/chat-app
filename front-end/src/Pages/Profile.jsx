import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {

  const [state, setState] = useState({
    profilePic: "https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1ibhlc21q10rtkbh1rcb9554902q.jpg",
  });

  function handleInputChange(event)
  {
    const file = event.target.files[0];
    if(file)
    {
      const imageUrl = URL.createObjectURL(file);
      setState({
        ...state,
        profilePic: imageUrl,
      });
    }
  }

  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-image-div rounded-circle">
          <img className="profile-image rounded-circle" src={state.profilePic} alt="" />
          <div className="overlay">
            <i className="bi bi-camera-fill camera-icon" role="button" onClick={ () => document.querySelector(".profile-image-input").click() }></i>
            <input type="file" className="profile-image-input" onChange={handleInputChange} accept=".jpg, .jpeg, .png" name="profile-image-input" />
          </div>
        </div>

        <div className="name-div d-flex">
          <p className="h5 fw-bolder mt-3 name text-center text-white" id="name">Muhammad Ali Zain</p>
        </div>

        <div className="about">
          <p className="ps-2 mb-0 text-white">I am I. No one can be I.</p>
        </div>

        <div className="personal-info gap-5">
          <div className="email-div col-md-4 col-12">
            <input type="text" className="w-100 form-control py-3" placeholder="Enter Email" />
          </div>
          <div className="name-div col-md-4 col-12">
            <input type="text" className="w-100 form-control py-3" placeholder="Enter new name" />
          </div>
          <div className="about-div col-md-4 col-12">
            <input type="text" className="w-100 form-control py-3" placeholder="About" />
          </div>
          <div className="password-div col-md-4 col-12">
            <input type="password" className="w-100 form-control py-3" placeholder="Enter old password" />
          </div>
          <div className="confirm-password-div col-md-4 col-12">
            <input type="password" className="w-100 form-control py-3" placeholder="Enter new password"  />
          </div>
          <div className="save-changes-div col-md-4 col-12">
            <button type="button" className="w-100 save-profile-btn py-3 btn">Save Changes</button>
          </div>
          <div className="back-div col-md-4 col-12">
            <Link to="/home" className="w-100 back-btn py-3 btn">Back to Messages</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

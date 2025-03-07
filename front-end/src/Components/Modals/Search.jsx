import Content from "../SideBar/Content";
import demoImage from "../../assets/images/image1.jpg";
import { useRef } from "react";

const SearchModal = (props) => {

    const inputRef = useRef(null);
    function submitUser(e) {
        e.preventDefault();
        console.log(inputRef.current.value)
    }
    return (
        <div className="modal fade" id="searchUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Conversation</h1>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={submitUser}>
                            <div className="mb-3 d-flex gap-2 align-items-end justify-content-center">
                                <div className="col-9">
                                    <label htmlFor="email   " className="col-form-label">Enter email</label>
                                    <input type="search" className="form-control" id="email"
                                        placeholder="example@example.com"
                                        ref={inputRef}
                                    />
                                </div>
                                <span className="col-3">
                                    <button type="submit" className="w-100 btn bg-secondary-subtle text-black">Search</button>
                                </span>
                            </div>
                            <div className="mb-3 text-center">
                                {1 == 1 ? (

                                    <Content demoImage={demoImage} />
                                ) : "User not found"}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SearchModal;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",
    });

    function handleSignup(event)
    {
        event.preventDefault();
        const name = state.name;
        const email = state.email;
        const password = state.password;

        if(!validateInputs(name, email, password)) 
        {
            return;
        }
    }

    function validateInputs(name, email, password)
    {
        let isValid = true;
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        
        if(name === undefined || name == "" || name == null)
        {
            nameError = "Name is required";
            isValid = false;
        }

        if(email === undefined || email == "" || email == null)
        {
            emailError = "Email is required";
            isValid = false;
        }
        else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email))
        {
            emailError = "Please enter a valid email";
            isValid = false;
        }

        if(password === undefined || password == "" || password == null)
        {
            passwordError = "Password is required";
            isValid = false;
        }
        else if(password.length < 8)
        {
            passwordError = "Password must be greater than 8 characters";
            isValid = false;
        }

        setState({
            ...state,
            nameError: nameError,
            emailError: emailError,
            passwordError: passwordError,
        });

        return isValid;
    }

  return (
    <div className='sign-page'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                            <div className="card-body p-5 text-center">

                                <form className="mb-md-4 mt-md-4" onSubmit={handleSignup}>

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <label className="form-label float-start" htmlFor="name">Name</label>
                                        <input onChange={(event)=> setState({...state, name: event.target.value, nameError: ""})} type="text" id="name" className="form-control form-control-lg" />
                                        {state.nameError && <span className='float-start text-danger'>{state.nameError}</span>}
                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <label className="form-label float-start" htmlFor="typeEmailX">Email</label>
                                        <input onChange={(event)=> setState({...state, email: event.target.value, emailError: ""})} type="text" id="typeEmailX" className="form-control form-control-lg" />
                                        {state.emailError && <span className='float-start text-danger'>{state.emailError}</span>}
                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <label className="form-label float-start" htmlFor="typePasswordX">Password</label>
                                        <input onChange={(event)=> setState({...state, password: event.target.value, passwordError: ""})} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                        {state.passwordError && <span className='float-start text-danger'>{state.passwordError}</span>}
                                    </div>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 mt-2" type="submit">Sign up</button>

                                    <div className="d-flex justify-content-center gap-4 text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="bi bi-facebook fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="bi bi-google fa-lg"></i></a>
                                    </div>

                                </form>

                                <div>
                                    <p className="mb-0">Already have an account? 
                                        <Link to="/signin" className='text-white-50 fw-bold'> Sign In</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignUp

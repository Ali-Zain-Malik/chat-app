import { Routes, Route } from "react-router-dom";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import Home from "../Pages/Home";


const AppRoutes = () => {

    let isLoggedIn = true;
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={ !isLoggedIn ? <SignIn /> : <Home />} />
            <Route path="/home" element={ isLoggedIn ? <Home /> : <SignIn />} />
        </Routes>
    );

}

export default AppRoutes;
import { Routes, Route } from "react-router-dom";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";


const AppRoutes = () => {

    let isLoggedIn = true;
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={ !isLoggedIn ? <SignIn /> : <Home />} />
            <Route path="/home" element={ isLoggedIn ? <Home /> : <SignIn />} />
            <Route path="/profile/:id" element={ !isLoggedIn ? <SignIn /> : <Profile />} />
        </Routes>
    );

}

export default AppRoutes;
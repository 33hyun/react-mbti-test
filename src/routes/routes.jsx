import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Result from "../pages/Result";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    );
};

export default AppRoutes;
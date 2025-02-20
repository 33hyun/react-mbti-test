import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AuthForm from "../pages/AuthForm";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Result from "../pages/Result";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authform" element={<AuthForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="result" element={<Result />} />
        </Routes>
    )
}

export default AppRoutes;
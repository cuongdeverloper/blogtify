import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import SignUp from "./components/Auth/Sign up/SignUp";
import SignIn from "./components/Auth/Sign in/SignIn";
import EnterOTPRegister from "./components/Auth/Sign up/OTP/EnterOTPRegister";




const Layout = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 }); 
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/" element={<HomePage />}>
                    </Route>
                    
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/otp-verify" element={<EnterOTPRegister />} />

                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default Layout;

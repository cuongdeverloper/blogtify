import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./SignIn.scss";
import Cookies from "js-cookie";
import { ApiLogin } from "../../Service/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../redux/action/userAction";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const validateForm = () => {
    setIsFormValid(email && password);
  };
  const test = useSelector(state => state);

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
          // console.log(test)
            navigate('/'); 
        }
    }, [isAuthenticated,navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await ApiLogin(email, password);
      console.log(response)
      if (response.errorCode === 0) {
        toast.success(response.message);
        Cookies.set('accessToken', response.data.access_token, { expires: 1 });
        Cookies.set('refreshToken', response.data.refresh_token, { expires: 7 });
        dispatch(doLogin(response));

        navigate('/')
      }
      if (response.errorCode === 3) {
        toast.error(response.message)
      }
      else {
        toast.error(response.error)
      }


    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form">
        <h2>Sign In</h2>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateForm();
            }}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateForm();
            }}
            required
          />
        </label>
        <div className="Register-body-buttonSignUp">
          <button
            type="submit"
            className="btn-register btn btn-secondary"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            {isLoadingLogin && <ImSpinner9 className="loaderIcon" />}
            LOGIN
          </button>
        </div>
        <div className="separator">
          <span>or</span>
        </div>
        <button type="button" className="btn-secondary">
          <FaGoogle /> Sign in with Google
        </button>
        <button type="button" className="btn-secondary">
          <FaFacebook /> Sign in with Facebook
        </button>
        <p className="footer-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

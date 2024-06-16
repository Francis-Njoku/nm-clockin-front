import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeAPICall from "../../utils/apiUtils";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import GoogleImg from "../../assets/images/forgot-password.svg";

export default function PasswordReset (){

  //const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
  });
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }
  //const dispatch = useDispatch();
  // use the hook and selector
  //const { loading } = useSelector(getLoginSelector);

  const handleSubmit = () => {
    //setIsLoading(true);
    const data = {
      email: inputValues.email,
      //callbackUrl: "yieldroom.africa",
    };
    return makeAPICall({
      path: "/forgot-password/",
      method: "POST",
      payload: data,
    })
      .then((res) => {
        //setIsLoading(false);
        message.success(res.message);
        navigate('/2-step-authentication'); // Redirect to the desired success page
      })
      .catch((err) => {
        //setIsLoading(false);
        message.error(err.message, 5);
      });
  };
    
        return(
            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "32rem"}}>
                    <form className="row g-1 p-3 p-md-4">
                        <div className="col-12 text-center mb-1 mb-lg-5">
                            <img src={GoogleImg} className="w240 mb-4" alt="" />
                            <h1>Forgot password?</h1>
                            <span>Enter the email address you used when you joined and we'll send you instructions to reset your password.</span>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Email address</label>
                                <input name="email" type="email" value={inputValues.email} onChange={handleChangeInput} className="form-control form-control-lg" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <button className="btn btn-lg btn-block btn-light lift text-uppercase" type="button" onClick={handleSubmit} disabled={!(inputValues.email)}>SUBMIT</button>

                            {/*<Link to={`${process.env.PUBLIC_URL}/2-step-authentication`} title="" className="btn btn-lg btn-block btn-light lift text-uppercase">SUBMIT</Link> */}
                        </div>
                        <div className="col-12 text-center mt-4">
                            <span className="text-muted"><Link to={`${process.env.PUBLIC_URL}/sign-in`} className="text-secondary">Back to Sign in</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


//export default PasswordReset;
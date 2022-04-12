import React from "react";
import "./otp.css";
import logo from "../../images/Needle.svg";
const Otp = () => {
    return (
        <div className="darzi-otp">
          <div className="logo-top">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <span>DARZI</span> 
                </div>
            </div>
            <form>
                <p>Enter OTP</p>
                <div className="input">
                        <input/>
                </div>
                <button>VERIFY</button>
            </form>
            <footer></footer>
      </div>
    )
}

export default Otp;
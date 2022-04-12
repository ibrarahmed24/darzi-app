import React from "react";
import "./signin.css";
import logo from "../../images/Needle.svg";
import phoneIcon from "../../images/iPhone.svg";


const SignIn= () => {
    return (
      <div className="darzi">
          <div className="logo-top">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
            <div>
            <span>DARZI</span> 
            </div>
          </div>
       <form>
           <p>Enter phone number</p>
           <div className="input">
               <div className="icon">
                   <img src={phoneIcon} alt=""/>
               </div>
                <input placeholder="+92"/>
           </div>
           <button>SIGN IN</button>
       </form>
       <footer>
                <a href="#">English , </a>
                <a href="#">اردو</a>
        </footer>
      </div>
    )
}

export default SignIn;
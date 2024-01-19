import React, { useState } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase'; // Import Firebase auth
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(`Failed to create account: ${error.message}`);
    }
  };
  

  return (
    <div>
      <div className="overlay">
        
        <div className="header">
        <h2>Create an Account</h2>
        <div className="container">
          <div className="input">
            
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password"><b>Re-enter Password</b></label>
            <input
              type="password"
              placeholder="Re-enter password"
              name="Re-enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />      


            <button  type="button" className="signupbtn" onClick={handleSignUp}>
              Sign Up
            </button>
            <button  type="button" className="Loginbtn" onClick={handleSignUp}>
              Log In
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

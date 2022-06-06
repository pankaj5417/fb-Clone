import "./register.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register({ setOpen }) {
  const [signup, setSignup] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setSignup((prev) => ({ ...signup, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await axios.post("/auth/register",signup);
    console.log("signupData",res.data.message)
    if(res.data.message==="registration successful"){
      alert("registration successful")
      setOpen(false)
    }
    
  };
  console.log("signup", signup);

  return (
    <>
      <div id="signup">
        <div id="signupModal">
          <div className="signupWrapper">
            <div className="signupTop">
              <div className="signupTopLeft">
                <h1 className="signupText">Sign Up</h1>
                <span className="signupDesc">It's quick and easy</span>
              </div>
              <div
                onClick={() => setOpen((prev) => (prev = false))}
                className="signupTopRight cursor"
              >
                x
              </div>
            </div>
            <hr className="signupHr" />
            <form action="" onSubmit={handleSubmit}>
              <div className="signupBottom">
                <div className="signupName">
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    required={true}
                    className="signupFirstname"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    onChange={handleChange}
                    name="surname"
                    required={true}
                    className="signupFirstname"
                    placeholder="Surname"
                  />
                </div>
              </div>
              <div className="signupBox">
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  required={true}
                  className="signupInput"
                  placeholder="Mobile Numer or Email Address"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  required={true}
                  className="signupInput"
                  placeholder="New Password"
                />
                <label htmlFor="dob">Date of birth</label>
                <input
                  name="dob"
                  onChange={handleChange}
                  required={true}
                  type="date"
                  className="signupInput"
                />

                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>

               </FormControl>
                <p  className="signupTerm">
                  By clicking Sign Up, you agree to our Terms, Data Policy and
                  Cookie Policy. You may receive SMS notifications from us and
                  can opt out at any time. Sign Up
                </p>

                <button type="submit" className="signupButton cursor">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

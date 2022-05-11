import "./register.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Register({setOpen}) {
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
              <div onClick={()=>setOpen(prev=>prev=false)} className="signupTopRight cursor">x</div>
            </div>
            <hr className="signupHr" />
            <div className="signupBottom">
              <div className="signupName">
                <input
                  type="text"
                  className="signupFirstname"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="signupFirstname"
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="signupBox">
              <input
                type="text"
                className="signupInput"
                placeholder="Mobile Numer or Email Address"
              />
              <input
                type="password"
                className="signupInput"
                placeholder="New Password"
              />
              <label htmlFor="dob">Date of birth</label>
              <input type="date" className="signupInput" />

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
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
              <p className="signupTerm">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive SMS notifications from us and can
                opt out at any time. Sign Up
              </p>

              <button className="signupButton cursor">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [id, setId] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [file, setFile] = useState("");

  const [fnameErr, setFnameErr] = useState(false);
  const [lnameErr, setLnameErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [address1Err, setAddress1Err] = useState(false);
  const [address2Err, setAddress2Err] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [zipErr, setZipErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [idErr, setIdErr] = useState(false);
  const [hobbiesErr, setHobbiesErr] = useState(false);
  const [fileErr, setFileErr] = useState(false);

  const checkFname = (e) => {
    const fname = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (fname.length < 3) {
      setFnameErr("minimum 3 character required");
    } else if (regExp.test(fname) === false) {
      setFnameErr("only alphabets are allowed");
    } else {
      setFnameErr(false);
    }
    setFname(fname);
  };

  const checkLname = (e) => {
    const lname = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (lname.length < 3) {
      setLnameErr("minimum 3 character required");
    } else if (regExp.test(lname) === false) {
      setLnameErr("only alphabets are allowed");
    } else {
      setLnameErr(false);
    }
    setLname(lname);
  };

  const checkGender = (e) => {
    let gender = e.target.value;
    var genderSelector = false;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].type === "radio" && gender[i].checked) {
        genderSelector = true;
      }
      if (!genderSelector) {
        setGenderErr(true);
      } else {
        setGenderErr(false);
      }
      setGender(gender);
    }
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExp.test(email) === false) {
      setEmailErr("invalid email address");
    } else {
      setEmailErr(false);
    }
    setEmail(email);
  };

  const checkDate = (e) => {
    const date = e.target.value;
    if (date === "mm / dd / yyyy") {
      setDateErr("please select date");
    } else {
      setDateErr(false);
    }
    setDate(date);
  };

  const checkPhone = (e) => {
    const phone = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(phone) === true) {
      setPhoneErr("only numbers are allowed ");
    } else if (phone.length < 10) {
      setPhoneErr("invalid phone number");
    } else {
      setPhoneErr(false);
    }
    setPhone(phone);
  };

  const checkAddress1 = (e) => {
    const address1 = e.target.value;
    if (address1.length < 40) {
      setAddress1Err("address should not preceed 40 character");
    } else if (address1.length > 60) {
      setAddress1Err("address should not exceed 60 character");
    } else {
      setAddress1Err(false);
    }
    setAddress1(address1);
  };

  const checkAddress2 = (e) => {
    const address2 = e.target.value;
    if (address2.length < 40) {
      setAddress2Err("address should not preceed 40 character");
    } else if (address2.length > 60) {
      setAddress2Err("address should not exceed 60 character");
    } else {
      setAddress2Err(false);
    }
    setAddress2(address2);
  };

  const checkCity = (e) => {
    const city = e.target.value;
    if (city === "--Select--") {
      setCityErr("please select your city");
    } else {
      setCityErr(false);
    }
    setCity(city);
  };

  const checkZip = (e) => {
    const zip = e.target.value;
    if (zip.length < 5) {
      setZipErr("invalid zip code");
    } else {
      setZipErr(false);
    }
    setZip(zip);
  };

  const checkState = (e) => {
    const state = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (state.length < 3) {
      setStateErr("minimum 3 character required");
    } else if (regExp.test(state) === false) {
      setStateErr("only alphabets are allowed");
    } else {
      setStateErr(false);
    }
    setState(state);
  };

  const checkId = (e) => {
    const id = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(id) === true) {
      setIdErr("only numbers are allowed ");
    } else if (id.length < 12) {
      setIdErr("invalid aadhaar number");
    } else {
      setIdErr(false);
    }
    setId(id);
  };

  const checkHobbies = (e) => {
    let hobbyList = [...hobbies];
    if (e.target.checked) {
      hobbyList = [...hobbies, e.target.value];
    } else {
      hobbyList.splice(hobbies.indexOf(e.target.value), 1);
    }
    setHobbies(hobbyList);
    if (!hobbyList) {
      setHobbiesErr(true);
    } else {
      setHobbiesErr(false);
    }
  };

  const checkFile = (e) => {
    const file = e.target.value;
    if (file === "") {
      setFileErr("please attach your document");
    } else {
      setFileErr(false);
    }
    setFile(file);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (
      fname.length === 0 ||
      lname.length === 0 ||
      gender.checked === 0 ||
      email.length === 0 ||
      date.length === 0 ||
      phone.length === 0 ||
      address1.length === 0 ||
      address2.length === 0 ||
      city.length === 0 ||
      zip.length === 0 ||
      state.length === 0 ||
      id.length === 0 ||
      hobbies.checked === 0 ||
      file.length === 0
    ) {
      setFnameErr("please enter your first name");
      setLnameErr("please enter your last name");
      setGenderErr("please select your gender");
      setEmailErr("please enter your email address");
      setDateErr("please select date");
      setPhoneErr("please enter your phone number");
      setAddress1Err("please enter your permanent address");
      setAddress2Err("please enter your secondary address");
      setCityErr("please select your city");
      setZipErr("please enter zipcode");
      setStateErr("please enter your state");
      setIdErr("please enter your aadhaar number");
      setHobbiesErr("please select your hobbies");
      setFileErr("please attach your document");
    }
    console.log(
      fname,
      lname,
      gender,
      email,
      date,
      phone,
      address1,
      address2,
      city,
      zip,
      state,
      id,
      hobbies,
      file
    );
  };

  return (
    <div className="p-4">
      <div className="container col-6 p-4">
        <form id="webform" onSubmit={formSubmit}>
          <div className="row p-2">
            <h3 className="d-flex justify-content-center p-2 pb-5">
              <b>
                <u>Web Application Form</u>
              </b>
            </h3>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className={
                  fnameErr ? "is-invalid form-control" : "form-control"
                }
                id="fname"
                placeholder="First Name"
                onChange={checkFname}
              />
              <span>{fnameErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className={
                  lnameErr ? "is-invalid form-control" : "form-control"
                }
                id="lname"
                placeholder="Last Name"
                onChange={checkLname}
              />
              <span>{lnameErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-check-label mb-2">Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender1"
                  name="radioption"
                  value="male"
                  onChange={checkGender}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender2"
                  name="radioption"
                  value="female"
                  onChange={checkGender}
                />
                <label className="form-check-label">Female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="gender3"
                  name="radioption"
                  value="transgender"
                  onChange={checkGender}
                />
                <label className="form-check-label">Transgender</label>
              </div>
              <span>{genderErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className={
                  emailErr ? "is-invalid form-control" : "form-control"
                }
                id="email"
                placeholder="E-mail"
                onChange={checkEmail}
              />
              <span>{emailErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className={dateErr ? "is-invalid form-control" : "form-control"}
                id="dob"
                onChange={checkDate}
              />
              <span>{dateErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className={
                  phoneErr ? "is-invalid form-control" : "form-control"
                }
                id="phone"
                maxLength="10"
                placeholder="Phone Number"
                onChange={checkPhone}
              />
              <span>{phoneErr}</span>
            </div>
            <div className="col-12 mb-4 p-1">
              <label className="form-label">Address 1</label>
              <input
                type="text"
                className={
                  address1Err ? "is-invalid form-control" : "form-control"
                }
                id="addr1"
                placeholder="Permanent Address"
                onChange={checkAddress1}
              />
              <span>{address1Err}</span>
            </div>
            <div className="col-12 mb-4 p-1">
              <label className="form-label">Address 2</label>
              <input
                type="text"
                className={
                  address2Err ? "is-invalid form-control" : "form-control"
                }
                id="addr2"
                placeholder="Secondary Address"
                onChange={checkAddress2}
              />
              <span>{address2Err}</span>
            </div>
            <div className="col-3 mb-4 p-1">
              <label className="form-label">City</label>
              <select
                className={cityErr ? "is-invalid form-select" : "form-select"}
                id="lname"
                onChange={checkCity}
              >
                <option defaultValue>--Select--</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Jammu</option>
              </select>
              <span>{cityErr}</span>
            </div>
            <div className="col-3 mb-4 p-1">
              <label className="form-label">Zip Code</label>
              <input
                type="text"
                className={zipErr ? "is-invalid form-control" : "form-control"}
                id="lname"
                placeholder="Zip Code"
                onChange={checkZip}
              />
              <span>{zipErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">State</label>
              <input
                type="text"
                className={
                  stateErr ? "is-invalid form-control" : "form-control"
                }
                id="lname"
                maxLength="20"
                placeholder="State"
                onChange={checkState}
              />
              <span>{stateErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-label">Unique ID (Aadhaar)</label>
              <input
                type="text"
                className={idErr ? "is-invalid form-control" : "form-control"}
                id="uid"
                maxLength="12"
                placeholder="Unique ID"
                onChange={checkId}
              />
              <span>{idErr}</span>
            </div>
            <div className="col-6 mb-4 p-1">
              <label className="form-check-label mb-2">Hobbies</label>
              <br />
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="hobby1"
                  name="checkboxoption"
                  value="music"
                  onChange={checkHobbies}
                />
                <label className="form-check-label">Music</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="hobby2"
                  name="checkboxoption"
                  value="Dance"
                  onChange={checkHobbies}
                />
                <label className="form-check-label">Dance</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="hobby3"
                  name="checkboxoption"
                  value="athletics"
                  onChange={checkHobbies}
                />
                <label className="form-check-label">Athletics</label>
              </div>
              <span>{hobbiesErr}</span>
            </div>
            <div className="col-12 mb-4 p-1">
              <label className="form-label">File</label>
              <input
                type="file"
                className={fileErr ? "is-invalid form-control" : "form-control"}
                id="lname"
                placeholder="Last Name"
                onChange={checkFile}
              />
              <span>{fileErr}</span>
            </div>
          </div>
          <div className=" d-flex justify-content-end">
            <input type="reset" className="btn btn-primary m-1" value="Reset" />
            <input
              type="submit"
              className="btn btn-primary m-1"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default App;

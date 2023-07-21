import { useState } from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";

export const SignInForm = () =>{
  const [candidateName, setCandidateName] = useState('');
  const [age, setAge] = useState('');
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [country, setCountry] = useState('');
  const [paymentReceived, setPaymentReceived] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Candidate Name:', candidateName);
    console.log('Age:', age);
    console.log('Course Name:', courseName);
    console.log('Duration:', duration);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Country:', country);
    console.log('Payment Received:', paymentReceived);
  };
  return(
    <> 
<div className="fix-here1">
<div className="fix-here">
<header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/" className="logo">
                  <img src="..\assets\images\BhashaLogo.png" alt="Bhasha"></img>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="\courses">courses</a>
                  </li>
                  
                  <li className="has-sub">
                    <a href="javascript:void(0)">Register</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="\signin">SignUP</a>
                      </li>
                      <li>
                        <a href="\signup">SignIp</a>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="scroll-to-section">
                    <a href="\">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
</div>

<div className="fix6">
<section className="heading-page header-text  fix-here3" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
             
              <h2> Register! </h2>
            </div>
          </div>
        </div>
      </section>
</div>
<br/>

 <div className="form-container ">
 {/*<div className="image-container">
        <img src="../assets/images/new1.jpg" alt="Form" className="form-image" />
  </div> */}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="form-group">
          <label htmlFor="candidateName">Candidate Name:</label>
          <input
            type="text"
            id="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
                  </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          >
            <option value="">Select Duration</option>
            <option value="10">10 days</option>
            <option value="15">15 days</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country to Apply For:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Received:</label>
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                checked={paymentReceived === 'yes'}
                onChange={() => setPaymentReceived('yes')}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={paymentReceived === 'no'}
                onChange={() => setPaymentReceived('no')}
                required
              />
              No
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    <div className="footer ">
          <p>
            Copyright © 2022 Jatin Sidana
            
           
          </p>
        </div>
    </> 
  )
}
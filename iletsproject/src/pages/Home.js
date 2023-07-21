import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Home = () => {
  const [formData, setFormData] = useState({
    name: "",

    email: "",
    number: "",
    message: "",
  });
  const nav = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wg4j37t",
        "template_03kaqns",
        form.current,
        "A6C69JLoTd1CoPmv-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setFormData({
            ...formData,
            name: "",
            email: "",
            number: "",
            message: "",
          });
          Swal.fire("Message Sent!", "", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* ***** Header Area Start ***** */}
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
                        <a href="\signin">SignUp</a>
                      </li>
                      <li>
                        <a href="\signup">SignIn</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
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
      {/* ***** Header Area End ***** */}
      {/* ***** Main Banner Area Start ***** */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay="" muted="" loop="" id="bg-video">
          <source src="assets/images/course-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Students</h6>
                  <h2>Welcome to Bhasha</h2>
                  <p>
                    Bhasha provides a digital platform for students to learn and
                    succeed in abroad competitive exams. Online classes are a
                    great way to make education accessible to everyone,
                    regardless of their location or circumstances.
                  </p>
                  <div className="main-button-red">
                    <div className="scroll-to-section">
                      <a href="#contact">Join Us Now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Main Banner Area End ***** */}

     <div className="container-head">
     <h2>Our Popular Courses</h2>
     </div>
     <div className="card-container">
      <div className="cardone">
      <div className="card-img card1-image">
       <img src="assets/images/ieltstransparent.svg" alt="Course One"/>
      </div>
      <div className="card-tittle">
      <h3>ILETS</h3>
      </div>
      <div className="card-content">
        <p>International English Language Testing System</p>
      </div>
      <div className="card1-footer">
           <span>Rs. 1200</span>
          
           <button className="card-btn"> 
           <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
                    </svg>
           </button>
      </div>
      <div className="knowmore">
      <span className="spcss"> <a className="acss" href="/ilets">Know More</a></span>
      </div>
      </div>

      <div className="cardone">
      <div className="card-img">
       <img src="assets/images/ptetransparent.svg" alt="Course One"/>
      </div>
      <div className="card-tittle">
      <h3>PTE</h3>
      </div>
      <div className="card-content">
        <p>Pearson's Test of English</p>
      </div>
      <div className="card1-footer">
           <span>Rs. 1200</span>
          
           <button className="card-btn"> 
           <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
                    </svg>
           </button>
      </div>
      <span className="spcss"> <a className="acss" href="/ptecourse">Know More</a></span>

      </div>
      <div className="cardone">
      <div className="card-img ">
       <img src="assets/images/toefltransparent.svg" alt="Course One"/>
      </div>
      <div className="card-tittle">
      <h3>TOEFL</h3>
      </div>
      <div className="card-content">
        <p>   Test of English as a Foreign Language</p>
      </div>
      <div className="card1-footer">
           <span>Rs. 1200</span>
          
           <button className="card-btn"> 
           <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
                    </svg>
           </button>
      </div>
      <span className="spcss"> <a className="acss" href="/toeflcourse">Know More</a></span>

      </div>

     </div>
      {/* new component added */}
      <main className="newcss">
        <div className="container py-4 ">
          <div className="p-5 mb-4 bg-light rounded-3 newd">
            <div className="container-fluid py-5 new-d newbi">
              <h1 className="display-5 fw-bold new-head">
                MORE ABOUT BHASHA!!
              </h1>
              <p className="col-md-8 fs-4 newp">
                By offering classes online, Bhasha is helping students learn and
                prepare for their exams from the comfort of their own homes,
                without having to worry about commuting or finding a physical
                classroom. This can be especially beneficial for international
                students who may not have access to in-person classes or may
                have difficulty adjusting to a new environment. Overall,
                Bhasha's focus on providing hassle-free, online learning
                opportunities which is a great step towards making education
                more accessible and inclusive for all.
              </p>
              <button
                className="btn btn-primary btn-lg new-btn"
                type="button"
                onFocus={() => {
                  nav("/about");
                }}
              >
                Know More
              </button>
            </div>
          </div>
          {/*  <div className="row align-items-md-stretch chcolour">
            <div className="col-md-6">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Change the background</h2>
                <p className="pcolour">
                  Swap the background-color utility and add a `.text-*` color utility
                  to mix up the jumbotron look. Then, mix and match with additional
                  component themes and more.
                </p>
                <button className="btn btn-outline-light" type="button">
                  Example button
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Add borders</h2>
                <p>
                  Or, keep it light and add a border for some added definition to the
                  boundaries of your content. Be sure to look under the hood at the
                  source HTML here as we've adjusted the alignment and sizing of both
                  column's content for equal-height.
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Example button
                </button>
              </div>
            </div>
          </div>
                       */}
        </div>
      </main>

      {/*end */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form
                    id="contact"
                    action=""
                    method="post"
                    name="contact"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="YOURNAME...*"
                            required=""
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              });
                            }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="YOUR EMAIL..."
                            required=""
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              });
                            }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="custphone"
                            type="text"
                            id="subject"
                            placeholder="PHONE...*"
                            required=""
                            value={formData.number}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                number: e.target.value,
                              });
                            }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="YOUR MESSAGE..."
                            required=""
                            defaultValue={""}
                            value={formData.message}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              });
                            }}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="button"
                          >
                            SEND MESSAGE NOW
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <ul>
                  <li>
                    <h6>Phone Number</h6>
                    <span>+91-9324265667</span>
                    <span>+91-9915846353</span>
                  </li>
                  <li>
                    <h6>Email Address</h6>
                    <span>bhasha52india@gmail.com</span>
                  </li>
                  {/* <li>
                    <h6>Street Address</h6>
                    <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                  </li>
                  <li>
                    <h6>Website URL</h6>
                    <span>www.meeting.edu</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            Copyright © 2022  Jatin Sidana
          
          </p>
        </div>
      </section>
    </>
  );
};

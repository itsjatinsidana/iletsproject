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
                    <a href="javascript:void(0)">Sign up</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="\signin">SignIn</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">SignUp</a>
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

      <section className="upcoming-meetings" id="meetings">
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 cardflex">
                <div className="item">
                  <div className="icon">
                    <img src="..\assets\images\service-icon-01.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>FREE DEMO CLASSES</h4>
                    <p>
                     Register with Bhasha for a free demo class. 
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="../assets/images/service-icon-02.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>MOCK TEST EVALUATION</h4>
                    <p>
                    Running a mock test gives your learners a true exam day experience, helps you understand their progress and decide if they are ready for their exam.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="../assets/images/service-icon-03.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>MODULE-WISE LEARNING</h4>
                    <p>
                    Module-wise Modules are routinely refreshed to keep up the uniqueness of the educational program. Students can register for the unique concepts.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <img src="../assets/images/service-icon-04.png" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>SPEAKING MOCK TEST PRACTISE</h4>
                    <p>
                    Answering practise speaking questions of our courses is one of the best way to prepare for your test.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Courses to Offer</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>List of Courses</h4>
                <ul>
                  <li>
                    <a href="#">IELTS</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">PTE</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">OET</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">DTE</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">TOEFL</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">SPOKEN ENGLISH (BASICS/ADVANCED)</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">FRENCH</a>
                  </li>
                </ul>
                <div className="main-button-red">
                  <a href="meetings.html">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$22.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-01.jpg"
                          alt="New Lecturer Meeting"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>10</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>New Lecturers Meeting</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$36.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-02.jpg"
                          alt="Online Teaching"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>24</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Online Teaching Techniques</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-03.jpg"
                          alt="Higher Education"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>26</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Higher Education Conference</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$48.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-04.jpg"
                          alt="Student Training"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>30</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Student Training Meetup</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section className="our-courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading second-card1">
                <h2>Our Popular Courses</h2>
              </div>
            </div>

            <div className="col-lg-12 second-card">
            <div className="card">
                 <div className="card-img">
                 <img src="assets/images/ieltstransparent.svg" alt="Course One" />
                  
                </div> 
                <div className="card-title">IELTS</div>
                <div className="card-subtitle">
                  International English Language Testing System
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> 123.45
                  </div>
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
              </div>

              <div className="card">
                 <div className="card-img">
                 <img src="assets/images/ptetransparent.svg" alt="Course One" />
                  
                </div> 
                <div className="card-title">PTE</div>
                <div className="card-subtitle">
                  Pearson's Test of English
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> 123.45
                  </div>
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
              </div>

              <div className="card">
                 <div className="card-img">
                 <img src="assets/images/toefltransparent.svg" alt="Course One" />
                  
                </div> 
                <div className="card-title">TOEFL</div>
                <div className="card-subtitle">
                Test of English as a Foreign Language
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> 123.45
                  </div>
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
              </div>

              {/* <div className="card">
                <div className="card-img">
                  <img src="assets/images/ieltshome.svg" alt="Course One" />
                </div>
                <div className="card-title">Product title</div>
                <div className="card-subtitle">
                  Product description. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> 123.45
                  </div>
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
              </div> */}

              {/* <div className="card">
                <div className="card-img">
                  <img src="assets/images/ieltshome.svg" alt="Course One" />
                </div>
                <div className="card-title">Product title</div>
                <div className="card-subtitle">
                  Product description. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> 123.45
                  </div>
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
              </div> */}
              {/* <div className="plan-card">
                <img src="assets/images/ieltshome.svg" alt="Course One" />
                <h2>
                  Business<span>For business services</span>
                </h2>
                <div className="etiquet-price">
                  <p>254.99</p>
                  <div />
                </div>
                <div className="benefits-list">
                  <ul>
                    <li>
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                      </svg>
                      <span>Analysis</span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                      </svg>
                      <span>Consulting</span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                      </svg>
                      <span>Facilitate</span>
                    </li>
                  </ul>
                </div>
                <div className="button-get-plan">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-rocket"
                    >
                      <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                    </svg>
                    <span>START PROJECT</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
         
        </div>
        <br/>
        <br/>
        <div className="col-lg-12" align="center">
                  <div className="main-button-red">
                    <a href="/courses">Explore More!</a>
                  </div>
                </div>
      </section>

      <section className="our-facts ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <h2>A Few Facts About Our University</h2>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content percentage">
                        <div className="count-digit">94</div>
                        <div className="count-title">Succesed Students</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">126</div>
                        <div className="count-title">Current Teachers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">2345</div>
                        <div className="count-title">New Students</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">32</div>
                        <div className="count-title">Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="video">
                <a
                  href="https://www.youtube.com/watch?v=HndV87XpkWg"
                  target="_blank"
                >
                  <img src="assets/images/play-icon.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
            <br />
            Design:{" "}
            <a
              href="https://templatemo.com"
              target="_parent"
              title="free css templates"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

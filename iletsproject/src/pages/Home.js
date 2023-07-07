
import { useNavigate } from "react-router-dom";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    
    email: '',
    number:'',
    message: '',
  });
  const nav = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wg4j37t', 'template_03kaqns', form.current, 'A6C69JLoTd1CoPmv-')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setFormData({...formData, name: '', email: '', number: '', message: ''})
          Swal.fire('Message Sent!','','success');
      }, (error) => {
          console.log(error.text);
      });
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
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
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
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
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
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
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
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
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
              <div className="item">
                <img src="assets/images/ieltshome.svg" alt="Course One" />
                <div className="down-content">
                  <h4>IELTS</h4>
                  <div className="info">
                    <div className="row">
                      <div className="col-8">
                        <ul>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>$160</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="assets/images/ptehome.svg" alt="Course Two" />
                <div className="down-content">
                  <h4>PTE</h4>
                  <div className="info">
                    <div className="row">
                      <div className="col-8">
                        <ul>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>$180</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <img src="assets/images/toeflhome.svg" alt="Course Two" />
                <div className="down-content">
                  <h4>TOEFL</h4>
                  <div className="info">
                    <div className="row">
                      <div className="col-8">
                        <ul>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <span>$180</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <form id="contact" action="" method="post"name="contact" ref={form} onSubmit={sendEmail}>
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
                            value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); }}/>
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
                            value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); }}/>
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
                            value={formData.number} onChange={e => { setFormData({...formData, number: e.target.value}); }}/>
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
                            value={formData.message} onChange={e => { setFormData({...formData, message: e.target.value}); }} />
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

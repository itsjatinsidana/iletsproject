export const CourseDetail = () => {
  return (
    <>
      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="\" className="logo">
                  <img src="..\assets\images\BhashaLogo.png" alt="Bhasha"></img>
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <a href="\">Home</a>
                  </li>
                  <li>
                    <a href="\courses" className="active">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="\coursedetail">Course Details</a>
                  </li>
                  <li className="has-sub">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">Upcoming Meetings</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Meeting Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html">Courses</a>
                  </li>
                  <li>
                    <a href="index.html">Contact Us</a>
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
      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Get all details</h6>
              <h2>Online Teaching and Learning Tools</h2>
            </div>
          </div>
        </div>
      </section>
      
      <section className="meetings-page" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="assets/images/ieltscd.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <h2>Why Take IELTS??</h2>

                      <p>
                        <b>
                          Know the top benefits of taking the IELTS testKnow the
                          top benefits of taking the IELTS test.
                        </b>{" "}
                        <br /> While moving to a native English-speaking nation
                        for studying, working, or migrating, candidates are
                        required to demonstrate that they understand the English
                        language. The idea is to prove that they will be able to
                        manage day-to-day activities abroad. For this purpose,
                        IELTS or the International English Language Testing
                        System, has been relied on by students, aspiring
                        migrants, and job seekers for more than 30 years. This
                        test is consistently candidates’ top choice. Here is
                        what makes it so popular:
                      </p>
                     

                      <div className="why_ielts_tp">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img src="../assets/images/img1.svg" alt="" />
                              <h4>Accessibility </h4>
                              <p>
                          The IELTS test is available in more than 140
                          countries. No matter where you are from, an IELTS test
                          centre is never far away.
                        </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img src="../assets/images/img2.svg" alt="" />
                              <h4>Accuracy-</h4>
                              <p>
                          The IELTS grading mechanism ensures that all tests are
                          scored fairly and accurately. From detailed exam
                          design and development to validation, IELTS tests go
                          through arigorous process.
                        </p> 
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img src="../assets/images/img3.svg" alt="" />
                              <h4>Acceptance-</h4>
                              <p>
                          Did you know that IELTS is the only English language
                          test recognised by the world's top 50 universities?
                          IELTS is recognised as a true indication of English
                          language skills by over 11,000 organisations
                          throughout the world.
                        </p>

                            </div>
                          </div>
                        </div>
                        <div className="row div_center">
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img width="10%" src="../assets/images/img4.svg" alt="" />
                              <h4>Adds weight-</h4>
                              <p>
                          IELTS might be a quick way to add crucial points to
                          your application for several permanent residency (PR)
                          possibilities. For example, to receive 20 points for
                          work experience, Subclass190 (Skilled Nominated
                          category) requires at least 8 years of skilled
                          employment in Australia.
                        </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img src="../assets/images/img5.svg" alt="" />
                              <h4>Opportunities-</h4>
                              <p>
                          As you begin your journey into the English-speaking
                          world, IELTS will serve as your springboard to further
                          achievement.
                        </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-lg-4">
                          <div className="hours">
                            <h5>Hours</h5>
                            <p>
                              Monday - Friday: 07:00 AM - 13:00 PM
                              <br />
                              Saturday- Sunday: 09:00 AM - 15:00 PM
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="location">
                            <h5>Location</h5>
                            <p>
                              Recreio dos Bandeirantes,
                              <br />
                              Rio de Janeiro - RJ, 22795-008, Brazil
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="book now">
                            <h5>Book Now</h5>
                            <p>
                              010-020-0340
                              <br />
                              090-080-0760
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="share">
                            <h5>Share:</h5>
                            <ul>
                              <li>
                                <a href="#">Facebook</a>,
                              </li>
                              <li>
                                <a href="#">Twitter</a>,
                              </li>
                              <li>
                                <a href="#">Linkedin</a>,
                              </li>
                              <li>
                                <a href="#">Behance</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button-red">
                    <a href="/courses">Back To Meetings List</a>
                  </div>
                </div>
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

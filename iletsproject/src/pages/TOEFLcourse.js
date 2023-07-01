export const TOEFLcourse = () => {
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
                        <img src="assets/images/toeflcd.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <h2>THE TOEFL IBT TEST</h2>
                      <p>
                        <b>(Accepted and Preferred Worldwide)</b> <br />
                        <h5>
                          {" "}
                          The TOEFL iBT ® test helps you show how well you
                          communicate in English to universities all around the
                          world. The TOEFL iBT ® test is recognized by more than
                          11,500+ universities in over 160 countries worldwide
                          including USA, UK, Canada, Australia, New Zealand and
                          across Europe and Asia.
                        </h5>
                      </p>
                      <figure className="text-center">
                        <blockquote className="blockquote">
                          <br />
                          <br />
                          <h2>Use the TOEFL test for:-</h2>
                        </blockquote>

                        <figure className="text-center">
                          <blockquote className="blockquote"></blockquote>
                        </figure>
                      </figure>
                      <section className="apply-now" id="apply">
                        <div className="container">
                          <div className="col">
                            <div className="col-lg-6 align-self-center">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="item">
                                    <h2>1. ADMISSIONS</h2>

                                    {/* <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="item">
                                    <h2>2. SCHOLARSHIPS</h2>

                                    {/* <div className="main-button-yellow">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-6 align-self-center">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="item">
                                        <h2>3. VISA APPLICATIONS</h2>

                                        {/* <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="item">
                                        <h2>4. IMMIGRATION</h2>

                                        {/* <div className="main-button-yellow">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="section-heading2">
                        <h2>WHAT'S ON THE TEST?</h2>
                      </div>
                      <div className="why_ielts_tp">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img
                                src="../assets/images/part3icons.svg"
                                alt=""
                              />
                              <h4>Part 1: Speaking & Writing </h4>
                              <p>
                                This part of the test contains seven different
                                question types. You will be tested on both your
                                speaking and writing skills, and will use
                                English you might hear in an academic
                                environment.
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img
                                src="../assets/images/part2icons.svg"
                                alt=""
                              />
                              <h4>Reading</h4>
                              <p>
                                This part of the test contains five different
                                question types, and tests your ability to read
                                academic English. One item type assesses both
                                writing and reading skills.
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="why_ielts_bx">
                              <img
                                src="../assets/images/3particon.svg"
                                alt=""
                              />
                              <h4>Listening</h4>
                              <p>
                                This part of the test contains eight question
                                types and tests your listening skills, through a
                                series of audio and video clips.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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

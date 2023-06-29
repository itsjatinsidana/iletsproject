export const CourseDetail = () =>{
    return(
        <>
        
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="\" className="logo">
                  <img
                    src="..\assets\images\BhashaLogo.png"
                    alt="Bhasha"
                  ></img>
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
                      <a href="\coursedetail">course detail</a>
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
                          <img src="assets/images/single-meeting.jpg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="meeting-details.html">
                          <h4>IELTS</h4>
                        </a>
                        <p>
                          Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008,
                          Brazil
                        </p>
                        <p className="description">
                          This is an edu meeting HTML CSS template provided by{" "}
                          <a
                            href="https://templatemo.com/"
                            target="_blank"
                            rel="nofollow"
                          >
                            TemplateMo website
                          </a>
                          . This is a Bootstrap v5.1.3 layout. If you need more free
                          website templates like this one, please visit our website
                          TemplateMo. Please tell your friends about our website.
                          Thank you. If you want to get the latest collection of HTML
                          CSS templates for your websites, you may visit{" "}
                          <a
                            rel="nofollow"
                            href="https://www.toocss.com/"
                            target="_blank"
                          >
                            Too CSS website
                          </a>
                          . If you need a working contact form script, please visit{" "}
                          <a href="https://templatemo.com/contact" target="_parent">
                            our contact page
                          </a>{" "}
                          for more info.
                          <br />
                          <br />
                          You are allowed to use this edu meeting CSS template for
                          your school or university or business. You can feel free to
                          modify or edit this layout. You are not allowed to
                          redistribute the template ZIP file on any other template
                          website. Please contact us for more information.
                        </p>
                        <div className="row">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="main-button-red">
                      <a href="meetings.html">Back To Meetings List</a>
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
      
    )
}
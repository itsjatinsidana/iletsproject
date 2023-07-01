export const Home = () => {
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
                  <img
                    src="..\assets\images\BhashaLogo.png"
                    alt="Bhasha"
                  ></img>
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
                  <li className="scroll-to-section">
                    <a href="\coursedetail">coursedetail</a>
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
        <div className="container">
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
                  <br/>
                  <li>
                    <a href="#">PTE</a>
                  </li>
                  <br/>
                  <li>
                    <a href="#">OET</a>
                  </li>
                  <br/>
                  <li>
                    <a href="#">DTE</a>
                  </li>
                  <br/>
                  <li>
                    <a href="#">TOEFL</a>
                  </li>
                  <br/>
                  <li>
                    <a href="#">SPOKEN ENGLISH (BASICS/ADVANCED)</a>
                  </li>
                  <br/>
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
        </div>
      </section>
      <section className="apply-now" id="apply">
        <div className="container">
          <div className="col">
            <div className="col-lg-6 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="item">
                    <h3>FREE DEMO CLASSES</h3>
                   
                    <img 
                    src="..\assets\images\download1F.png"
                    alt="Free Demo Classes"
                  ></img>
                  
                  
                    {/* <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <h3>MODULE-WISE LEARNING</h3>
                    <img 
                    src="..\assets\images\download2.png"
                    alt="Module-Wise Learning"
                  ></img>
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
                    <h3>SPEAKING MOCK TEST PRACTISE </h3>
                    <img 
                    src="..\assets\images\download3.png"
                    alt="Module-Wise Learning"
                  ></img>
                    {/* <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <h3>MOCK TEST EVALUATION</h3>
                    <img 
                    src="..\assets\images\download4.png"
                    alt="Module-Wise Learning"
                  ></img>
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
      <section className="our-courses" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Popular Courses</h2>
              </div>
            </div>
            <div className="col-lg-12">
            <div className="owl-courses-item owl-carousel">
                <div className="item">
                  <img src="assets/images/course-01.jpg" alt="Course One" />
                  <div className="down-content">
                    <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
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
                  <img src="assets/images/course-02.jpg" alt="Course Two" />
                  <div className="down-content">
                    <h4>Curabitur molestie dignissim purus vel</h4>
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
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Nulla at ipsum a mauris egestas tempor</h4>
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
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$140</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div className="down-content">
                    <h4>Aenean molestie quis libero gravida</h4>
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
                          <span>$120</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
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
                          <span>$250</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>TemplateMo is the best website for Free CSS</h4>
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
                          <span>$270</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Web Design Templates at your finger tips</h4>
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
                          <span>$340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div className="down-content">
                    <h4>Please visit our website again</h4>
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
                          <span>$360</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Responsive HTML Templates for you</h4>
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
                          <span>$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>Download Free CSS Layouts for your business</h4>
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
                          <span>$430</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>Morbi in libero blandit lectus cursus</h4>
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
                          <span>$480</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src="assets/images/course-04.jpg" alt="" />
                  <div className="down-content">
                    <h4>Curabitur molestie dignissim purus</h4>
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
                          <span>$560</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-facts">
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
  <div className="container py-4">
    
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
    <div className="row align-items-md-stretch chcolour">
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
    
  </div>
</main>

      {/*end */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 align-self-center">
              <div className="row">
                <div className="col-lg-12">
                  <form id="contact" action="" method="post">
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

import { Navbar } from "../component/Navbar";

export const Courses = () => {
  return (
    <>
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
                  <li>
                    <a href="\">Home</a>
                  </li>
                  <li>
                    <a href="\couses" className="active">
                      courses
                    </a>
                  </li>

                  <li className="has-sub">
                    <a href="javascript:void(0)">signup</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="\signin">signin</a>
                      </li>
                      <li>
                        <a href="\signup">signup</a>
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
              <h2>Courses to Offer!!</h2>
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
                  <div className="filters">
                    <ul>
                      <li data-filter="*" className="active">
                        All Meetings
                      </li>
                      <li data-filter=".soon">Soon</li>
                      <li data-filter=".imp">Important</li>
                      <li data-filter=".att">Attractive</li>
                    </ul>
                  </div>
                </div>

                {/* cards */}
                <div className="flcss">
                  <div className="col-lg-12 second-card">
                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/ieltstransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">IELTS</div>
                      <div className="card-subtitle">IELTS (10 DAYS)</div>

                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 3500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ilets">
                          Know More
                        </a>
                      </span>
                    </div>
                    <div className="card">
                      <div className="card-img">
                        <img src="assets/images/SEtrans.svg" alt="Course One" />
                      </div>
                      <div className="card-title">SPOKEN</div>
                      <div className="card-subtitle">
                        SPOKEN ENGLISH (10 DAYS)
                      </div>

                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 3500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/spoken">
                          Know More
                        </a>
                      </span>
                    </div>
                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/DUOtrans.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">DUOLINGO </div>
                      <div className="card-subtitle">DUOLINGO (10 DAYS)</div>

                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 50000
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/duolingocourse">
                          Know More
                        </a>
                      </span>
                    </div>

                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/ptetransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">PTE</div>
                      <div className="card-subtitle">PTE (10 DAYS)</div>
                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 4500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ptecourse">
                          Know More
                        </a>
                      </span>
                    </div>

                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/toefltransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">TOEFL</div>
                      <div className="card-subtitle">TOEFL (10 DAYS)</div>
                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 3500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/toeflcourse">
                          Know More
                        </a>
                      </span>
                    </div>
                   
                  </div>
                  <br/>
                <br/>
                </div>
               

                <div className="flcss">
                  <div className="col-lg-12 second-card">
                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/ieltstransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">IELTS</div>
                      <div className="card-subtitle">IELTS (30 DAYS)</div>

                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 10500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ilets">
                          Know More
                        </a>
                      </span>
                    </div>

                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/ieltstransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">IELTS</div>
                      <div className="card-subtitle">IELTS (2 MONTHS)</div>

                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 16000
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ilets">
                          Know More
                        </a>
                      </span>
                    </div>

                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/ptetransparent.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">PTE</div>
                      <div className="card-subtitle">PTE (30 DAYS)</div>
                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 9500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ptecourse">
                          Know More
                        </a>
                      </span>
                    </div>

                    <div className="card">
                      <div className="card-img">
                        <img
                          src="assets/images/together.svg"
                          alt="Course One"
                        />
                      </div>
                      <div className="card-title">SPOKEN ENGLISH + IELTS</div>
                      <div className="card-subtitle">IELTS AND SE COMBINED (10 DAYS)</div>
                      <hr className="card-divider" />

                      <div className="card-footer">
                        <div className="card-price">
                          <span>Rs.</span> 5500
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
                      <span className="spcss">
                        {" "}
                        <a className="acss" href="/ptecourse">
                          Know More
                        </a>
                      </span>
                    </div>

                    </div>
                    </div>

                <div className="col-lg-12">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
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
              href="https://templatemo.com/page/1"
              target="_parent"
              title="website templates"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

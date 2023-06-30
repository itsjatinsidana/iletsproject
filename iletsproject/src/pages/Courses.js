import { Navbar } from "../component/Navbar"

export const Courses = () =>{
    return(
       
        <>
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
              <li>
                <a href="\">Home</a>
              </li>
              <li>
                <a href="\couses" className="active">
                  courses
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
          <h6>Here are our upcoming meetings</h6>
          <h2>Upcoming Meetings</h2>
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
            <div className="col-lg-12">
              <div className="row grid">
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      
                      <a href="meeting-details.html">
                        <img src="assets/images/ieltsFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      
                      <a href="/CourseDetail">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                     
                      <a href="meeting-details.html">
                        <img src="assets/images/pteFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="/PTEcourse">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      
                      <a href="meeting-details.html">
                        <img src="assets/images/toeflFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="meeting-details.html">
                        <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                     
                      <a href="meeting-details.html">
                        <img src="assets/images/frenchFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="meeting-details.html">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                     
                      <a href="meeting-details.html">
                        <img src="assets/images/oetFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="meeting-details.html">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      
                      <a href="meeting-details.html">
                        <img src="assets/images/spokenenglishFinal.png" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="meeting-details.html">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp att">
                  <div className="meeting-item">
                    <div className="thumb">
                     
                      <a href="meeting-details.html">
                        <img src="assets/images/meeting-01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                     
                      <a href="meeting-details.html">
                      <h2>Know More!</h2>
                      </a>
                     
                    </div>
                  </div>
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

        
    )
}
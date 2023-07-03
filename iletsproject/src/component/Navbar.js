export const Navbar = () =>{
    return(
        <>
       
         <header className="header-area header-sticky ">
        <div className="container navbar">
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
                    <a href="\" className="active">
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
      
        </>
    )
}
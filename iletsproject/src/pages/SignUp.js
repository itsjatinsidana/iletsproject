import { Form } from "react-router-dom";
import { Footer } from "../component/Footer";

export const SignUp = () => {
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
                
                  <li className="has-sub">
                    <a href="javascript:void(0)">Register</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="\signin">SignUP</a>
                      </li>
                      <li>
                        <a href="\signup">SignIn</a>
                      </li>
                    </ul>
                  </li>
                  
                  <li>
                    <a href="\">Contact Us</a>
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
              <h6>  </h6>
              <h2> Sign In </h2>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <br/>
      <br/>
      
           <div className="signin-container">
      <form className="formSI cardSI">
        <div className="card_headerSI">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            />
          </svg>
          <h1 className="form_headingSI">Sign in</h1>
        </div>
        <div className="fieldSI">
          <label htmlFor="username">Username</label>
          <input
            className="inputSI"
            name="username"
            type="text"
            placeholder="Username"
            id="username"
          />
        </div>
        <div className="fieldSI">
          <label htmlFor="password">Password</label>
          <input
            className="inputSI"
            name="user_password"
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="fieldSI">
          <button className="button">Login</button>
        </div>
        
      </form>
      </div>
     <Footer/>
    </>
  );
};

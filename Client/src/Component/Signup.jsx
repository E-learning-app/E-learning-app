import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#D3D3D3' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://img.freepik.com/photos-gratuite/jeune-homme-etudiant-dans-bibliotheque-aide-ordinateur-portable_23-2149285400.jpg?size=626&ext=jpg&ga=GA1.2.1345089941.1696063536&semt=sph"
                    alt="signup form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fas fa-book-open fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Welcome to E-LEARNING</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Create your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input type="text" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">
                          First name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">
                          Last name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                      <Link to="/"><button className="btn btn-dark btn-lg btn-block" type="button" style={{ backgroundColor: '#ff6219' }}> Signup
                        </button></Link>
                      </div>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Signup;
      {/* <label htmlFor="firstname">Firstname:</label>
      <input type="text" name="firstname" placeholder="enter your firstname" />  
      <label htmlFor="lastname">Lastname:</label>
      <input type="text" name="lastname" placeholder="enter your lastname" />  
      <label htmlFor="email">Username:</label>
      <input type="text" name="username" placeholder="enter your username" />  
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="enter your email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" placeholder="enter your password"/>
      <button type="submit"><Link to="/">Login</Link></button>
    </div> */}
import React, { Component } from "react";

class SignUp extends Component {
  state = {
    modalIsOpen: false,
    nameError: "",
    phoneError: ""
  };

  ValidateName = e => {
    let nameregex = /^[a-zA-Z]{3,}$/;
    return !nameregex.test(e.target.value)
      ? this.setState({ nameError: "Enter a valid name" })
      : this.setState({ nameError: "" });
  };
  ValidatePhone = e => {
    let phoneregex = /^[0-9]{8}$/;
    return !phoneregex.test(e.target.value)
      ? this.setState({ phoneError: "Enter a valid name" })
      : this.setState({ phoneError: "" });
  };
  render() {
    return (
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">Registration</li>
        </ol>
        <article className="col-xs-12 maincontent">
          <header className="page-header">
            <h1 className="page-title">Registration</h1>
          </header>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3 className="thin text-center">Register a new account</h3>
                <p className="text-center text-muted">
                  Lorem ipsum dolor sit amet, <a href="signin.html">Login</a>{" "}
                  adipisicing elit. Quo nulla quibusdam cum doloremque incidunt
                  nemo sunt a tenetur omnis odio.{" "}
                </p>
                <hr />
                <form>
                  <div className="top-margin">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="top-margin">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="top-margin">
                    <label>
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="row top-margin">
                    <div className="col-sm-6">
                      <label>
                        Password <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8">
                      <label className="checkbox">
                        <input type="checkbox" />
                        I've read the{" "}
                        <a href="page_terms.html">Terms and Conditions</a>
                      </label>
                    </div>
                    <div className="col-lg-4 text-right">
                      <button className="btn btn-action" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default SignUp;

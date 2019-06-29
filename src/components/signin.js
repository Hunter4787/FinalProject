import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <ol className="breadcrumb">
          <li className="active">Accée utilisateur</li>
        </ol>
        <div className="row">
          <article className="col-xs-12 maincontent">
            <header className="page-header">
              <h1 className="page-title">Se connecter</h1>
            </header>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="thin text-center">
                    Se connecter a mon compte
                  </h3>
                  <p className="text-center text-muted">
                    Si vous n'avez pas encore du compte,{" "}
                    <a href="signup.html">Inscrier</a> vous sur notre platforme
                    et accedez a tous nous services, ou proposer vos services{" "}
                  </p>
                  <hr />
                  <form>
                    <div className="top-margin">
                      <label>
                        Pseudo/Email <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="top-margin">
                      <label>
                        Mot de passe <span className="text-danger">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-lg-6">
                        <b>
                          <a href>Mot de passe oubliée?</a>
                        </b>
                      </div>
                      <div className="col-lg-4 text-right">
                        <button className="btn btn-action" type="submit">
                          Se connecter
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default SignIn;

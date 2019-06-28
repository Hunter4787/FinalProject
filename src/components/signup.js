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
          <li className="active">S'inscrire</li>
        </ol>
        <article className="col-xs-12 maincontent">
          <header className="page-header">
            <h1 className="page-title">S'inscrire</h1>
          </header>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <h3 className="thin text-center">
                  Inscrivez-vous sur San3a.tn
                </h3>
                <p className="text-center text-muted">
                  Si vous etes deja membre, <a href="signin.html">connectez</a>{" "}
                  vous et lancer votre recherche de bricoleur ou du travail sur
                  notre platforme.{" "}
                </p>
                <hr />
                <form>
                  <div className="top-margin">
                    <label>Prenom</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="top-margin">
                    <label>Nom</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="top-margin">
                    <label>
                      Addresse mail <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="row top-margin">
                    <div className="col-sm-6">
                      <label>
                        Mot de passe <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                      <label>
                        Confirmer Mot de passe <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-lg-8">
                      <label className="checkbox">
                        <input type="checkbox" />
                        J'ai lus les{" "}
                        <a href="page_terms.html">Termes et Conditions</a>
                      </label>
                    </div>
                    <div className="col-lg-4 text-right">
                      <button className="btn btn-action" type="submit">
                        S'inscrire
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

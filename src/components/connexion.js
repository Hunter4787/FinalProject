import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Conexion extends Component {
  state = {
    modalIsOpen: false,
    nameError: "",
    phoneError: ""
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
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
      <div className="modal-container">
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form name="validationk">
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
            <div className="login-wrap">
              <div className="login-html">
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Se connecter
                </label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Inscription
                </label>
                <div className="login-form">
                  <div className="sign-in-htm">
                    <div className="group">
                      <label htmlFor="user" className="label">
                        Pseudo
                      </label>
                      <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">
                        Mot de Passe
                      </label>
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                      />
                    </div>
                    <div className="group">
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="check">
                        <span className="icon" /> Gardez-moi connecté
                      </label>
                    </div>
                    <div className="group row">
                      <input
                        type="button"
                        className="button col-lg-6 col-sm-12"
                        defaultValue="Se connecter"
                        onclick="conct()"
                      />
                      <input
                        type="button"
                        className="button  col-lg-6 col-sm-12"
                        defaultValue="retour"
                        onClick={this.closeModal}
                      />
                    </div>
                    <div className="hr" />
                  </div>
                  <div className="sign-up-htm">
                    <div className="group">
                      <label htmlFor="userup" className="label">
                        Pseudo
                      </label>
                      <input
                        id="userup"
                        name="fname"
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="address" className="label">
                        Adresse
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="tel" className="label">
                        Telephone
                      </label>
                      <input
                        id="tel"
                        type="text"
                        name="tel"
                        className="input"
                        maxLength="8"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="passup" className="label">
                        Mot de Passe
                      </label>
                      <input
                        id="passup"
                        name="Password"
                        type="password"
                        className="input"
                        data-type="password"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="mail" className="label">
                        {" "}
                        Adresse mail
                      </label>
                      <input
                        id="mail"
                        name="E-mail"
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group row">
                      <input
                        type="button"
                        className="button col-lg-6"
                        defaultValue="s'inscrire"
                      />
                      <input
                        type="button"
                        className="button  col-lg-6"
                        defaultValue="retour"
                        onClick={this.closeModal}
                      />
                    </div>
                    <div className="hr" />
                    <div className="foot-lnk">
                      <label htmlFor="tab-1">Déjà membre?</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Conexion;

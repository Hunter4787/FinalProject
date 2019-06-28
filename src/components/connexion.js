import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline
} from "mdbreact";

class Conexion extends Component {
  state = {
    collapseID: "",
    nameError:"",
    phoneError:"",
    
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
    ValidateName = (e) => {
        let nameregex= /^[a-zA-Z]{3,}$/
        return (!nameregex.test(e.target.value))?this.setState({ nameError: "Enter a valid name" }):this.setState({ nameError: "" })
    }
    ValidatePhone = (e) => {
        let phoneregex= /^[0-9]{8}$/
    return (!phoneregex.test(e.target.value))?this.setState({ phoneError: "Enter a valid name" }):this.setState({ phoneError: "" })
    }
  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("navbarCollapse")}
      />
    );
    return (
      <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    Se connecter Maintenant{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    San3a.tn collecte des données à caractère personnel aux fins
                    notamment de vous fournir le service de mise en relation des
                    utilisateurs. Conformément à la réglementation, vous
                    disposez d'un droit d'accès, de rectification, de
                    portabilité, d’effacement, de limitation ou d'opposition.
                  </h6>
                  <MDBBtn outline color="white">
                    déjà memebre?se connecter
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> S'inscrire:
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput  label="Your name" outline icon="user" onChange={this.ValidateName} background/>
                      <span style={{color:'red'}} >{this.state.nameError}</span>
                      <MDBInput label="Your phone" outline icon="envelope" onChange={this.ValidatePhone} background/>
                      <span style={{color:'red'}}>{this.state.phoneError}</span>
                      <MDBInput
                        label="Your password"
                        outline
                        icon="lock"
                        type="password"
                        background
                      />
                      <div className="text-center mt-4 black-text">
                        <MDBBtn color="indigo">S'inscrire</MDBBtn>
                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="twitter"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="linkedin-in"
                              className="white-text"
                            />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon
                              fab
                              icon="instagram"
                              className="white-text"
                            />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Conexion;

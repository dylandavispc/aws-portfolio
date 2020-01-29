import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import background from "./computerart.jpg";
import face from "./DSC_8668fix (2).jpg"
import "./style.css"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>DD</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={this.redirectorLog}>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={this.redirectorReg}>
                    <MDBNavLink to="/register">Register</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src={background}>
            <MDBMask pattern="0"className="flex-center flex-column text-white text-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 class="display-3 mb-0 pt-md-5 pt-8 white-text font-weight-bold" >Website currently under <span className="textColor font-weight-bold">Construction</span></h1>
                  <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">Web developer & graphic designer</h5>
                  <MDBBtn className="white btn-light-blue" size="lg">portfolio</MDBBtn>
                  <MDBBtn className="white btn-indigo" size="lg" >About me</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <h1>About Me</h1>
						<MDBRow>
							<div className="col-md-3">
								<img src={face} className="face"/>
							</div>
              <div className="col-md-9 align-middle">
                afasjdf;lkasdjf;lasdjf;la sjdf;alsdj falk jfa;lsdkf j;alsdf ja;lkf ja;sldk fja;slfk djasldf jas;lf jalsd;fja;lsjfa;lsj fa;lkj fa;lksd fja;lskd fjaklsd fj;alsdk fja;lsk dfja;lskd fja;lsd fja;lsdkfja;sldf jdkfjds fklajsd;f lkajsdf;lkasjf a;klsdfj a;lskf ja;sdlfkasdflkja
              asdfadsfa sdfa sdfa fh;lsdf afhaksd fhal hfjaflkaj fjasd f;asdifja;df oiajef; aen;leskn ;li nfe;alsinf a;slekf na;slef isne; lfianesf; lknds;lkf nasd;lkn
              </div>
						</MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
}

export default Header;
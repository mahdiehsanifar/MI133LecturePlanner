import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../loader/loader';
import classNames from "classnames";

// core components

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import HeaderLinks from "../Header/HeaderLinks.jsx";
import Parallax from "../Parallax/Parallax.jsx";

import ProductSection from "../home/Sections/ProductSection.jsx";


import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";
class Home extends Component {
  componentDidMount() {
  }

  
  render() {
    const { classes, ...rest } = this.props;
  
    return (
      <div className="">
      
        <main role="main">
        <Header
          color="transparent"
         
          brand="Fachhochschule Kiel"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
         
        />
      

          <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Lecture Planner.</h1>
                <h4>
                This website is provided students of Kiel University with ...
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Learn more &raquo;
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
           
          </div>
        </div>
        <Footer />
        </main>
      </div>
    );
  }
}
const stp = (state, props) => {
  return {
    state
    
  }
}
const atp = {
 
}
export default withStyles(landingPageStyle,connect(stp, atp)) (Home);

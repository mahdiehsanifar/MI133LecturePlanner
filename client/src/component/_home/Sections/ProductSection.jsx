import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../Grid/GridContainer.jsx";
import GridItem from "../../Grid/GridItem.jsx";
import InfoArea from "../../InfoArea/InfoArea.jsx";

import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk our service</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              service. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
            <Link  to={"/profile/courses"}>
              <InfoArea
                title="Navigate to lecture"
                description="Select your lecture and search for possible public transportation paths to there ."
                icon={Chat}
                iconColor="info"
                vertical
              />
           </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Favorites"
                description="Save lectures you search regularly ."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
            <Link  to={"/profile"}>
              <InfoArea
                title="Manage profile"
                description="Manage profile."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);

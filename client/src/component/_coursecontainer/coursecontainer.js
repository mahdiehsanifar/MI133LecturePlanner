import React, { Component } from 'react';
import { connect } from 'react-redux'
import './coursecontainer.css';
import Loader from '../loader/loader';
import { getCoursesApi } from '../../data/actions/login-actions';
import Course from '../course/course';

import classNames from "classnames";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Button from "../CustomButtons/Button.jsx";
import HeaderLinks from "../Header/HeaderLinks.jsx";
import Parallax from "../Parallax/Parallax.jsx";



class CourseContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getCourses()

    }
    render() {
        const { status, courses } = this.props
       
        return (
            <div>
                  <Header
                    color="transparent"
                    
                    brand="Fachhochschule Kiel"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    
                    />
                   <Parallax small filter image={require("../../assets/img/landing-bg.jpg")} />
                     <div >
                        <div >
                        <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                        <Loader loading={status} />                
                            {
                                courses.map((group, g) => { return [    
                                    <div key={g}>Group</div>,
                                group.gl.map((course, i) => <Course {...course} key={`group${i}`}/>)
                                ]})
                            }
                        </GridItem>
                        </GridContainer>
                          
                          
                           
                        </div>
                        </div>
                        <Footer />
               
            </div>
        );
    }
}
const stp = (state, props) => {
    return {
        status: state.profile.request_status,
        courses: state.profile.courses        
    }
}
const atp = {
    getCourses: getCoursesApi
}

export default connect(stp, atp) (CourseContainer);

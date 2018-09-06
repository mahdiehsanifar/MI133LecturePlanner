import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class NavigationBar extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="NavigationBar">

                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a class="navbar-brand" href="#">Lecture Planner</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/home" ><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Navigation</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Favorites</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Another setting</a>
                                    <a class="dropdown-item" href="#">Another setting</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

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
export default connect(stp, atp)(NavigationBar);

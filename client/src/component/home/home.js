import React, { Component } from 'react';
import { connect } from 'react-redux'



class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="Home">

        <main role="main">


          <div class="jumbotron">
            <div class="container">
              <h1 class="display-3">Lecture Planner!</h1>
              <p>This website is provided students of Kiel University with ...</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
            </div>
          </div>

          <div class="container">

            <div class="row">
              <div class="col-md-4">
                <h2>Navigate to lecture</h2>
                <p>Select your lecture and search for possible public transportation paths to there  </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div class="col-md-4">
                <h2>Favorites</h2>
                <p>Save lectures you search regularly </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div class="col-md-4">
                <h2>Manage profile</h2>
                <p>Edit your profile details. </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
            </div>

          </div>

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
export default connect(stp, atp)(Home);

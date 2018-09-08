import React, { Component } from 'react';
import { connect } from 'react-redux'
import './register.css';

import { registerApi } from '../data/actions/login-actions';
import Loader from '../component/loader/loader';


class Register extends Component {  
  constructor(props){
    super(props)
  }
  register = (e) => {
    e.preventDefault()
    this.props.register(this.email.value, this.password.value, this.props.history)    
  }
  render() {
    const { status } = this.props
    return (
      <div className="text-center">
      <Loader loading={status} />
        <form className="form-signin">
          <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref= { me => this.email = me } required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref = { me => this.password = me }  required />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" />
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" onClick = { (e) => this.register(e) } >Register</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022-2200</p>
        </form>
      </div>
    );
  }
}
const stp = (state, props) => {
  return {
    status: state.profile.request_status
  }
}
const atp = {
  register: registerApi
}
export default connect(stp, atp)(Register);

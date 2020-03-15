import React, {useState} from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ls from 'local-storage'
import {Redirect, withRouter} from 'react-router'
import {loginCurrentUser} from '../utils'
import {fetchCurrentUserAction} from '../actions'

const SignUp = (props) => {
  return (
    <div className="login-container">
      Sign Up
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))

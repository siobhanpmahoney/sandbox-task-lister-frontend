import React, {useState} from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ls from 'local-storage'
import {Redirect, withRouter} from 'react-router'
import {loginCurrentUser} from '../utils'
import {fetchCurrentUserAction} from '../actions'


const Login = (props) => {
  const [inputValues, setInputValues] = useState({})

  const handleInputUpdate = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = () => {

    loginCurrentUser(inputValues)
    .then(response => response.jwt)
    .then(jwtToken => {
      if (jwtToken) {
        ls.set('jwt_token', jwtToken)
        return ls.get('jwt_token')
      } else {
        return window.alert('error')
      }
    })
    .then(jwt =>props.fetchCurrentUserAction(jwt)
    )
    .then(res => {
      return props.history.push("/")
    })
  }


  return (
    <div className="login-container">

      <input name="email" type="text" onChange={handleInputUpdate} value={inputValues.email || ""} />
      <input name="password" type="password" onChange={handleInputUpdate} value={inputValues.password || ""} />
      <button onClick={onSubmit}>Log values</button>

    </div>
  )

}

function mapStateToProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCurrentUserAction}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))

import React from 'react'
import ls from 'local-storage'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {removeCurrentUserAction} from '../actions'
import {logOutCurrentUser} from '../utils'



const Logout = ({removeCurrentUserAction}) => {

  const logOutCurrentUser = () => {
    if (ls.get('jwt_token')) {
      ls.remove('jwt_token')
      return removeCurrentUserAction()
    }
  }

  return (
    <button onClick={logOutCurrentUser}>Log Out</button>
  )
}

function mapStateToProps(state, props) {
	  return {
	    user: state.user
	  }
	}

function mapDispatchToProps(dispatch) {
	  return bindActionCreators({removeCurrentUserAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

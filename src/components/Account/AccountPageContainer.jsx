import React from 'react'
import {withRouter} from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WithAuth from '../../wrappers/WithAuth'


const AccountPageContainer = () => {
  return <div>Account</div>
}

function mapStateToProps(state, props) {
	  return {
	    user: state.user,
	  }
	}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WithAuth(AccountPageContainer)))

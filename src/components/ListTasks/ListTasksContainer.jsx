import React from 'react'
import {withRouter} from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {removeCurrentUserAction, fetchCurrentUserAction} from '../../actions'

import WithAuth from '../../wrappers/WithAuth'

const ListTasksContainer = () => {
  return (
    <div>
      List Page
    </div>
  )
}

function mapStateToProps(state, props) {
	  return {
	    user: state.user,
	  }
	}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCurrentUserAction, removeCurrentUserAction}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WithAuth(ListTasksContainer)))

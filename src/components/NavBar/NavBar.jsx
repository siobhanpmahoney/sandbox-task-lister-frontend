import React from 'react'
import NavList from './NavList'
import ls from 'local-storage'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const NavBar = ({ user }) => {
  return (
    <div className="nav">
      <NavList isLoggedIn={!!user && user.id}  />
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

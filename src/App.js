import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {removeCurrentUserAction, fetchCurrentUserAction} from './actions'

import NavBar from './components/NavBar/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Homepage from './components/Homepage/Homepage'
import AccountPageContainer from './components/Account/AccountPageContainer'




const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login" render={(routerProps) => <Login history={routerProps.history} /> } />
        <Route exact path="/" render={(routerProps) => <Homepage history={routerProps.history} /> } />
        <Route exact path="/account" render={(routerProps) => <AccountPageContainer history={routerProps.history} /> } />
        <Redirect to='/' />
      </Switch>

    </div>
  );
}
//
// function mapStateToProps(state, props) {
// 	  return {
// 	    user: state.user,
// 	  }
// 	}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchCurrentUserAction, removeCurrentUserAction}, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App

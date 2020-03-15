import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {removeCurrentUserAction, fetchCurrentUserAction} from './actions'

import Homepage from './components/Homepage/Homepage'
import Login from './components/Login'



const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" render={(routerProps) => <Login history={routerProps.history} /> } />
        <Route exact path="/" render={(routerProps) => <Homepage history={routerProps.history} /> } />
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

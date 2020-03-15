import React from 'react'
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logout from '../Logout'


const NavListItem = ({ to, children }) => {
  return (
    <Route
      path={to}
      exact
      children={({ match }) => (
        <div className={`nav__list-item${ match ? ' nav__list-item--active': '' }`}>
          <Link className="nav__list-item__link" to={to}>{children}</Link>
        </div>
      )}
    />
  )
}

const NavList = ({ isLoggedIn  }) => {

  const list = () => {
    return !!isLoggedIn ? (
       [{ to: '/', text: 'Tasks'}, { to: '/account', text: 'Account'}]
    ) : (
      [{ to: '/login', text: 'Log In'}, { to: '/signup', text: 'Sign Up'}]
    )
  }

  return (
    <div className="nav__list">
      <div className="nav__list__wrapper">
        { list().map(({ text, to }) => (
          <NavListItem key={text} to={to}>
            { text }
          </NavListItem>
        ))}

        {!!isLoggedIn &&

            <Logout />

        }
      </div>
    </div>
  )
}

export default NavList

import '../styles/header.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <div className="loader">Loading...</div>;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key={uuid()}>
            <Payments />
          </li>,
          <li key={uuid()} style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={uuid()}>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            href="#"
            className="brand-logo"
          >
            Logo
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export const Unwrapped = Header;
export default connect(mapStateToProps)(Header);

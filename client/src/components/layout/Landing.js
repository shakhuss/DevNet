import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large'>Dev Net</h1>
            <p className='lead'>
              Build a network by creating your profile and connect with others
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapToPropTypes = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapToPropTypes)(Landing);

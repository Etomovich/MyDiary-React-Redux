import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { fetchAContact } from '../actions/AllActons';
import store from '../store/index';

export class ViewUser extends Component{
  componentDidMount(){
    const { match } = this.props;
    const { slug } = match.params;
    store.dispatch(fetchAContact(parseInt(slug)));
  }
  render(){
    const { aContact } = this.props;
    return (
      <div className="view-user-container">
        <ToastContainer />
        <h1 className="title-brand-profile">User Profile</h1>
        <hr />
        <div className="user-profile">
          <img src={aContact.avatar} alt={aContact.first_name} className="all-contacts-img" />
          <h3>{aContact.first_name}&nbsp; . &nbsp;{aContact.last_name}</h3>
          <p>{aContact.email}</p>
        </div>
      </div>
    );
  }
}

ViewUser.propTypes = {
  match: PropTypes.object.isRequired,
  aContact: PropTypes.object.isRequired,
}

export const mapStateToProps = state => ({
  aContact: state.aContact,
});

export default connect(mapStateToProps)(ViewUser);

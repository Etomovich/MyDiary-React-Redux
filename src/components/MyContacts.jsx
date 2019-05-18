import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchAllContacts, fetchMoreContacts, fetchAContact } from '../actions/AllActons';

export class MyContacts extends Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      nextPage: false,
    };
  }

  componentDidMount(){
    const { getAllContacts } = this.props;
    getAllContacts();
    this.changeNextPage();
  }

  changeNextPage = () => {
    const { nextContact } = this.props;
    if(nextContact > 0){
      this.setState({ nextPage: true });
    } else {
      this.setState({ nextPage: false })
    }
  }

  updateContactList = () =>  {
    const { getContacts, nextContact } = this.props;
    if(nextContact > 0){
      getContacts(nextContact);
    } else {
      this.setState({ nextPage: false })
    }
  }

  render(){
    const { contactList } = this.props;
    const { nextPage } = this.state;
    const loader = (
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-success">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
    return (
      <div className="all-contacts-container">
        <h1 className="title-brand">My Contacts</h1>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.updateContactList}
          hasMore={nextPage}
          loader={loader}
          >
          <div className="tracks">
            {
            contactList.map( listItem => (
              <div className="per-contact-div" key={listItem.id} >
                <div className="row">
                  <div className="col-md-2">
                    <img src={listItem.avatar} alt={listItem.first_name} className="all-contacts-img" />
                  </div>
                  <div className="col-md-9 all-contacts">
                    <a 
                      href={'/'.concat(listItem.id)}
                    >
                      <h3>{listItem.first_name}&nbsp; . &nbsp;{listItem.last_name}</h3>
                    </a>
                    <p>{listItem.email}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        </InfiniteScroll>
      </div>
    );
  }
};

MyContacts.propTypes = {
  contactList: PropTypes.array.isRequired,
  nextContact: PropTypes.number.isRequired,
  getContacts: PropTypes.func,
  getAllContacts: PropTypes.func,
}

MyContacts.defaultProps = {
  getContacts: () => {},
  getAllContacts: () => {},
}

export const mapStateToProps = state => ({
  contactList: state.contacts,
  nextContact: state.contactHasNext,
});

export const mapDispatchToProps = dispatch => ({
  getContacts: (pageNumber) => {
    dispatch(fetchMoreContacts(pageNumber));
  },
  getAllContacts: () => {
    dispatch(fetchAllContacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContacts);

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContacts  from '../components/MyContacts';
import CreateContact from '../components/CreateContact';
import ViewUser from '../components/ViewUser';
import EditContact from '../components/EditContact';

const Routes = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={MyContacts} />
        <Route exact path='/create' component={CreateContact} />
        <Route exact path='/edit' component={EditContact} />
        <Route exact path='/:slug' component={ViewUser} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
export default Routes;


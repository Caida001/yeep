import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SearchContainer from './search/search_container';
import BusinessShowContainer from './business_show/business_show_container';
import ReviewFormContainer from './business_show/review_form_container';
import WriteReviewContainer from './search/write_review_container';
import UploadContainer from './upload/upload_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <ProtectedRoute exact path="/businesses/:businessId/add_photo" component={UploadContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/" component={GreetingContainer} />
    <ProtectedRoute exact path="/businesses/:businessId/review" component={ReviewFormContainer} />
    <Route exact path="/writeareview" component={WriteReviewContainer} />
    <Route path='/' component={Footer} />
  </div>
);

export default App;

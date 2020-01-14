import AuthProvider from 'context/auth/AuthProvider';
import NotFound from 'pages/notFound/notFound.route';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/about/About.route';
import DetailsRoute from './pages/details/details.route';
import IndexRoute from './pages/index/index.route';
import NewRoute from './pages/new/New.route';
import Payment from './pages/payments/payment.route';
import Searchroute from './pages/search/search.route';
import UserDetails from './pages/user/details/UserDetails.route';
import UserLogin from './pages/user/login/UserLogin.route';
import Admin from './pages/admin/Admin.route';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={IndexRoute} />
        <Route exact path="/search" component={Searchroute} />
        <Route exact path="/new" component={NewRoute} />
        <Route exact path="/details/:id" component={DetailsRoute} />
        <Route exact path="/user/login" component={UserLogin} />
        <Route exact path="/user/details" component={UserDetails} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/notfound" component={NotFound} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/edit/:id" component={Edit} />
      </Router>
    </AuthProvider>
  );
}
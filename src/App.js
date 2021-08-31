import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectShowLoginPopup } from './redux/user/user.selectors';
import { checkUserSession, hideLoginPopup, signOutStart } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';
import CheckOut from './pages/checkout/checkout.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Search from './pages/search/search.component';
import PopupModal from './components/popup-modal/popup-modal.component';
import AddToCartPopup from './components/add-to-cart-popup/add-to-cart-popup.component';
import { selectAddToCartPopup } from './redux/cart/cart.selectors';
import { hideAddToCartPopup, showAddToCartPopup } from './redux/cart/cart.actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  render() {
    const { location, currentUser, signOutStart, showLoginPopup, hideLoginPopup, addToCartPopup, showAddToCartPopup, hideAddToCartPopup } = this.props;

    return (
      <div className="App">
        {
          location.pathname !== "/login" ? <Navbar currentUser={currentUser} signOutStart={signOutStart} /> : null
        }
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" render={() => currentUser ? <CheckOut /> : <Redirect to='/login' />} />
          <Route exact path="/login" render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
          <Route path="/search" component={Search} />
        </Switch>
        {
          location.pathname !== "/login" ? <Footer /> : null
        }

        <PopupModal showLoginPopup={showLoginPopup} hideLoginPopup={hideLoginPopup} />

        <AddToCartPopup
          addToCartPopup={addToCartPopup}
          showAddToCartPopup={showAddToCartPopup}
          hideAddToCartPopup={hideAddToCartPopup}
        />
      </div>


    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showLoginPopup: selectShowLoginPopup,
  addToCartPopup: selectAddToCartPopup
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  signOutStart: () => dispatch(signOutStart()),
  hideLoginPopup: () => dispatch(hideLoginPopup()),
  showAddToCartPopup: () => dispatch(showAddToCartPopup()),
  hideAddToCartPopup: () => dispatch(hideAddToCartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

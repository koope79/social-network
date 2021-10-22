import React, { Suspense } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import NavBar from './components/NavBar/Nav_bar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/App-reducer';
import Preloader from './components/common/preloaders/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const mapStatetoProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <div className='preloader'><Preloader /></div>
    }

    return (
      <div className='app-wrapper'>

        <div className='container'>
          <HeaderContainer />
          <NavBar />
          <div>
            <Suspense fallback={<Preloader/>}>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/friends' render={() => <FriendsContainer />} />
              <Route path='/login' render={() => <LoginPage />} />
              <Route path='/news' component={News} />
              <Route path='/settings' component={Settings} />
            </Suspense>
          </div>
        </div>

      </div>
    );
  }
}


export default connect(mapStatetoProps, { initializeApp })(App);

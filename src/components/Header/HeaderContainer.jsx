import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/Auth-reducer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderComponent extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const HeaderContainer = connect(mapStateToProps, { logout })(HeaderComponent);

export default HeaderContainer;
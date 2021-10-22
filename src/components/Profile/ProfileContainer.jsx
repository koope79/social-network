import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfileThunk, getUserStatusTh, updateUserStatus } from '../../redux/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorrizedUserId: state.auth.userId
    }
}

class ProfileComponent extends React.Component {

    // state = {
    //     myProf: false
    // };

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorrizedUserId;
            if(!userId) {
                this.props.history.push("/login");  // грубый переход на страницу login если user ещё не авторизован, а также нет в url-номер выбранного user'a
                return;
            }
        }

        this.props.setUserProfileThunk(userId);
        this.props.getUserStatusTh(userId);
        
        //this.setState({myProf: true});
    }

    componentDidUpdate(prevProp, prevState) {
        if(!this.props.authorrizedUserId) {         // Проблема перехода на страницу пользователя, если нет авторизации   ????
            this.props.history.push("/login");
        }
        // if(!this.props.match.params.userId && !this.state.myProf) {
        //     this.props.setUserProfileThunk(this.props.authorrizedUserId);
        //     this.props.getUserStatusTh(this.props.authorrizedUserId);
        // }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}


export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getUserStatusTh, updateUserStatus }),
    withRouter)
(ProfileComponent);












// let AuthRedirectComponent = withAuthRedirect(ProfileComponent);  // hoc-компонента для ProfileComponent, где реализуется Redirect
// let withRouterContainer = withRouter(AuthRedirectComponent);     // контейнерная компонента для AuthRedirectComponent. Компонента, которая отдаётся connect'у. 

// const ProfileContainer = connect(mapStateToProps, {setUserProfileThunk })(withRouterContainer);

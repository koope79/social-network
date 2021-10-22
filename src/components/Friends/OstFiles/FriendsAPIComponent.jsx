import React from 'react';
import * as axios from 'axios';
import Friends from './Friends';

class FriendsAPIComponent extends React.Component {

    // constructor(props) {
    //     super(props);


    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)     // т.к. в пропсах на момент клика будет старое значение currentPage, следовательно передаём напрямую pageNumber
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Friends totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />
    }
}

export default FriendsAPIComponent;
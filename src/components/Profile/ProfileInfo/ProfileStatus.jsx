import React, { PureComponent } from "react";
import s from './ProfileStatus.module.css';
import { Component } from "react";
import Preloader from "../../common/preloaders/Preloader";

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status,  // всегда инициализируется ""
        isFetching: false  
    };

    activeEditMode = () => {
        this.setState({
            editMode: true,
            //status: this.props.status   // ?
        });
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false,
            isFetching: true
        });
        this.props.updateUserStatus(this.state.status);
    }

    activeIsFetching = () => {
        this.setState({
            isFetching: true
        });
    }

    deActiveIsFetching = () => {
        this.setState({
            isFetching: false
        });
    }

    onStatusChange = (e) => {
        let textStatus = e.currentTarget.value;
        this.setState({
            status: textStatus
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status, isFetching: false});
        }
    }

    render() {
        return (
            <div className={s.content}>
                {!this.state.editMode &&
                    <div>
                        {this.state.isFetching ? <div className={s.preloader}><Preloader /></div> : <span onClick={ this.activeEditMode }>{this.props.status || "---"}</span> } 
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActiveEditMode } value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
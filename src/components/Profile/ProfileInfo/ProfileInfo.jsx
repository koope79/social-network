import React, { PureComponent } from 'react';
import s from './ProfileInfo.module.css';
import Ava from '../../../assets/images/userAva.png';
import ProfileStatus from './ProfileStatus';

const uploadIcon = 'https://img.icons8.com/pastel-glyph/2x/upload--v2.png';

class ProfileInfo extends PureComponent {       // оптимизация. Убираем лишние ререндеры из-за setState одного и того же свойства при onMouseEnter и onMouseLeave
    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.setState({ editMode: true });
    }

    deActiveMode = () => {
        this.setState({ editMode: false });
    }

    render() {
        return (
            <div className={s.content}>

                <div className={s.profileItems}>

                    <div className={s.avaBlock}>
                        <div className={s.mainAva} onMouseEnter={this.activeEditMode} onMouseLeave={this.deActiveMode}>
                            <img src={this.props.profile == null ? Ava : this.props.profile.photos.large === null ? Ava : this.props.profile.photos.large} />
                        </div>

                        {this.state.editMode &&
                            <div onMouseEnter={this.activeEditMode} onMouseLeave={this.deActiveMode}  className={s.hoverBlock} onClick={() => { alert("UPLOAD PICTURE"); }}>
                                <img src={uploadIcon} />
                            </div>
                        }
                    </div>

                    <div className={s.desc}>
                        <section>
                            <h4>{this.props.profile === null ? "" : this.props.profile.fullName}</h4>
                            <ProfileStatus status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
                            {/* Status: {props.profile === null ? "" : props.profile.aboutMe} */}
                        </section>
                    </div>

                </div>



            </div>
        );

    }
}

// const ProfileInfo = (props) => {
//     // console.log(props);

//     return (
//         <div className={s.content}>

//             <div className={s.profileItems}>

//                 <div className={s.avaItem}>
//                     <div className={s.avaBlock}>
//                         <img src={props.profile == null ? Ava : props.profile.photos.large === null ? Ava : props.profile.photos.large} />
//                         {/* <img src='https://sun9-73.userapi.com/impf/lGN1h2b6QLEqmOsC36eBf4zp_zkbrO1wH485nA/zdQR3cXJskk.jpg?size=1565x1037&quality=96&proxy=1&sign=34d74be3285ca581e92b1b470e49c7d4' alt="ava" /> */}
//                     </div>

//                     <div className={s.wallper}>
//                         <img src={props.profile == null ? "" : props.profile.photos.large === null ? "" : background} alt="" />
//                     </div>
//                 </div>


//                 <div className={s.desc}>
//                     <section>
//                         <h4>{props.profile === null ? "" : props.profile.fullName}</h4>
//                         <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
//                         {/* Status: {props.profile === null ? "" : props.profile.aboutMe} */}
//                     </section>
//                 </div>

//             </div>



//         </div>
//     );
// }

export default ProfileInfo;
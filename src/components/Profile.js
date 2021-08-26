import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../actions/profile.actions';

const Profile = (props) => {
    return(
        <div>
            {props.profile.isLoading ? (<CircularProgress />) : (
                <div>
                    <div>{props.profile.firstName} {props.profile.lastName}: {props.profile.age}</div>
                    <button onClick={() => props.updateProfile({...props.profile, firstName: 'Something'})}></button>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, { getProfile, updateProfile })(Profile);
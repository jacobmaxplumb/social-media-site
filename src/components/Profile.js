import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@material-ui/core"
import { connect } from "react-redux";
import { updateAge, updateFirstName, updateLastName, updateProfileAsync } from "../actions/profile.actions";

const profile = {
    firstName: 'Jacob',
    lastName: 'Plumb',
    age: 30
}

const Profile = (props) => {
    return(
        <div>
            <Card>
                <CardHeader title="Profile"/>
                <CardContent>
                    <TextField style={{width: '100%'}} variant="outlined" value={props.profile.firstName} onChange={(e) => props.updateFirstName(e.target.value)}/>
                    <TextField style={{width: '100%'}} variant="outlined" value={props.profile.lastName} onChange={(e) => props.updateLastName(e.target.value)} />
                    <TextField style={{width: '100%'}} variant="outlined" value={props.profile.age} onChange={(e) => props.updateAge(parseInt(e.target.value))} />
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" variant="contained" onClick={() => props.updateProfileAsync(props.profile)}>Save</Button>
                </CardActions>
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, { updateFirstName, updateLastName, updateAge, updateProfileAsync })(Profile);
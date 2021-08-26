import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@material-ui/core"

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
                    <TextField style={{width: '100%'}} variant="outlined" value={profile.firstName}/>
                    <TextField style={{width: '100%'}} variant="outlined" value={profile.lastName}/>
                    <TextField style={{width: '100%'}} variant="outlined" value={profile.age}/>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" variant="contained">Save</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Profile;
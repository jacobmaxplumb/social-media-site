import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@material-ui/core";
import { ThumbUpAlt, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import { updateNewPost, addPostAsync, addLikeAsync, deletePostAsync } from "../actions/feed.actions";

const NewsFeed = (props) => {
    return (
        <div>
            <Card style={{marginBottom: '10px'}}>
                <CardHeader title="Add Post"/>
                <CardContent>
                    <TextField style={{width: '100%'}} variant="outlined" value={props.newPost} onChange={(e) => props.updateNewPost(e.target.value)}/>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" variant="contained" onClick={() => props.addPostAsync(props.newPost, props.userId)}>Add Post</Button>
                </CardActions>
            </Card>
            {props.posts.map((post, index) => (
                <Card key={index} style={{marginBottom: '5px'}}>
                    <CardContent>
                        <div>{post.postBody}</div>
                    </CardContent>
                    <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <ThumbUpAlt color="primary" style={{cursor: 'pointer'}} onClick={() => props.addLikeAsync({...post, likes: post.likes + 1})} />
                            <div style={{marginLeft: '5px'}}>{post.likes}</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>{post.time}</div>
                            <Delete color="secondary" style={{cursor: 'pointer', marginLeft: '5px'}} onClick={() => props.deletePostAsync(post.id)} />
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.feed.posts,
        newPost: state.feed.newPost,
        userId: state.profile.id
    }
}

export default connect(mapStateToProps, { updateNewPost, addPostAsync, addLikeAsync, deletePostAsync })(NewsFeed);
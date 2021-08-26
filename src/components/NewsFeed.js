import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@material-ui/core";
import { ThumbUpAlt, Delete } from "@material-ui/icons";

const posts = [
    {
        id: 1,
        time: 'Aug 1, 2021 3:00 PM',
        postBody: "Omg This Is A Post",
        likes: 1,
        userId: 1
    }
];

const newPost = "";

const NewsFeed = (props) => {
    return (
        <div>
            <Card style={{marginBottom: '10px'}}>
                <CardHeader title="Add Post"/>
                <CardContent>
                    <TextField style={{width: '100%'}} variant="outlined" value={newPost}/>
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button color="primary" variant="contained">Add Post</Button>
                </CardActions>
            </Card>
            {posts.map((post, index) => (
                <Card key={index} style={{marginBottom: '5px'}}>
                    <CardContent>
                        <div>{post.postBody}</div>
                    </CardContent>
                    <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <ThumbUpAlt color="primary" style={{cursor: 'pointer'}} />
                            <div style={{marginLeft: '5px'}}>{post.likes}</div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>{post.time}</div>
                            <Delete color="secondary" style={{cursor: 'pointer', marginLeft: '5px'}} />
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default NewsFeed;
import { Card, CardActions, CardContent } from "@material-ui/core";
import { ThumbUpAlt } from "@material-ui/icons";

const posts = [
    {
        id: 1,
        time: 'Aug 1, 2021 3:00 PM',
        postBody: "Omg This Is A Post",
        likes: 1,
        userId: 1
    }
]

const NewsFeed = (props) => {
    return (
        <div>
            {posts.map((post, index) => (
                <Card key={index}>
                    <CardContent>
                        <div>{post.postBody}</div>
                        <div>{post.time}</div>
                    </CardContent>
                    <CardActions>
                        <div>
                            <ThumbUpAlt />
                            <div>{post.likes}</div>
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

export default NewsFeed;
import React from 'react';
import {Link} from "react-router-dom";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.match.params.userId,
            posts: []
        }
    }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts?userId='+this.state.userId)
            .then(res => res.json())
            .then((data) => {
                this.setState({ posts: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h2>Posts of User {this.state.userId}</h2>
                <table border="2">
                    <tr>
                        <th>Titles</th>
                    </tr>
                    {this.state.posts.map((post) => (
                        <tr>
                            <Link to={"/posts/"+post.id}>{post.title}</Link>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Posts;
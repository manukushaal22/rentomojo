import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.match.params.postId,
            post: []
        }
    }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts/'+this.state.postId)
            .then(res => res.json())
            .then((data) => {
                this.setState({ post: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h2>Posts of User {this.state.userId}</h2>
                <table border="2">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    <tr>
                        <td><h5 className="card-title">{this.state.post.title}</h5></td>
                        <td><h5 className="card-text">{this.state.post.body}</h5></td>
                    </tr>
            </table>
            </div>
        );
    }
}

export default Posts;
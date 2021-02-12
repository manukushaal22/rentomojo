import React from 'react';
import {Link} from "react-router-dom";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ users: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h2>Users List</h2>
                <table border="2">
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Posts</th>
                    </tr>
                    {this.state.users.map((user) => (
                        <tr>
                            <td><h5 className="card-title">{user.name}</h5></td>
                            <td><p className="card-text">{user.company.name}</p></td>
                            <Link to={"/user/"+user.id+'/posts'}>Check posts</Link>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Users;
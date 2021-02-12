import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path='/' component={Users}/>
                <Route exact path='/user/:userId/posts' component={Posts}/>
                <Route exact path='/posts/:postId' component={PostDetails}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;

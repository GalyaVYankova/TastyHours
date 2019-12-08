import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import Logout from '../Logout/Logout';
import Detail from '../publications/Detail/Detail';
import CreatePost from '../publications/CreatePost/CreatePost';
import CreateReceipes from '../publications/CreateReceipes/CreateReceipes';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
// import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import userService from '../services/user-service';
import Home from '../publications/Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = React.lazy(() => import('../Profile/Profile'));

function render(title, Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    this.state = { isLogged };
    this.username = undefined;
  }

  logout = (history) => {
    userService.logout().then(() => {
      this.setState({ isLogged: false });
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    //var that = this;
    //console.log(that.cookies);
    userService.login(data).then((res) => {
      let cookies = parseCookeis();
      let isLogged = !!cookies['x-auth-token'];
      if (isLogged) {
        this.username = data.username;
        this.setState({ isLogged: true });
        history.push('/');
      } else {
        alert ('No such user or password!')
        // did not login due to wrong user and/or password or another reason
        // console.log(res);
      }
    });
  }

  render() {
    const { isLogged } = this.state;
   // const { username } = this.username;
    return (
      <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
          <Navigation isLogged={isLogged} />
          <div className="Container">
            <Switch>
              <Route path="/" exact><Redirect to="/posts" /></Route>
              <Route path="/posts" render={render('Posts', Posts, { isLogged })} />
              <Route path="/gallery" render={render('Home', Home, { isLogged })} />
              <Route path="/post/:id" render={render('Post', Detail, { isLogged })} />
              <Route path="/logout" render={render('Logout', Logout, { isLogged, logout: this.logout })} />
              <Route path="/recipes" render={render('CreateReceipes', CreateReceipes, { isLogged })} />
              <Route path="/create-posts" render={render('CreatePosts', CreatePost, { isLogged })} />
              {isLogged && <Route path="/profile">
                  <React.Suspense fallback={<Loader isLoading={true} />}>
                    <Profile></Profile>
                  </React.Suspense>
              </Route>}
            </Switch>
          </div>
          <div className="auth">
              <Route path="/login" render={render('Login', Login, { isLogged, login: this.login })} />
              <Route path="/register" render={render('Register', Register, { isLogged })} />
          </div>
          <Footer isLogged={isLogged} />
        </div>
      </BrowserRouter >
    );
  }
}
export default App;

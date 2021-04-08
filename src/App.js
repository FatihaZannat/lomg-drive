import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CategoryDetails from './components/Categories/CategoryDetails';
import Contact from './components/Contact/Contact';
import Destination from './components/Contact/Contact';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Nomatch from './components/Nomatch/Nomatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="homepage">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <PrivateRoute path="/category-details/:id">
              <CategoryDetails></CategoryDetails>
            </PrivateRoute>

            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

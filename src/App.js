import React, { createContext, useState } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Headers from "./Components/Header/Headers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { Container } from "@material-ui/core";
import './App.css'

export const UserContext = createContext();
        
const App = () => {
    const [loggedInUser,setLoggedInUser] = useState({})
  return (
      <Container>
        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <div>
      <Headers />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/:title">
            <Destination/>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
      </Container>
  );
};
export default App;

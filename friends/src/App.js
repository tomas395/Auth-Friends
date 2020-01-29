import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderDiv>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/protected">Friends</StyledLink>
        </HeaderDiv>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

//Sparse Styling

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b91432;
  height: 80px;
  width: 100%;
  color: #fff;
`;

const StyledLink = styled(Link)`
  display: flex;
  font-size: 18px;
  color: #000036;
  text-decoration: none;
  margin: 10px 0;
  padding: 10px;
  &:hover {
    color: #e6a522;
    text-decoration: none;
  }
`;

export default App;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import logoImg from "../logo.svg";
import { Card, Logo, Form, Input, Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  const { authTokens } = useAuth();

  const mock = new mockAdapter(axios);
  mock.onPost("/login_page").reply(200, {
    data: { id: 1, name: "John Smith" },
  });

  function postLogin() {
    axios.post("/login_page", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      }
    });
  }

  let referer = '/';
  if (props.location.state !== undefined) {
    referer = props.location.state.referer
  }

  if (isLoggedIn || authTokens) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
    </Card>
  );
}

export default Login;

import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function ContactDetail(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  // debugger;

  return (
    <div>
      <div>Contact Detail</div>
      <div>id - {props.match.params.id}</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default ContactDetail;

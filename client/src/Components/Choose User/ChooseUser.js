import React, { useState } from "react";
import "./chooseuser.css";
import { Link } from "react-router-dom";

function ChooseUser() {
  const [client, setClient] = useState("Client");
  const [agent, setAgent] = useState("Agent");

  return (
    <div>
      <h1 className="titre1">YOU ARE ?</h1>
      <div className="choose-type">
        <div className="green">
          <img
            src="https://www.mramma.tn/sites/default/files/part.png"
            alt="particulier"
            width="500"
            height="600"
          />
          <Link to={`/chooseuser/signup/${client}`} className="particulier">
            Client
          </Link>
        </div>
        <div className="vl"></div>
        <div className="red">
          <img
            src="https://www.mramma.tn/sites/default/files/pro.png"
            alt="particulier"
            width="500"
            height="600"
          />
          <Link to={`/chooseuser/signup/${agent}`} className="particulier">
            Agent
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChooseUser;

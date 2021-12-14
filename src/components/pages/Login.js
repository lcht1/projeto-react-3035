import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Card from "../ui/Card";
import Button from "../layout/Button";

import "./Login.css";

import emailIcon from "./email-icon.svg";
import passwordIcon from "./password-icon.svg";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      
      history.push("");

    }
  }, []);
  async function login(e) {
    e.preventDefault();

    const basicAuth = `Basic ${btoa('3035teachapp:3035teach-secret')}`;
    const urlPost = `https://back-3035teach.herokuapp.com/oauth/token?username=${email}&password=${password}&grant_type=password`;

    axios.defaults.headers.common["Authorization"] = basicAuth
    axios.defaults.headers.common["Content-Type"] = "application/json";
    await axios.post(urlPost, {});
    window.location.replace('https://www.3035tech.com/#/')


  }

  return (
    <>

      <Card>
        <form className="form" id="login" method="post" action="/" onSubmit={login}>
          <div className="card-title">
            <h3>Login</h3>
          </div>
          <hr />

          <div className="control-container">
            <div className="control">
              <div className="input-container">
                <img src={emailIcon} />

                <input
                  type="email"
                  required
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="control">
              <div className="input-container">
                <img src={passwordIcon} />

                <input
                  type="password"
                  required
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*****"
                />
              </div>
            </div>

            <div className="control">
              <Button type='submit' className={`card-button`}>Fazer Login</Button>
            </div>

            <div className="control-info">
              <div className="span">
                <input id="remind" type="checkbox" />
                <label htmlFor="remind"> Lembrar de mim</label>
              </div>
              <a href={"./forget-password"}>Esqueci a senha</a>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
}

export default Login;

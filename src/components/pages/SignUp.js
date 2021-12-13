import Card from "../ui/Card";
import Button from "../layout/Button";
import PasswordStrength from "../PasswordStrength";
import Login from "./Login";
import './SignUp.css'

import userIcon from './user-icon.svg'
import emailIcon from './email-icon.svg'
import passwordIcon from './password-icon.svg'
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";



function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
        }
    }, []);
    async function register(e) {
        e.preventDefault();

        let item = { name, email, password };
        let result = await fetch(
            "https://back-3035teach.herokuapp.com/profile/sign-up",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(item)
            }
        );
        const resultJson = await result.json();
        if (result.status === 200) {
            localStorage.setItem("user-info", JSON.stringify(result));
            history.push("/");
        }
    }



    return (


        <>

            <Card>


                <form
                    className='form'
                    onSubmit={register}
                    method="post"
                    action="/">
                    <div className='card-title'>
                        <h3>Cadastre-se</h3>
                    </div>
                    <hr />

                    <div className='control-container'>
                        <div className='control'>

                            <div className='input-container'>

                                <img src={userIcon} />
                                <input type="text" required id="name" value={name}
                                    onChange={(e) => setName(e.target.value)} placeholder="Nome completo" />

                            </div>


                        </div>

                        <div className='control'>
                            <div className='input-container'>
                                <img src={emailIcon} />

                                <input type="email" required id="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>

                        </div>

                        <div className='control'>

                            <div className='input-container'>

                                <img src={passwordIcon} />
                                <input type="password"
                                    required id="password"
                                    value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="*****"
                                    onChange={e => setPassword(e.target.value)} />

                            </div>
                            < PasswordStrength password={password} />

                        </div>

                        <div className='control'>
                            <Button  type="submit" className={`card-button`}>Fazer Login</Button>
                        </div>
                        <div className='control '>
                            <span className='span'>Já tem uma conta? <a href={'/'}><span className="login-link"> Fazer login</span> </a> </span>
                        </div>

                    </div>
                </form>



            </Card>
        </>
    )
}


export default SignUpPage;

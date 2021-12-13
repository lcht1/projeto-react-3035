import Card from "../ui/Card";
import Button from "../layout/Button";

import './ForgetPassword.css'

import emailIcon from './email-icon.svg'



function ForgetPassword() {


    return (
        <Card>


            <form className='form' >

                <div className='card-title'>
                    <h3>Esqueci a senha</h3>
                </div>
                <hr />

                <div className='control-container'>
                <div className='control'>
                    <div className='input-container'>
                        <img src={emailIcon} />

                        <input type="email" required id="email" placeholder="Email" />

                        
                    </div>

                    

                </div>
                <div className='control'>
                        <Button className={'card-button'}>Redefenir a senha</Button>
                    </div>
                
                </div>
            </form>
        </Card>
    )
}

export default ForgetPassword;
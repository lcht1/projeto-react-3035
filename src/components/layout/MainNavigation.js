import './Button.css'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import Button from './Button'
import './MainNavigation.css'


function MainNavigation() {
    return (
        <header className='header'>
            <div > <a href={'/'}> <img src={Logo}></img> </a></div>
            <nav>

                <Button className={`user-button`}><Link to='/signup'>Cadastre-se</Link></Button>

            </nav>



        </header>
    )
}

export default MainNavigation
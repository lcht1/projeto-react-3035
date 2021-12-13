import MainNavigation from './MainNavigation'
import './Layout.css'




function Layout(props) {
    return (
        <div>
            <MainNavigation />

            <main className='main'>
                {props.children}




            </main>

        
        </div>
    )
}

export default Layout;
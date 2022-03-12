import { NavLink } from "react-router-dom";
import './header.css';
const Header = (props) => {
    return <>
        <header>
            <section className="header-section container">
                <NavLink to='' style={{textDecoration: 'none'}}>
                    <h1 className="heading" >Mirco Blogging</h1>
                </NavLink>
                {
                    !props.user ? 
                    <NavLink to={'/login'} className="btn login-btn">Login</NavLink> : <h4>{props.user?.name}</h4>
                }
            </section>
        </header>
    </>
}

export default Header;
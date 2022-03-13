import React from 'react';
import GoogleLogin from 'react-google-login';
import authService from '../../shared/services/authService';
import {Context as AuthContext} from '../../shared/context/Auth-context';
import blogImage from '../../assets/images/blog-card.jpg'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button/Button'

import './component/login.css'
class Login extends React.Component {

    responseGoogleSuccess = (response) => {
        const data = {
            token: 'xcioeghgd6541fgAWB21VFD98GRD0ASD1',
            email: response.profileObj.email,
            name: response.profileObj.name
        };
        authService.setAuthToken(data)
        this.context.userLogin(data);
        this.props.history('')
    }
    responseGoogleFailure = (response) => {
        this.props.history('')
    }
    render() {
        return (
            <section className='login-section container'>
                <div className='login-main'>
                    <div className="login-banner" style={{backgroundImage: `url(${blogImage})`}}></div>
                    <div className='login-content'>
                        <h1 className='s-head'>Login with Google</h1>
                        <GoogleLogin
                            className='google-login-btn'
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                            // render={renderProps => (
                            //     <Button variant="outlined" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</Button>
                            //   )}
                            buttonText="Login with Google"
                            onSuccess={this.responseGoogleSuccess}
                            onFailure={this.responseGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                        <NavLink to="/"  className={"btn back-btn"}>Back to Homepage</NavLink>
                    </div>
                </div>
            </section>
        )
    }
}
Login.contextType = AuthContext;
export default Login;
import React from 'react';
import GoogleLogin from 'react-google-login';
import authService from '../../shared/services/authService';
import {Context as AuthContext} from '../../shared/context/Auth-context'
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
            <>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
            </>
        )
    }
}
Login.contextType = AuthContext;
export default Login;
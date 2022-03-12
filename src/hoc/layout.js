import React, { useEffect, useContext } from "react";
import authService from "../shared/services/authService";
import Header from "../features/header/header";
import {Context as AuthContext} from '../shared/context/Auth-context';
const Layout = props => {
    const {state,userLogin} = useContext(AuthContext);
    useEffect(() => {
        if(authService.isUserLoggedIn()) {
            const authData = authService.getAuthData();
            userLogin({token: authData.token, email: authData.email, name: authData.name})
        }
    }, [])
    return (
        <>
            <Header user={state.token ? state: undefined}/>
            <main className="main-section">
                {props.children}
            </main>
        </>
    )
}

export default React.memo(Layout);
import React, { useEffect, useContext } from "react";
import authService from "../shared/services/authService";
import Header from "../features/header/header";
import {Context as AuthContext} from '../shared/context/Auth-context';
import withRouter from "./withRouter";
const Layout = props => {
    const {state} = useContext(AuthContext);
    console.log(props.location)
    return (
        <>
            {!props?.location?.pathname?.includes('login') ?<Header user={state.token ? state: undefined}/> : null}
            <main className="main-section">
                {props.children}
            </main>
        </>
    )
}

export default withRouter(Layout);
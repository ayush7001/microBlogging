import React, { useContext } from "react";
import {Context as AuthContext} from '../shared/context/Auth-context';
const CanActivate = (props) => {
    const {state} = useContext(AuthContext);
    return (
        <>
            {
                state.token ? props.children : null
            }
        </>
    )
}

export default (CanActivate);
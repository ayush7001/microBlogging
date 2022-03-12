import React, {useReducer} from 'react';

const createDataContext = (reducer, actions, initialState) => {
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state, dispath] = useReducer(reducer, initialState);
        const boundActions = {};
        for(let key in actions) {
            boundActions[key] = actions[key](dispath)
        }
        return (
            <Context.Provider value={{state, ...boundActions}}> 
                {children}
            </Context.Provider>
        )
    }

    return {Context, Provider}
}

export default createDataContext;
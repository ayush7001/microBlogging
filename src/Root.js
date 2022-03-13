import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./hoc/errorBoundary";
import {Provider as AuthProvider}  from './shared/context/Auth-context';
import App from "./App";
const Root = () => {
    return <BrowserRouter>
                <ErrorBoundary>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </ErrorBoundary>
            </BrowserRouter>
}

export default Root;
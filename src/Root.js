import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./hoc/errorBoundary";

import App from "./App";
const Root = () => {
    return <BrowserRouter>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </BrowserRouter>
}

export default Root;
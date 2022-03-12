class AuthService {
    getAuthToken() {
        const auth = localStorage.getItem('micro-auth');
        return auth;
    }

    getAuthData() {
        const auth = localStorage.getItem('micro-auth');
        return JSON.parse(auth);
    }

    isUserLoggedIn() {
        const auth = localStorage.getItem('micro-auth');
        if(auth) {
            return true;
        } else {
            return false;
        }
    }

    setAuthToken(data) {
        localStorage.setItem('micro-auth', JSON.stringify(data));
    }
}

export default new AuthService();
class AuthService{
    static getToken(){
        return localStorage.getItem('token')
            }
    static setToken(token) {
        localStorage.setItem('token', token);
    }

    static removeToken() {
        localStorage.removeItem('token');
    }
}
        
export default AuthService;
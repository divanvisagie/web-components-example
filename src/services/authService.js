
let authentication = false
export function createAuthService() {
    return {
        isAuthenticated() {
            return authentication
        },
        setAuthentication(auth) {
            authentication = auth
        }
    }
}

export default createAuthService



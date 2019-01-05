import { createAuthService } from "./authService";
import { Router } from "../component-core/Router";
function createLoginService() {
    const authService = createAuthService();
    return {
        async performLogin(loginObject) {
            authService.setAuthentication(true);
            window.router.redirect('/')
        }
    };
}

export default createLoginService

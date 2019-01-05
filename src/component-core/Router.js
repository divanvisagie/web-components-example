export class Route {
    constructor(element, requiresAuth) {
        
        this.requiresAuth = requiresAuth || false
        // this.path = path
        this.element = element
    }
}

export class Router {
    constructor(routes) {
        this.routes = routes;
        const path = this.getRoute();
        console.log('current path', path);
        this.path = path;
        window.addEventListener('hashchange', (e) => {
            const path = this.getRoute();
            console.log('changing to path', path);
            this.path = path;
            this.changeCallback(e);
        });
    }
    getRoute() {
        return window.location.hash.replace('#', '');
    }
    onAuthChallenge(callback) {
        this.authChallengeCallback = callback
    }
    getPage() {
        const path = this.path;
        const route = this.routes[path] || this.routes['/'];
        if (route.requiresAuth) {
            const auth = this.authChallengeCallback()
            if (auth) return route.element
            else {
                window.location.hash = '#/login'
            }
            return
        }
        return route.element
    }
    onChange(callback) {
        this.changeCallback = callback;
        this.changeCallback();
    }

  
}

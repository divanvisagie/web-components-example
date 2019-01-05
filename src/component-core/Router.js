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
        window.addEventListener('hashchange', (e) => {
            const path = this.getRoute();
            console.log('changing to path', path);
            this.changeCallback(e);
        });
    }
    getRoute() {
        return window.location.hash.replace('#', '');
    }
    onAuthChallenge(callback) {
        this.authChallengeCallback = callback
    }
    redirect(path) {
        console.log('redirecting to', path)
        window.location.hash = path
        this.changeCallback()
    }
    getPage() {
        const path = this.getRoute();
        console.log('getting page for path', path)
        const route = this.routes[path] || this.routes['/'];
        if (route.requiresAuth) {
            const auth = this.authChallengeCallback()
            if (auth) return route.element
            else {
                console.warn('failed auth, heading back to login')
                window.location.hash = '#/login'
            }
            return this.routes['/login'].element
        }
        return route.element
    }
    onChange(callback) {
        this.changeCallback = callback;
        this.changeCallback();
    }

  
}

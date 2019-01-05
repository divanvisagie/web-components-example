import { html } from 'lit-html'
import { Component } from './component-core/Component'

import css from './app-container.css'
import LoginPage from './pages/login-page'
import HomePage from './pages/home-page'
import { Router, Route } from './component-core/Router';
import createAuthService from './services/authService';


class AppContainer extends Component {
    constructor() {
        super()

        const authService = createAuthService()
       
        this.css = css

        this.state = {
            appName: 'Hello',
            name: '',
            page: HomePage
        }

        const router = new Router({
            '/': new Route(HomePage, true),
            '/login': new Route(LoginPage)
        })
        router.onAuthChallenge(e => {
            return authService.isAuthenticated()
        })
        router.onChange(e => {
            console.log('changing to page')
            this.setState({
                page: router.getPage()
            })
        })

        
        
    }

    handleInputChange(event) {
        this.setState({
            name : event.target.value
        })
        console.log(css)
    }

    render({appName, name, page}) {
        console.log('render')
        return html`
            <div>
                ${page}
            </div>
        `
    }
}

window.customElements.define('app-container', AppContainer)

export default AppContainer
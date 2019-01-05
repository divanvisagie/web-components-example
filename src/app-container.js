import { html } from 'lit-html'
import { Component } from './component-core/Component'

import css from './app-container.css'
import milligram from 'milligram'
import LoginPage from './pages/login-page'
import HomePage from './pages/home-page'
import { Router, Route } from './component-core/Router';


class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            appName: 'Hello',
            name: '',
            page: HomePage
        }
        this.css = css

        const router = new Router({
            '/': new Route(HomePage, true),
            '/login': new Route(LoginPage)
        })
        router.onAuthChallenge(e => {
            return true
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
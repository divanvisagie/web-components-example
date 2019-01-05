import { html } from 'lit-html'
import { Component } from './component-core/Component'

import css from './AppContainer.css'
import milligram from 'milligram'
import LoginPage from './pages/login-page'


class Router {
    constructor() {
        const path = this.getRoute()
        console.log('current path', path)
        window.addEventListener('hashchange', (e) => {
            const path = this.getRoute()
            console.log('changing to path', path)
        })
    }

    getRoute() {
        return window.location.hash.replace('#','')
    }

}



class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            appName: 'Hello',
            name: ''
        }
        this.css = css

        const router = new Router()
    }

    handleInputChange(event) {
        this.setState({
            name : event.target.value
        })
        console.log(css)
    }

    render({appName, name}) {
        console.log('render')
        return html`
            <div>

                ${LoginPage}

            </div>
        `
    }
}

window.customElements.define('app-container', AppContainer)

export default AppContainer
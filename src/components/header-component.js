import Component, { createComponent } from '../component-core/Component'
import { html } from 'lit-html';

import css from './header-component.css'
import bs from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import createAuthService from '../services/authService';

export default createComponent('header-component', class extends Component {
    constructor(){
        super()
        this.state = {
            authenticated: false            
        }

        this.css = bs + css

        this.authService = createAuthService()

        this.setState({
            authenticated: this.authService.isAuthenticated()
        })
    }

    handleLogout(e) {
        console.log('logout')
        this.authService.setAuthentication(false)
        window.router.redirect('/')
    }

    renderAuthenticated() {
        return html`<header class="header">
            <a href="#/">
                <span>Component Website</span>
            </a>
            <a href="#/" @click=${e => this.handleLogout(e)}>Logout</a>
    </header>`
    }

    renderUnAuthenticated() {
        return html`<div class="jumbotron";>
            <h1>Component Website</h1>
        </div>`
    }

    render({authenticated}){
        return authenticated ? 
            this.renderAuthenticated() : this.renderUnAuthenticated()
    }
    
})

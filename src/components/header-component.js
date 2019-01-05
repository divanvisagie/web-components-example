import Component, { createComponent } from '../component-core/Component'
import { html } from 'lit-html';

import css from './header-component.css'
import bs from '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default createComponent('header-component', class extends Component {
    constructor(){
        super()
        this.state = {
            authenticated: false            
        }

        this.css = bs + css
    }

    renderAuthenticated() {
        return html`<div>
            Secure Header
        </div>`
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

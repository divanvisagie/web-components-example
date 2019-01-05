import {html} from 'lit-html'

import bs from '../../node_modules/bootstrap/dist/css/bootstrap.css'

import css from './login-page.css'

import '../components/login-form'
import '../components/header-component'
import Component, { createComponent } from '../component-core/Component';

export default createComponent('login-page', class extends Component{
    constructor() {
        super()
        this.css = bs + css
    }
    
    render () {
        return html`
            <header-component></header-component>
            <div class="content">
                <div class="jumbotron">
                    <h3>Login</h3>
                    <login-form></login-form>
                </div>
            </div>
        `
    }
})
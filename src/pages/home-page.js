import Component, { createComponent } from "../component-core/Component";
import { html } from "lit-html";

import HeaderComponent from '../components/header-component'

export default createComponent('home-page', class extends Component {
    constructor() {
        super()
    }
    render () {
        return html`
            <header-component></header-component>
            <div>

                <h3>
                    I am the Home page
                </h3>
            </div>
        `
    }
})
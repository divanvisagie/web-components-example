import Component, { createComponent } from "../component-core/Component";
import { html } from "lit-html";

export default createComponent('home-page', class extends Component {
    constructor() {
        super()
    }
    render () {
        return html`
            <div>
                <h3>
                    I am the Home page
                </h3>
            </div>
        `
    }
})
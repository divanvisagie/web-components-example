import { html } from 'lit-html'
import { Component } from './Component'

import css from './AppContainer.css'
import milligram from 'milligram'
import LoginForm  from './LoginForm';


class AppContainer extends Component {
    constructor() {
        const styling = milligram + css
        super(styling)
        this.state = {
            appName: 'Hello',
            name: ''
        }
        this.performRender()
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
            <div class="app-container">
                <h3>${appName}</h3>
                <p>

                <span>This app says ${appName}</span>
                </p>
                <span> ${name} </span>
                <form>
                    <input value="${name}" 
                        type="text" 
                        placeholder="Enter Your Name"
                        @input=${e => this.handleInputChange(e)}
                    />
                    <input type="submit">
                </form>

                ${LoginForm()}
            </div>
        `
    }
}

window.customElements.define('app-container', AppContainer)

export default AppContainer
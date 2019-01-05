import { Component } from './Component';
import milligram from 'milligram';
import { html } from 'lit-html'

export class LoginForm extends Component {
    constructor() {
        super(milligram);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        console.log(this.attributes)
        return html`
            <form>
                This is my form
            <form/>
        `
    }
}
window.customElements.define('login-form', LoginForm)

export default  () => html`
        <login-form cheese="gauda"></login-form>
    `

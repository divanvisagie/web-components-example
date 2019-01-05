import Component, { createComponent } from '../component-core/Component'
import milligram from 'milligram'

import css from './login-form.css'
import bs from '../../node_modules/bootstrap/dist/css/bootstrap.css'

import { html } from 'lit-html'

export default createComponent('login-form', class extends Component {

    constructor(){
        super()
        // this.css = milligram

        this.state =  {
            username: '',
            password: ''
        }

        this.css = bs + css
    }

    
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('there was a submission')
    }

    render({username}) {
        return html`
            <form @submit=${e => this.handleSubmit(e)}>
                <div class="form-group">
                    <div class="form-group">
                        <input type="text"
                            class="form-control"
                            name="username"
                            placeholder="Username"
                            @input=${e => this.handleInputChange(e)}/>
                    </div>
                    <div class="form-group">
                        <input type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            @input=${e => this.handleInputChange(e)}/>
                    </div>
                    <input class="btn btn-primary" type="submit" value="Login">
                </div>
            <form/>
        `
    }
})

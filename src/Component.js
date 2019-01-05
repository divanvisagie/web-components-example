import { html,render } from 'lit-html'

export class Component extends HTMLElement {
    constructor(css) {
        super()
        this.root = this.attachShadow({
           mode: 'open'
        })
        this.styleTag = html`
            <style type="text/css" media="screen">
                ${css}
            </style>
        `
    }

    render(props) {
        console.error('You need to override the render function')
    }
    performRender() {
        const template = this.render(this.state)

        const frame = html`
            ${this.styleTag}
            ${template}
        `
        render(frame, this.root)
    }
    setState(stateObject) {
        this.state = Object.assign(this.state,stateObject)
        this.performRender()
    }
    /**
     * From HTMLElement Lifecycle
     */
    connectedCallback() {
        this.performRender()
    }
}

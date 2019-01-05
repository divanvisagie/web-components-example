import { html,render } from 'lit-html'

function createComponent(name, htmlElement) {
    if (!window.customElements.get(name)) {
        window.customElements.define(name, htmlElement)
    }
    return html`
        <${name}></${name}>
    `
}


export class Component extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({
            mode: 'open'
        })
    }

    set css(css) {
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


export default Component
export {
    createComponent
}
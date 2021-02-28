import { html } from './services/index.js'

function App(props) {
  return html`
  <main>
    <h1>Hello ${props.name}!</h1>
  </main>
  `
}

export default App
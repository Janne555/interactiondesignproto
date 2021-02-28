import { html } from './services/index.js'
import App from './App.js'

ReactDOM.render(html`
  <${App} name="janne" />
`, document.body)
import { html } from './services/index.js'
import { HashRouter } from './components/Router.js'
import App from './App.js'
import { VideoProvider } from './context/videoContext.js'

ReactDOM.render(html`
  <${HashRouter}>
    <${VideoProvider}>
      <${App} />
    <//>
  <//>
`, document.body)
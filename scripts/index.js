import { html } from './services/index.js'
import { HashRouter } from './components/Router.js'
import App from './App.js'
import { VideoProvider } from './context/videoContext.js'
import { VariantProvider } from './context/variantContext.js'

ReactDOM.render(html`
  <${HashRouter}>
    <${VideoProvider}>
      <${VariantProvider}>
        <${App} />
      <//>
    <//>
  <//>
`, document.body)
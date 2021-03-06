import { html } from './services/index.js'
import { HashRouter } from './components/Router.js'
import App from './App.js'
import { VideoProvider } from './context/videoContext.js'
import { VariantProvider } from './context/variantContext.js'
import { ThemeProvider } from './components/MaterialUI.js'

const theme = MaterialUI.createMuiTheme({
  palette: {
    primary: {
      main: '#0000ff'
    }
  }
})

ReactDOM.render(html`
  <${HashRouter}>
    <${VideoProvider}>
      <${VariantProvider}>
        <${ThemeProvider} theme=${theme} >
          <${App} />
        <//>
      <//>
    <//>
  <//>
`, document.body)
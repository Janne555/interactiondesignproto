import { html } from './services/index.js'
import { HashRouter } from './components/Router.js'
import App from './App.js'
import { VideoProvider } from './context/videoContext.js'
import { ThemeProvider } from './components/MaterialUI.js'

const theme = MaterialUI.createMuiTheme({
  palette: {
    primary: {
      main: '#0053a5'
    }
  },
  typography: [
    'Lato',
    'Roboto'
  ]
})

ReactDOM.render(html`
  <${HashRouter}>
    <${VideoProvider}>
      <${ThemeProvider} theme=${theme} >
        <${App} />
      <//>
    <//>
  <//>
`, document.body)
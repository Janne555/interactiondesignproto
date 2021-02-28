import { html } from './services/index.js'
import { HashRouter, Link, Route, Switch } from './components/Router.js'
import { List, ListItem } from './components/MaterialUI.js'
import Variant1 from './components/Variant1.js'
import Variant4 from './components/Variant4.js'
import Variant3 from './components/Variant3.js'
import Variant2 from './components/Variant2.js'

function App(props) {
  return html`
    <${HashRouter}>
      <main>
        <${Switch}>
          <${Route} path="/variant-1">
            <${Variant1} />
          <//>
          <${Route} path="/variant-2">
            <${Variant2} />
          <//>
          <${Route} path="/variant-3">
            <${Variant3} />
          <//>
          <${Route} path="/variant-4">
            <${Variant4} />
          <//>
          <${Route} path="/">
            <h1>Attendance Management System Interactive Prototype</h1>
            <h2>Choose from the following options</h2>
            <${List}>
              <${ListItem}>
                <${Link} to="/variant-1">Happy path<//>
              <//>
              <${ListItem}>
                <${Link} to="/variant-2">Fails on card scanning<//>
              <//>
              <${ListItem}>
                <${Link} to="/variant-3">Fails on facial recognition<//>
              <//>
              <${ListItem}>
                <${Link} to="/variant-4">Fails randomly<//>
              <//>
            <//>
          <//>
        <//>
      </main>
    <//>
  `
}

export default App
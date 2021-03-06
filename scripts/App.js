import { html } from './services/index.js'
import { Link, Route, Switch as RouterSwitch } from './components/Router.js'
import { Button, Switch } from './components/MaterialUI.js'
import Variant1 from './components/Variant1.js'
import Variant4 from './components/Variant4.js'
import Variant3 from './components/Variant3.js'
import Variant2 from './components/Variant2.js'
import { useVideo } from './context/videoContext.js'
import Variant5 from './components/Variant5.js'
import { useVariantContext } from './context/variantContext.js'

function App() {
  const { requestWebCam, message, stream } = useVideo()
  const { setIsTabletMode, isTabletMode } = useVariantContext()

  function handleTabletModeChange(event) {
    setIsTabletMode(event.target.checked)
  }

  return html`
    <div>
      <${RouterSwitch}>
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
        <${Route} path="/variant-5">
          <${Variant5} />
        <//>
        <${Route} path="/">
          <h1>Attendance Management System Interactive Prototype</h1>
          <h2>Choose from the following options</h2>
          <p>
            This page requires permission to use your camera but the video is only visible locally.
            Click the button to grant permission
          </p>
            <${Button} disabled=${Boolean(stream)} onClick=${requestWebCam} className="margin" variant="outlined">Grant Web Cam<//>
            <span className="padding">${message}</span>
          <p>
            On the id scan page you can click the icon to simulate a card scan.
            <br /><br />
            There are no UI elements that take you back to this page because the actual system
            wouldn't have this meta page. You can come back here by removing the hash part of the url
            (after the # sign)
          </p>
          <div>
            <h3>Options</h3>
            <div>
              <h4>Simulate tablet</h4>
              <p>
                Simulate tablet option forces the layout to a 4:3 aspect ratio. It also adds a border that represents
                the edges of the tablet's screen.
              </p>
              <${Switch} checked=${isTabletMode} onChange=${handleTabletModeChange} name="tablet-mode" />
              <span>Tablet Mode</span>
            </div>
          </div>
          <h3>Variants</h3>
          <ul>
            <li>
              <${Link} to="/variant-1">Happy path<//>
              <p>This option goes through the attendance registration flow without any errors taking place</p>
            </li>
            <li>
              <${Link} to="/variant-2">Fails on card scanning<//>
            </li>
            <li>
              <${Link} to="/variant-3">Fails on facial recognition<//>
            </li>
            <li>
              <${Link} to="/variant-4">Fails for unknown reason<//>
            </li>
            <li>
              <${Link} to="/variant-5">Not registered for training<//>
            </li>
          </ul>
        <//>
      <//>
    </div>
  `
}

export default App
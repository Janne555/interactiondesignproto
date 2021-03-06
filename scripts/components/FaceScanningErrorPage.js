import { html } from '../services/index.js'
import { EyeOffIcon } from './Icons.js'
import { Button } from './MaterialUI.js'

/**
 * 
 * @param {{message: string[], onBackToStart: () => void }} param0 
 */
function FaceScanningErrorPage({ message, onBackToStart }) {

  return html`
    <div className="page face-id-error">
      <header className="sub-header">
        <h1>Oops!</h1>
      </header>
      <div className="content">
        <h2>${message[0]}</h2>
        <h3>${message[1]}</h3>
        <div className="icon">
          <${EyeOffIcon} />
        </div>
        <p className="center-text">You can log in using your credentials and update your photo</p>
        </div>
      <footer className="buttons">
        <${Button} color="primary" variant="contained" onClick=${onBackToStart}>Back to start<//>
        <${Button} color="primary" variant="contained" onClick=${onBackToStart}>Login In<//>
      </footer>
    </div>
  `
}


export default FaceScanningErrorPage
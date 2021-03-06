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
      <header>
        <h1>Oops!</h1>
      </header>
      <div className="content">
        <h2>${message[0]}</h2>
        <h3>${message[1]}</h3>
        <div className="icon">
          <${EyeOffIcon} />
        </div>
        <p>Please contact the administrator</p>
        <${Button} color="primary" variant="contained" onClick=${onBackToStart}>Back to start<//>
      </div>
    </div>
  `
}


export default FaceScanningErrorPage
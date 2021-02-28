import { html } from '../services/index.js'
import { MehIcon } from './Icons.js'
import { Button } from './MaterialUI.js'

/**
 * 
 * @param {{message: string, onBackToStart: () => void }} param0 
 */
function UnknownErrorPage({ message, onBackToStart }) {

  return html`
    <div className="page unknown-error">
      <header>
        <h1>Oops!</h1>
      </header>
      <div className="content">
        <h2>${message}</h2>
        <div className="icon">
          <${MehIcon} />
        </div>
        <p>Please try again</p>
        <${Button} variant="outlined" onClick=${onBackToStart}>Back to start<//>
      </div>
    </div>
  `
}


export default UnknownErrorPage
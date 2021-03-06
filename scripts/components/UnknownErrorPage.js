import { MehIcon } from './Icons.js'
import { html } from '../services/index.js'
import { Button } from './MaterialUI.js'

/**
 * 
 * @param {{message: string, onBackToStart: () => void }} param0 
 */
function UnknownErrorPage({ message, onBackToStart }) {

  function handleSubmit() {
    alert("this has not been implemented")
    onBackToStart()
  }

  return html`
    <div className="page unknown-error">
      <header className="sub-header">
        <h1>Oops!</h1>
      </header>
      <div className="content">
        <h2>${message}</h2>
        <div className="icon">
          <${MehIcon} />
        </div>
        <p>Please try again</p>
        </div>
      <footer className="buttons">
        <${Button} color="primary" variant="contained" onClick=${onBackToStart}>Back to start<//>
        <${Button} color="primary" variant="contained" onClick=${handleSubmit}>Submit Report<//>
      </footer>
    </div>
  `
}


export default UnknownErrorPage
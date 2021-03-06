import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { FrownIcon } from './Icons.js'
import { Button } from './MaterialUI.js'

/**
 * 
 * @param {{message: string, onBackToStart: () => void }} param0 
 */
function CardReaderErrorPage({ message, followUpMessage, onBackToStart }) {
  const { config } = useVariantContext()

  return html`
    <div className="page card-reader-error">
      <header className="sub-header">
        <h1>Oops!</h1>
      </header>
      <div className="content">
        <h2>${message}</h2>
        <div className="icon">
          <${FrownIcon} />
        </div>
        <p className="center-text">${followUpMessage}</p>
        </div>
      <footer className="buttons"> 
        <${Button} color="primary" variant="contained" onClick=${onBackToStart}>Back to start<//>
        ${config.showLoginButton &&
          html`<${Button}  color="primary" variant="contained" onClick=${() => alert("not implemented")}>Login to Register<//>`
        }
      </footer>
    </div>
  `
}


export default CardReaderErrorPage
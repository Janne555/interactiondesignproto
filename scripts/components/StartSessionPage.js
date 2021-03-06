import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { Button } from './MaterialUI.js'
/**
 * 
 * @param {{onStartSession: () => void}} param0 
 */
function StartSessionPage({ onStartSession }) {
  const { config } = useVariantContext()

  return html`
    <div className="page start-session">
      <div className="content">
        <${Button} color="primary" variant="contained" onClick=${onStartSession}>Start Training Session<//>
      </div>
    </div>
  `
}

export default StartSessionPage
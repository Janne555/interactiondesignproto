import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { Button } from './MaterialUI.js'
/**
 * 
 * @param {{onStartSession: () => void}} param0 
 */
function ManagementPage({ onStartSession }) {
  const { config } = useVariantContext()

  return html`
    <div className="page start-session">
      <div className="content">
        <header className="sub-header">
          <h2>Management</h2>
        </header>
        <div className="content">
        </div>
        <footer className="buttons">
          
        </footer>
      </div>
    </div>
  `
}

export default ManagementPage
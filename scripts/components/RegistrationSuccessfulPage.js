import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { SmileIcon } from './Icons.js'
import { Button } from './MaterialUI.js'
/**
 * 
 * @param {{backToStart: () => void}} param0 
 */
function RegistrationSuccessfulPage({ backToStart }) {
  const [seconds, setSeconds] = React.useState(5)
  const { config } = useVariantContext()

  React.useEffect(() => {
    let timeout
    if (seconds === 0) {
      backToStart()
    } else {
      timeout = setTimeout(() => setSeconds(prev => prev - 1), 1000)
    }
    return () => { timeout && clearTimeout(timeout) }
  }, [seconds])

  return html`
    <div className="page attendance-registered">
      <header className="sub-header">
        <h1>Your attendance has been registered</h1>
      </header>
      <div className="content">
        <div className="center icon"><${SmileIcon} /></div>
        <h2>This view will automatically reset in ${seconds}s</h2>
        <div className="countdown-line" />
      </div>
      <footer className="buttons">
        <${Button} color="primary" variant="contained" onClick=${backToStart}>Back to start<//>
      </footer>
    </div>
  `
}

export default RegistrationSuccessfulPage
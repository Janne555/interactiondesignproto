import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { CheckCircle, NFCIcon } from './Icons.js'
import { CircularProgress } from './MaterialUI.js'


/**
 * 
 * @param {{onSuccess: (name: string) => void, onFailure: (error?: any) => void}} param0 
 */
function CardReaderPage({ onSuccess, onFailure }) {
  const [phase, setPhase] = React.useState("idle") // idle, reading, done
  const { config } = useVariantContext()

  function handleCardRead() {
    setPhase("reading")
  }

  React.useEffect(() => {
    let timeout
    if (phase === "reading") {
      timeout = setTimeout(() => {
        if (config.cardReadingErrorMessage) {
          onFailure(config.cardReadingErrorMessage)
        } else {
          setPhase("done")
        }
      }, 1000)
    }

    return () => { timeout && clearTimeout(timeout) }
  }, [phase])

  React.useEffect(() => {
    let timeout
    if (phase === "done") {
      timeout = setTimeout(() => {
        onSuccess(config.name)
      }, 1000)
    }

    return () => { timeout && clearTimeout(timeout) }
  }, [phase])

  return html`
    <div className="page card-reader">
      <header className="sub-header">
        <h1>Scan your ID card to proceed</h1>
      </header>
      <div className="content">
      ${{
        idle: html`
          <div className="center icon card-reader-icon" onClick=${handleCardRead}>
            <${NFCIcon} />
          </div>
        `,
        reading:  html`<div className="center progress-spinner"><${CircularProgress} /></div>`,
        done: html`<div className="center icon"><${CheckCircle} /></div>`
      }[phase]}
      </div>
    </div>
  `
}

export default CardReaderPage
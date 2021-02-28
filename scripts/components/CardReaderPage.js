import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import { NFCIcon } from './Icons.js'
import { CircularProgress } from './MaterialUI.js'


/**
 * 
 * @param {{onSuccess: (name: string) => void, onFailure: (error?: any) => void}} param0 
 */
function CardReaderPage({ onSuccess, onFailure }) {
  const [isReadingCard, setIsReadingCard] = React.useState(false)
  const { config } = useVariantContext()

  function handleCardRead(event) {
    setIsReadingCard(true)
  }

  React.useEffect(() => {
    let timeout
    if (isReadingCard) {
      timeout = setTimeout(() => {
        if (config.cardReadingErrorMessage) {
          onFailure(config.cardReadingErrorMessage)
        } else {
          onSuccess("Kalle")
        }
      }, 1000)
    }

    return () => { timeout && clearTimeout(timeout) }
  }, [isReadingCard])

  return html`
    <div className="page card-reader">
      <header>
        <h1>Scan your ID card to proceed</h1>
      </header>
      ${isReadingCard
      ? html`<div className="progress-spinner"><${CircularProgress} /></div>`
      : html`
          <div className="icon" onClick=${handleCardRead}>
            <${NFCIcon} />
          </div>
        `
    }
    </div>
  `
}

export default CardReaderPage
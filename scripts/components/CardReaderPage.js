import { html } from '../services/index.js'
import { NFCIcon } from './Icons.js'
import { Button, CircularProgress } from './MaterialUI.js'


/**
 * 
 * @param {{onSuccess: (name: string) => void, onFailure: (error?: string) => void}} param0 
 */
function CardReaderPage({ onSuccess, onFailure }) {
  const [isReadingCard, setIsReadingCard] = React.useState(false)

  function handleCardRead(event) {
    setIsReadingCard(true)
  }

  React.useEffect(() => {
    let timeout
    if (isReadingCard) {
      timeout = setTimeout(() => { onSuccess("Kalle") }, 1000)
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
import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import RegistrationSuccessfulPage from './RegistrationSuccessfulPage.js'
import CardReaderErrorPage from './CardReaderErrorPage.js'
import CardReaderPage from './CardReaderPage.js'
import FaceIDPage from './FaceIDPage.js'
import FaceScanningErrorPage from './FaceScanningErrorPage.js'
import UnknownErrorPage from './UnknownErrorPage.js'
import StartSessionPage from './StartSessionPage.js'
import ManagementPage from './ManagementPage.js'

function RegistrationFlow() {
  // card-reader, card-reader-error, face-id, face-id-error, unknown-error, attendance-registered, start-session, management
  const { config, isTabletMode } = useVariantContext()
  const firstPage = config.isConnectedToSession ? "card-reader" : "start-session"
  const [page, setPage] = React.useState(firstPage)
  const [name, setName] = React.useState()
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    if (config.unknownError && page === "face-id") {
      setError(config.unknownError)
      setPage("unknown-error")
    }
  }, [config, page])

  function handleCancel() {
    setPage(firstPage)
  }

  function handleSuccesfulCardReading(name) {
    setName(name)
    setPage("face-id")
  }

  function handleFailedCardReading(error) {
    setError(error)
    setPage("card-reader-error")
  }

  function handleFaceIdSuccess() {
    if (config.isInstructor) {
      setPage("management")
    } else {
      setPage("attendance-registered")
    }
  }

  function handleBackToStart() {
    handleCancel()
  }

  function handleFaceScanningFailure(error) {
    setError(error)
    setPage("face-id-error")
  }

  function handleStartSession() {
    setPage("card-reader")
  }

  return html`
    <div className=${isTabletMode ? "main tablet" : "main"}>
      <header className="main-header">
        <h1>Attendance  System</h1>
      </header>
      <article>
        ${{
      "start-session": html`<${StartSessionPage} onStartSession=${handleStartSession} />`,
      "card-reader": html`<${CardReaderPage} onSuccess=${handleSuccesfulCardReading} onFailure=${handleFailedCardReading}  onBackToStart=${handleBackToStart} />`,
      "card-reader-error": html`<${CardReaderErrorPage} message=${error} onBackToStart=${handleBackToStart} followUpMessage=${config.followUpMessage} />`,
      "face-id": html`<${FaceIDPage} onCancel=${handleCancel} onSuccess=${handleFaceIdSuccess} name=${name} onFailure=${handleFaceScanningFailure} />`,
      "face-id-error": html`<${FaceScanningErrorPage} message=${error} onBackToStart=${handleBackToStart} />`,
      "unknown-error": html`<${UnknownErrorPage} onBackToStart=${handleBackToStart} message=${error} />`,
      "attendance-registered": html`<${RegistrationSuccessfulPage} backToStart=${handleBackToStart} />`,
      "management": html`<${ManagementPage} />`
    }[page]}
      </article>
    </div>
  `
}

export default RegistrationFlow
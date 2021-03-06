import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import AttendanceRegisteredPage from './AttendanceRegisteredPage.js'
import CardReaderErrorPage from './CardReaderErrorPage.js'
import CardReaderPage from './CardReaderPage.js'
import FaceIDPage from './FaceIDPage.js'
import FaceScanningErrorPage from './FaceScanningErrorPage.js'
import UnknownErrorPage from './UnknownErrorPage.js'

function AttendanceFlow() {
   // card-reader, card-reader-error, face-id, face-id-error, unknown-error, attendance-registered
  const [page, setPage] = React.useState("card-reader")
  const [name, setName] = React.useState()
  const [error, setError] = React.useState("")
  const { config } = useVariantContext()

  React.useEffect(() => {
    if (config.unknownError && page === "face-id") {
      setError(config.unknownError)
      setPage("unknown-error")
    }
  }, [config, page])

  function handleCancel() {
    setPage("card-reader")
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
    setPage("attendance-registered")
  }

  function handleBackToStart() {
    // handleCancel()
  }

  function handleFaceScanningFailure(error) {
    setError(error)
    setPage("face-id-error")
  }

  return html`
    <div className="tablet">
      ${{
        "card-reader": html`<${CardReaderPage} onSuccess=${handleSuccesfulCardReading} onFailure=${handleFailedCardReading} />`,
        "card-reader-error": html`<${CardReaderErrorPage} message=${error} onBackToStart=${handleBackToStart} followUpMessage=${config.followUpMessage} />`,
        "face-id": html`<${FaceIDPage} onCancel=${handleCancel} onSuccess=${handleFaceIdSuccess} name=${name} onFailure=${handleFaceScanningFailure} />`,
        "face-id-error": html`<${FaceScanningErrorPage} message=${error} onBackToStart=${handleBackToStart} />`,
        "unknown-error": html`<${UnknownErrorPage} onBackToStart=${handleBackToStart} message=${error} />`,
        "attendance-registered": html`<${AttendanceRegisteredPage} backToStart=${handleBackToStart} />`
      }[page]}
    </div>
  `
}

export default AttendanceFlow
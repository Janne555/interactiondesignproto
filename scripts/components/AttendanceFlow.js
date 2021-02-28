import { html } from '../services/index.js'
import AttendanceRegisteredPage from './AttendanceRegisteredPage.js'
import CardReaderErrorPage from './CardReaderErrorPage.js'
import CardReaderPage from './CardReaderPage.js'
import FaceIDPage from './FaceIDPage.js'

function AttendanceFlow({ config = {} }) {
  const [page, setPage] = React.useState("card-reader-error")
  const [name, setName] = React.useState()
  const [error, setError] = React.useState("fail")

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
    handleCancel()
  }

  return html`
    ${{
      "card-reader": html`<${CardReaderPage} onSuccess=${handleSuccesfulCardReading} onFailure=${handleFailedCardReading} />`,
      "card-reader-error": html`<${CardReaderErrorPage} message=${error} onBackToStart=${handleBackToStart} />`,
      "face-id": html`<${FaceIDPage} onCancel=${handleCancel} onSuccess=${handleFaceIdSuccess} name=${name} />`,
      "attendance-registered": html`<${AttendanceRegisteredPage} backToStart=${handleBackToStart} />`
    }[page]}
  `
}

export default AttendanceFlow
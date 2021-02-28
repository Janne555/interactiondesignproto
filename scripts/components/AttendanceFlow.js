import { html } from '../services/index.js'
import AttendanceRegisteredPage from './AttendanceRegisteredPage.js'
import CardReaderPage from './CardReaderPage.js'
import FaceIDPage from './FaceIDPage.js'

function AttendanceFlow() {
  const [page, setPage] = React.useState("card-reader")
  const [name, setName] = React.useState()

  function handleCancel() {
    setPage("card-reader")
  }

  function handleSuccesfulCardReading(name) {
    setName(name)
    setPage("face-id")
  }

  function handleFaceIdSuccess() {
    setPage("attendance-registered")
  }

  function handleBackToStart() {
    handleCancel()
  }

  return html`
    ${{
      "card-reader": html`<${CardReaderPage} onSuccess=${handleSuccesfulCardReading} />`,
      "face-id": html`<${FaceIDPage} onCancel=${handleCancel} onSuccess=${handleFaceIdSuccess} name=${name} />`,
      "attendance-registered": html`<${AttendanceRegisteredPage} backToStart=${handleBackToStart} />`
    }[page]}
  `
}

export default AttendanceFlow
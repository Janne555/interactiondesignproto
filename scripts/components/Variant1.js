import { html } from '../services/index.js'
import CardReaderPage from './CardReaderPage.js'
import FaceIDPage from './FaceIDPage.js'

function Variant1() {
  const [page, setPage] = React.useState("face-id")
  const [name, setName] = React.useState()

  function handleCancel() {
    setPage("card-reader")
  }

  function handleSuccesfulCardReading(name) {
    setName(name)
    setPage("face-id")
  }

  function handleFaceIdSuccess() {
    
  }

  return html`
    ${{
      "card-reader": html`<${CardReaderPage} onSuccess=${handleSuccesfulCardReading} />`,
      "face-id": html`<${FaceIDPage} onCancel=${handleCancel} onSuccess=${handleFaceIdSuccess} name=${name} />`
    }[page]}
  `
}

export default Variant1
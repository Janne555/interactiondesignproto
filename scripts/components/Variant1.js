import { html } from '../services/index.js'
import FaceIDPage from './FaceIDPage.js'

function Variant1() {
  const [page, setPage] = React.useState("face-id")
  const [name, setName] = React.useState("Kalle")

  function handleCancel() {

  }

  return html`
    <div>
    ${{
      "face-id": html`<${FaceIDPage} onCancel=${handleCancel} name=${name} />`
    }[page]}
    </div>
  `
}

export default Variant1
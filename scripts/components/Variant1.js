import { html } from '../services/index.js'
import FaceIDPage from './FaceIDPage.js'

function Variant1() {
  const [page, setPage] = React.useState("face-id")

  return html`
    <div>
    ${{
      "face-id": html`<${FaceIDPage} />`
    }[page]}
    </div>
  `
}

export default Variant1
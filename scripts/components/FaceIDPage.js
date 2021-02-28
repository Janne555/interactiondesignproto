import { html } from '../services/index.js'
import CameraView from './CameraView.js'

function FaceIDPage() {
  return html`
    <div>
      <h1>Face ID</h1>
      <${CameraView} />
    </div>
  `
}

export default FaceIDPage
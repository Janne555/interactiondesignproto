import { html } from '../services/index.js'
import CameraView from './CameraView.js'
import { Button, CircularProgress } from './MaterialUI.js'

/**
 * 
 * @param {{name: string}} param0 
 */
function FaceIDPage({ name }) {
  return html`
    <div className="face-id-page">
      <h1>Hello ${name}!</h1>
      <${CameraView} />
      <h2>Just making sure it's you</h2>
      <${CircularProgress} />
      <${Button} variant="outlined">Cancel<//>
    </div>
  `
}

export default FaceIDPage
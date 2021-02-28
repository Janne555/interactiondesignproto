import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import CameraView from './CameraView.js'
import { Button, CircularProgress } from './MaterialUI.js'

/**
 * 
 * @param {{name: string, onCancel: () => void, onSuccess: () => void, onFailure: (error: any) => void }} param0 
 */
function FaceIDPage({ name, onCancel, onSuccess, onFailure }) {
  const { config } = useVariantContext()

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      if (config.faceScanningError) {
        onFailure(config.faceScanningError)
      } else {
        onSuccess()
      }
    }, 3000)

    return () => { clearTimeout(timeout) }
  }, [])

  return html`
    <div className="face-id page">
      <header>
        <h1>Hello ${name}!</h1>
      </header>
      <div className="content">
        <${CameraView} />
        <h2>Just making sure it's you</h2>
        <${CircularProgress} />
        <${Button} onClick=${onCancel} variant="outlined">Cancel<//>
      </div>
    </div>
  `
}

export default FaceIDPage
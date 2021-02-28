import { useVideo } from '../context/videoContext.js'
import { html } from '../services/index.js'

function CameraView() {
  const { isFallback, stream } = useVideo()
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream
      try {
        videoRef.current.play()
      } catch (error) {
        console.error(error)
      }
    }
  }, [stream])

  if (isFallback) {
    return html`
      <div className="camera-view">
        <div className="no-cam-message">
          <p>This is where a web cam image is shown when available</p>
        </div>
      </div>
    `
  }

  return html`
    <div className="camera-view">
      <video ref=${videoRef} />
    </div>
  `
}

export default CameraView
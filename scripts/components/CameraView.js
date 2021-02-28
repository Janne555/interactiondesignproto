import { html } from '../services/index.js'

function CameraView() {
  const videoRef = React.useRef(null)
  const [error, setError] = React.useState()
  const [isVideo, setIsVideo] = React.useState(false)

  React.useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream
        })
        .catch(error => {
          setError(error.message)
        })
    }
  }, [])

  if (!isVideo) {
    return html`
      <div>
        
      </div>
    `
  }

  return html`
    <div>
      <video ref=${videoRef} />
      <span>${error}</span>
    </div>
  `
}

export default CameraView
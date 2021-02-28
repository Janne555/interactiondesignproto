import { html } from '../services/index.js'
const Context = React.createContext()

function VideoProvider({ children }) {
  const [stream, setStream] = React.useState()
  const [error, setError] = React.useState()

  React.useEffect(() => {
    if (window.localStorage.getItem("web-cam-was-available") != null) {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            window.localStorage.setItem("web-cam-was-available", "true")
            setStream(stream)
          })
          .catch(error => {
            setError(error)
            console.error(error)
          })
      }
    }
  }, [])

  function requestWebCam() {
    setError(undefined)
    window.localStorage.removeItem("web-cam-was-available")
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          window.localStorage.setItem("web-cam-was-available", "true")
          setStream(stream)
        })
        .catch(error => {
          setError(error)
          console.error(error)
        })
    }
  }

  function getMessage() {
    if (error) {
      return error.message
    }

    if (stream) {
      return "Web Cam Available"
    }
  }

  return html`
    <${Context.Provider} value=${{ stream, isFallback: Boolean(error), requestWebCam, message: getMessage() }}>
      ${children}
    <//>
  `
}

/**
 * @typedef {{stream: MediaStream, isFallback: boolean, requestWebCam: () => void, message: string | undefined }} VideoContext
 */

/**
 * @returns {VideoContext}
 */
function useVideo() {
  const context = React.useContext(Context)
  if (!context) {
    throw Error("Missing video context")
  }

  return context
}

export {
  VideoProvider,
  useVideo
}
import { html } from '../services/index.js'
const Context = React.createContext()

function VideoProvider({ children }) {
  const [stream, setStream] = React.useState()
  const [error, setError] = React.useState()

  React.useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          setStream(stream)
        })
        .catch(error => {
          setError(error)
          console.error(error)
        })
    }
  }, [])

  return html`
    <${Context.Provider} value=${{ stream, isFallback: Boolean(error) }}>
      ${children}
    <//>
  `
}

/**
 * @typedef {{stream: MediaStream, isFallback: boolean }} VideoContext
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
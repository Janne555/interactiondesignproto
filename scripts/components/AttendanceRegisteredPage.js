import { html } from '../services/index.js'
import { SmileIcon } from './Icons.js'
import { Button } from './MaterialUI.js'
/**
 * 
 * @param {{backToStart: () => void}} param0 
 */
function AttendanceRegisteredPage({ backToStart }) {
  const [seconds, setSeconds] = React.useState(5)

  React.useEffect(() => {
    let timeout
    if (seconds === 0) {
      backToStart()
    } else {
      timeout = setTimeout(() => setSeconds(prev => prev - 1), 1000)
    }
    return () => { timeout && clearTimeout(timeout) }
  }, [seconds])

  return html`
    <div className="page attendance-registered">
      <header>
        <h1>Your attendance has been registered</h1>
      </header>
      <div className="content">
        <div className="icon"><${SmileIcon} /></div>
        <h2>This view will automatically reset in ${seconds}s</h2>
        <${Button} variant="outlined" onClick=${backToStart}>Back to start<//>
      </div>
    </div>
  `
}

export default AttendanceRegisteredPage
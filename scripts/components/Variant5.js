import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import AttendanceFlow from './AttendanceFlow.js'

function Variant5() {
  const { setConfig } = useVariantContext()

  React.useEffect(() => {
    setConfig({
      cardReadingErrorMessage: "Seems like You are not registered for this training",
      followUpMessage: "Please ask the course manager to add you to the list"
    })
  }, [])

  return html`<${AttendanceFlow} />`
}

export default Variant5
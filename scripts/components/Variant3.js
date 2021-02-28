import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import AttendanceFlow from './AttendanceFlow.js'

function Variant3() {
  const { setConfig } = useVariantContext()

  React.useEffect(() => {
    setConfig({
      faceScanningError: ["You look different today...", "The ID You scanned does not match Your photo in our database"]
    })
  }, [])

  return html`<${AttendanceFlow} />`
}

export default Variant3
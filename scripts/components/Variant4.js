import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import AttendanceFlow from './AttendanceFlow.js'

function Variant4() {
  const { setConfig } = useVariantContext()

  React.useEffect(() => {
    setConfig({
      unknownError: "There was some system error"
    })
  }, [])

  return html`<${AttendanceFlow} />`
}

export default Variant4
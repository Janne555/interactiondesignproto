import { useVariantContext } from '../context/variantContext.js'
import { html } from '../services/index.js'
import AttendanceFlow from './AttendanceFlow.js'

function Variant2() {
  const { setConfig } = useVariantContext()

  React.useEffect(() => {
    setConfig({
      cardReadingErrorMessage: "We couldn't scan your id card"
    })
  }, [])

  return html`<${AttendanceFlow} />`
}

export default Variant2
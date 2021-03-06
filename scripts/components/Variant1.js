import { html } from '../services/index.js'
import AttendanceFlow from './AttendanceFlow.js'

function Variant1() {
  const { setConfig } = useVariantContext()

  React.useEffect(() => {
    setConfig({})
  }, [])

  return html`<${AttendanceFlow} />`
}

export default Variant1
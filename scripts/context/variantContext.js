import { html } from '../services/index.js'

const Context = React.createContext()

function VariantProvider({ children }) {
  const [config = {}, setConfig] = React.useState()
  const [isTabletMode, setIsTabletMode] = React.useState(true)
  
  return html`
    <${Context.Provider} value=${{ config, setConfig, isTabletMode, setIsTabletMode }}>
      ${children}
    <//>
  `
}

/**
 * @typedef {{
 * cardReadingErrorMessage: string
 * faceScanningError: string[]
 * unknownError: string
 * followUpMessage: string,
 * showLoginButton: boolean
 * }} Config
 */

/**
 * @returns {{
  * config: Config
  * setConfig: (config: Config) => void
  * isTabletMode: boolean
  * setIsTabletMode: (value: boolean) => void
 * }}
 */
function useVariantContext() {
  const context = React.useContext(Context)
  if (!context) {
    throw Error("variant context not available")
  }

  return context
}

export {
  VariantProvider,
  useVariantContext
}
import { html } from '../services/index.js'

const Context = React.createContext()

function VariantProvider({ children }) {
  const [config, setConfig] = React.useState()

  return html`
    <${Context.Provider} value=${{ config, setConfig }}>
      ${children}
    <//>
  `
}

/**
 * @typedef {{cardReadingErrorMessage: string}} Config
 */

/**
 * @returns {{config: Config, setConfig: (config: Config) => void}}
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
import { html } from '../services/index.js'

const Context = React.createContext()

function VariantProvider({ children, isTabletMode, config }) {
  return html`
    <${Context.Provider} value=${{ config, isTabletMode }}>
      ${children}
    <//>
  `
}

/**
 * @typedef {{
 * cardReadingErrorMessage: string
 * faceScanningError: string[]
 * unknownError: string
 * followUpMessage: string
 * showLoginButton: boolean
 * name: string
 * isInstructor: boolean
 * isConnectedToSession: boolean
 * }} Config
 */

/**
 * @returns {{
  * config: Config
  * isTabletMode: boolean
 * }}
 */
function useVariantContext() {
  const context = React.useContext(Context)
  if (!context) {
    throw Error("variant context not available")
  }

  return context
}

/**
 * @type Config
 */
const happyPath = {
  name: "Kalle"
}

/**
 * @type Config
 */
const failCardReading = {
  cardReadingErrorMessage: "We couldn't scan your id card",
  followUpMessage: "Please try again",
  showLoginButton: true,
  name: "Kalle",
  isConnectedToSession: true
}

/**
 * @type Config
 */
const failFacialRecognition = {
  faceScanningError: ["You look different today...", "The ID You scanned does not match Your photo in our database"],
  name: "Kalle",
  isConnectedToSession: true
}

/**
 * @type Config
 */
const failForUnknown = {
  unknownError: "There was some system error",
  name: "Kalle",
  isConnectedToSession: true
}

/**
* @type Config
*/
const notRegistered = {
  cardReadingErrorMessage: "Seems like You are not registered for this training",
  followUpMessage: "Please ask the course manager to add you to the list",
  name: "Kalle",
  isConnectedToSession: true
}

/**
* @type Config
*/
const instructorLogsIn = {
  name: "Maija",
  isInstructor: true,
  isConnectedToSession: false
}

const configs = {
  happyPath,
  failCardReading,
  failFacialRecognition,
  failForUnknown,
  notRegistered,
  instructorLogsIn
}

export {
  VariantProvider,
  useVariantContext,
  configs
}
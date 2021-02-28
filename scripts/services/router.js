/**
 * @typedef {{path: string, on: () => void}} Route
 */

/**
 * 
 * @param {Route} route 
 * @param {boolean} overwrite 
 */
function add(route, overwrite = false) {
  Router.add(route, overwrite)
}

/**
 * 
 * @param {string} hash 
 */
function navigate(hash) {
  Router.navigate(hash)
}

function init() {
  Router.init()
}

export {
  add,
  init,
  navigate
}
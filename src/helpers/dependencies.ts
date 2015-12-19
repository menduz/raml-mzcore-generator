/**
 * Map dependencies to their environment.
 *
 * @type {Object}
 */
const DEPS_MAP: { [env: string]: any } = {
  node: {
    popsicle: "require('popsicle')",
    ClientOAuth2: "require('client-oauth2')"
  },
  amd: {
    popsicle: "'popsicle'",
    ClientOAuth2: "'ClientOAuth2'"
  },
  browser: {
    popsicle: 'root.popsicle',
    ClientOAuth2: 'root.ClientOAuth2'
  }
}

/**
 * Map an array of dependency names to values.
 *
 * @param  {Array}  deps
 * @param  {String} env
 * @return {Array}
 */
function mapDeps (deps: string[], env: string) {
  if (!env) {
    return deps
  }

  return deps.map(function (dep) {
    return DEPS_MAP[env][dep]
  })
}

/**
 * Create a dependencies string.
 */
export default function dependencies (api: any, env: string) {
  const deps = ['popsicle']

  const hasOAuth2 = api.securitySchemes().some((x: any) => x.type() === 'OAuth 2.0')

  // OAuth 2.0 depends on ClientOAuth2 to work.
  if (hasOAuth2) {
    deps.push('ClientOAuth2')
  }

  // Returns an array of strings for AMD.
  if (env === 'amd') {
    return '[' + mapDeps(deps, env).join(', ') + ']'
  }

  return mapDeps(deps, env).join(', ')
}

import { generator, GeneratorResult } from 'raml-generator'
import requestSnippet from './helpers/request-snippet'
import parametersSnippet from './helpers/request-snippet'
import dependencies from './helpers/dependencies'
import defaultParameters from './helpers/default-parameters'
import methodize from './helpers/methodize'

export const client = generator({
  templates: {
    '.gitignore': require('./templates/.gitignore'),
    'INSTALL.md': require('./templates/INSTALL.md'),
    'package.json': require('./templates/package.json'),
    'README.md': require('./templates/README.md'),
    'index.js': require('./templates/index.js')
  },
  helpers: {
    requestSnippet,
    parametersSnippet,
    dependencies,
    stringify: require('javascript-stringify'),
    defaultParameters,
    methodize
  }
})

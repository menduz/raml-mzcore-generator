var glob = require('glob')
var join = require('path').join
var fs = require('fs')
var mkdirp = require('mkdirp')
var dot = require('dot')
var extend = require('xtend')

var TEMPLATES_IN_DIR = join(__dirname, '../src/templates')
var TEMPLATES_OUT_DIR = join(__dirname, '../dist/templates')

mkdirp.sync(TEMPLATES_OUT_DIR)

glob.sync('**/{*.jst,.*.jst}', { cwd: TEMPLATES_IN_DIR })
  .forEach(function (filename) {
    var contents = fs.readFileSync(join(TEMPLATES_IN_DIR, filename), 'utf8')
    var out = 'module.exports=' + dot.template(contents, extend(dot.templateSettings, { strip: false })).toString()
    fs.writeFileSync(join(TEMPLATES_OUT_DIR, filename.replace(/\.jst$/, '.js')), out)
  })

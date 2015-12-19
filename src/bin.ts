#!/usr/bin/env node

import { bin } from 'raml-generator/bin'
import { client } from './index'

;(bin as any)(client, require('../package.json'), process.argv)

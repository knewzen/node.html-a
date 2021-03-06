'use strict'

import path from 'path'
import fs from 'fs'
import test from 'ava'
import m from '../../'

const html = fs.readFileSync(path.join(__dirname, '../html/no-links.html'), 'utf8')

test(t => {
  const out = m.getElements(html)

  t.true(Array.isArray(out))
  t.true(out.length === 0)
})

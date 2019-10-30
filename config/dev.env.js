//開發中環境
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //伺服器路徑
  APIPATH: '"https://vue-course-api.hexschool.io/"',
  //自訂路徑
  CUSTOMPATH:'"lee"',
})

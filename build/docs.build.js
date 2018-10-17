/**
 * @file 
 *  - gitbook 打包 和 服务启动
 * @author jamesjianpeng <pengjian@sobug.com>
 * @see {@link https://www.npmjs.com/package/gitbook-cli} gitbook
 */
const exec = require('child_process').exec
const chalk = require('chalk')

const encoding = {encoding:'utf8'}

const GITBOOK_BUILD = 'gitbook build ./docs'
const GITBOOK_BUILD_TEXT = '打包成功'
const GITBOOK_SERVE = 'gitbook serve ./docs -p 4000' 
const GITBOOK_SERVE_TEXT = 'gitbooke serve successful http://localhost:4000'

/**
 * 打包 gitbook 并启动 gitbooke serve
 * @function
 */
 const gitbook = function() {
    exec(GITBOOK_BUILD, encoding, (err) => {
        if (err){
            console.log(err)
            return
        }
        console.log(chalk.blue(GITBOOK_BUILD_TEXT))
        exec(GITBOOK_SERVE)
        console.log(chalk.green(GITBOOK_SERVE_TEXT)  + '🌟 ')
    })
 }

 gitbook()

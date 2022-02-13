const marked = require('marked')

module.exports = source => {
    // 1. 将 markdown 转换为 html 字符串
    return marked(source)
    // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
    // console.log(source)
    // 返回值就是最终被打包的内容
    // return `module.exports = ${JSON.stringify(html)}`
    // return `export default ${JSON.stringify(html)}`
}

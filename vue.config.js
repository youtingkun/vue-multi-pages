// const glob = require('glob')

// function getEntry(url) {
//   let entrys = {}
//   glob.sync(url).forEach(item => {
//     // splice(-3)取数组后三项
//     let urlArr = item.split('/').splice(-3)
//     entrys[urlArr[1]] = {
//       entry: 'src/pages/' + urlArr[1] + '/' + 'index.js',
//       template: 'src/pages/' + urlArr[1] + '/' + 'index.html',
//       filename: urlArr[1] + '.html',
//       title: 'pages-' + urlArr[1]
//     }
//   })
//   return entrys
// }
// let pages = getEntry('./src/pages/**?/*.html');

module.exports = {
    publicPath: '/',
  outputDir: 'dist',
    pages: {
        mobile: { // mobile
            entry: 'src/pages/mobile/index.js',
            template: 'src/pages/mobile/index.html',
            filename: 'mobile/index.html',
          
            title:'mobile',
        },
      pc: { // pc
            entry: 'src/pages/pc/index.js',
            template: 'src/pages/pc/index.html',
            filename: 'pc/index.html',
            title:'pc',
      },
    }
}
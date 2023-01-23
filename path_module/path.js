//pathmodule
const path = require("path")
console.log(path.dirname("C:/Users/SarThak/Desktop/learning node/path_module/path.js"))
//C:/Users/SarThak/Desktop/learning node/path_module
console.log(path.extname("C:/Users/SarThak/Desktop/learning node/path_module/path.js"))
//.js
console.log(path.basename("C:/Users/SarThak/Desktop/learning node/path_module/path.js"))
//path.js
console.log(path.parse("C:/Users/SarThak/Desktop/learning node/path_module/path.js"))
// {
//     root: 'C:/',
//     dir: 'C:/Users/SarThak/Desktop/learning node/path_module',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }
console.log(__dirname)
console.log(__filename)

// const webpack = require("webpack");
// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
// module.exports = {
//   // 基本路径
//   baseUrl: "./",
//   devServer: {
//     open: process.platform === "darwin",
//     host: "0.0.0.0",
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     // 设置代理
//     // proxy: {
//     //   "/api/*": {
//     //     target: "http://localhost:8080",
//     //     changeOrigin: true,
//     //     logLevel: "debug",
//     //     pathRewrite: {
//     //       "^/api": ""
//     //     }
//     //   }
//     // }
//   },
//   configureWebpack: config => {
//     config.module.rules.push({
//       test: /\.vue$/,
//       use: [
//         {
//           loader: "iview-loader",
//           options: {
//             prefix: false
//           }
//         }
//       ]
//     });
//   },
//   productionSourceMap: false,
//   lintOnSave: false,
//   chainWebpack: config => {
//     (config.entry.app = ["babel-polyfill", resolve("src/main.js")]),
//       config.resolve.alias
//         .set("@", resolve("src"))
//         .set("_c", resolve("src/components"))
//         .set("_assets", resolve("src/assets"));
//   }
// };


const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'
var webpack = require('webpack');


module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: BASE_URL,
  


  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-plugin-px2rem')({
                    rootValue: 50, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                    // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                    //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                    // propBlackList: [], //黑名单
                    exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                    // selectorBlackList: [], //要忽略并保留为px的选择器
                    // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                    // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                    mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                    minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                }),
            ]
        }
    }
},
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js',
        $:"jquery",
		jQuery:"jquery",
		"windows.jQuery":"jquery"
      })
    ]
  },

  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    port: 8080, // 端口号
    // host: 'localhost',
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
        '/user': {
            // target: 'http://192.168.1.8:8082',
            target: 'http://ztht.ztist.com',
            // target: 'https://api.apiopen.top',

            changeOrigin: true,
            // ws: true,
            pathRewrite: {
              '^/user': 'user'
            }
        }
        
    
    }
}
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}

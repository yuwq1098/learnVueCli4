// https://github.com/staven630/vue-cli4-config
// https://cli.vuejs.org/zh/config/#vue-config-js
// https://blog.csdn.net/ForeverBana/article/details/103539404
//blog.csdn.net/u012971339/article/details/81876165

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
    // 生产环境是否生成 sourceMap 文件, // 改成false 的 在打包之前 要改回true
    productionSourceMap: true,
    // productionSourceMap: !IS_PROD, // 生产环境的 source map
    // 默认'/'，部署应用包时的基本 URL
    publicPath: './',
    // 输出文件目录'dist', 生产环境构建文件的目录
    outputDir: 'dist',
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录

    // eslint-loader 是否在保存的时候检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        open: true, // 配置自动启动浏览器
        disableHostCheck: true, // webpack4.0 开启热更新
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8025,
        // 设置代理
        proxy: {
            '/mock': {
                // 目标 API 地址
                // target: 'https://www.laoge.mobi',
                target: 'http://localhost:3000',
                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点更改为目标URL
                changeOrigin: false,
                pathRewrite: {
                    // 需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
                    '^/mock': '',
                },
            },
        },
    },

    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    parallel: require('os').cpus().length > 1,
    pwa: {},

    css: {
        // 是否使用css分离插件 ExtractTextPlugin, 发包之前改成true, 影响css热更新效果
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            stylus: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                import: '~@/assets/css/base.styl', // 全局注入stylus的变量、 stylus的工具类、  stylus的混合函数方法
                // globalVars: {
                //   primary: '#fff'
                // }
            },
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                // prependData: `@import "~@/variables.sass"`
            },
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `data` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                // prependData: `@import "~@/variables.scss";`
            },
            // 给 less-loader 传递 Less.js 相关选项
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    primary: '#fff',
                },
            },
        },
        // 启用 CSS modules for all css / pre-processor files.
        // 为所有的css及其预处理文件开启 CSS modules
        // 这个选项不会影响到 '*.vue' 文件
        modules: false,

        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true,
    },

    chainWebpack: (config) => {
        // 修复HMR,热刷新功能
        // config.resolve.symlinks(true)
        // 添加别名
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('pages', resolve('src/pages'))
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
            .set('styl', resolve('src/assets/styl'))
            .set('img', resolve('src/assets/img'))
            .set('public', resolve('public'))

        // 关闭利用空余带宽加载文件 提升首页速度
        config.plugins.delete('prefetch')
    },
}

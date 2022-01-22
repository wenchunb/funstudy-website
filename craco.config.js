const path = require("path");
// const CracoAntDesignPlugin = require("craco-antd");

const resovle = (dir) => path.resolve(__dirname, dir);
module.exports = {
//   plugins: [{ CracoAntDesignPlugin }],
// 按需加载
  babel: {
    plugins: [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css",
        },
      ],
    ],
  },
  webpack: {
    alias: {
      "@": resovle("src"),
      "components": resovle("src/components"),
    },
  },
};

// const CracoLessPlugin = require('craco-less')
// module.exports = {babel: {plugins: [// 配置 babel-plugin-import
//     ['import', {libraryName: 'antd',libraryDirectory: 'es',style: 'css', },'antd', ], ], },
//     // craco 提供的插件
//     plugins: [// 配置 less
//         {plugin: CracoLessPlugin,options: {lessLoaderOptions: {lessOptions: {modifyVars: {// 自定义主题（如果有需要，单独文件定义更好一些）
//         '@primary-color': '#1DA57A', },javascriptEnabled: true, }, }, }, }, ]

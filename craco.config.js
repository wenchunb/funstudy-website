const path = require("path");
const resovle = dir => path.resolve(__dirname,dir)
module.exports = {
    webpack: {
        alias: {
            "@": resovle('src'),
            "components" : resovle('src/components')
        }
    }
}
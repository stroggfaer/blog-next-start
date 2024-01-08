/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets')],
        prependData: `@import "~@assets/scss/utils/index.scss";`
    },
}
module.exports = nextConfig


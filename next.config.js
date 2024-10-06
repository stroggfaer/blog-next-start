/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets')],
        prependData: `@import "~@assets/scss/utils/index.scss";`,
    },
    env: {
        PUBLIC_API: process.env.NEXT_PUBLIC_API || '',
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost/',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}
module.exports = nextConfig


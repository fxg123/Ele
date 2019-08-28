module.exports = {
    devServer: {
        proxy: {
            '/el': {
                target: 'https://h5.ele.me',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/el': ''
                },

                cookieDomainRewrite: {
                    "*": "127.0.0.1"
                }
            },
            '/position': {
                target: 'https://shadow.elemecdn.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/position': ''
                },
                cookieDomainRewrite: {
                    "*": "127.0.0.1"
                }
            }
        }
    }
}

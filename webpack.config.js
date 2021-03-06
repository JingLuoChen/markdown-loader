module.exports = {
    mode: "none",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                // 直接使用相对路径
                use: [
                    'html-loader',
                    './markdown-loader']
            }
        ]
    }
}

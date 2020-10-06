module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
                    }
                }
            }
        ]
    },
    // 提升build文件的可读性
    mode: 'development',
    optimization: {
        minimize: false
    }
}
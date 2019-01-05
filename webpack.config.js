module.exports = {
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'to-string-loader'
                    },

                    {
                        loader: 'css-loader'
                    }
                ],
            },
        ],
    },
    devServer: {
        watchContentBase: true,
        inline: true
    }
}
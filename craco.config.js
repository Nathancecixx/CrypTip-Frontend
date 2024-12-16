const webpack = require('webpack');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                zlib: require.resolve("browserify-zlib"),
                url: require.resolve("url"),
                assert: require.resolve("assert"),
                os: require.resolve("os-browserify/browser"),
                process: require.resolve("process/browser"),
            };

            webpackConfig.plugins = (webpackConfig.plugins || []).concat([
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                    Buffer: ['buffer', 'Buffer'],
                }),
            ]);

            return webpackConfig;
        },
    },
};

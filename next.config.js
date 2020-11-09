const withPlugins = require('next-compose-plugins');
const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');
// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps')({
    devtool: 'hidden-source-map'
})
const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')
const BundleStatsPlugin = require('next-plugin-bundle-stats');
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

// Use the SentryWebpack plugin to upload the source maps during build step
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const {
    NEXT_PUBLIC_SENTRY_DSN: SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN,
    NODE_ENV,
    VERCEL_GITHUB_COMMIT_SHA,
    VERCEL_GITLAB_COMMIT_SHA,
    VERCEL_BITBUCKET_COMMIT_SHA,
} = process.env

const COMMIT_SHA =
    VERCEL_GITHUB_COMMIT_SHA ||
    VERCEL_GITLAB_COMMIT_SHA ||
    VERCEL_BITBUCKET_COMMIT_SHA

process.env.SENTRY_DSN = SENTRY_DSN
const basePath = ''


const nextConfig = {
    // distDir: 'build',
    experimental: {
        plugins: true,
        modern: true,
    },
    
    // Sentry.init config for server-side code. Can accept any available config option.
    serverRuntimeConfig: {
        rootDir: __dirname,
        sentry: {
            type: 'server',
        },
    },
    // Sentry.init config for client-side code (and fallback for server-side)
    // can accept only serializeable values. For more granular control see below.
    publicRuntimeConfig: {
        sentry: {
            type: 'client',
        },
    },
    /* target: 'serverless', */
    /* env: { */
    /* SPACE_ID: process.env.CONTENTFUL_SPACE_ID, */
    /* ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN, */
    /* }, */

    // https://nextjs.org/blog/next-10#internationalized-routing
    i18n: {
        locales: ['en', 'nl'],
        defaultLocale: 'en'
    },
    
    // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
    webpack: (config, options) => {
        const { dev, isServer } = options;
        // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        /* config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//)) */
        config.plugins.push(new BundleAnalyzerPlugin({  }))
        /* config.plugins.push(new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN })) */

        // webpack stats output / relative ci bundle stats configs
        // https://relative-ci.com/documentation/setup/cli/webpack/next
        config.plugins.push(
            new StatsWriterPlugin({
                filename: 'stats.json',
                stats: {
                    context: './src', // optional, will improve readability of the paths
                    assets: true,
                    entrypoints: true,
                    chunks: true,
                    modules: true
                }
            })
        );
        
        if (!dev && !isServer) {
            config.plugins.push(
                new RelativeCiAgentWebpackPlugin(),
            );
        }
        
        // In `pages/_app.js`, Sentry is imported from @sentry/browser. While
        // @sentry/node will run in a Node.js environment. @sentry/node will use
        // Node.js-only APIs to catch even more unhandled exceptions.
        //
        // This works well when Next.js is SSRing your page on a server with
        // Node.js, but it is not what we want when your client-side bundle is being
        // executed by a browser.
        //
        // Luckily, Next.js will call this webpack function twice, once for the
        // server and once for the client. Read more:
        // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
        //
        // So ask Webpack to replace @sentry/node imports with @sentry/browser when
        // building the browser's bundle
        if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }

        // When all the Sentry configuration env variables are available/configured
        // The Sentry webpack plugin gets pushed to the webpack plugins to build
        // and upload the source maps to sentry.
        // This is an alternative to manually uploading the source maps
        // Note: This is disabled in development mode.
        if (
            SENTRY_DSN &&
            SENTRY_ORG &&
            SENTRY_PROJECT &&
            SENTRY_AUTH_TOKEN &&
            COMMIT_SHA &&
            NODE_ENV === 'production'
        ) {
            config.plugins.push(
                new SentryWebpackPlugin({
                    include: '.next',
                    ignore: ['node_modules'],
                    stripPrefix: ['webpack://_N_E/'],
                    urlPrefix: `~${basePath}/_next`,
                    release: COMMIT_SHA,
                }),
            )
        }

        
        // Important: return the modified config
        return config
    },
};

module.exports = withPlugins([
    // add plugins here..
    [withSourceMaps],
    [withPreact],
    [BundleStatsPlugin]
], nextConfig);

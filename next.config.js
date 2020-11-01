const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    experimental: {
        plugins: true,
        modern: true,
    },
    
    // Sentry.init config for server-side code. Can accept any available config option.
    serverRuntimeConfig: {
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
});

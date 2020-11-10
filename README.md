# Preact example

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle?ref=badge_shield)

This is a fully working example of Next.js 10.0 running on [Preact](https://github.com/preactjs/preact) instead of React.

This reduces the base JavaScript weight of pages to ~22kB.

> 🔭 In the future, this can be even smaller with some additional Webpack optimizations.

## How to use

Clone this repo and run `npm install`:

```sh
git clone https://github.com/developit/nextjs-preact-demo.git
cd nextjs-preact-demo
npm install
```

There are three commands available:

```sh
# start a development server:
npm run dev

# create a production build:
npm run build

# start a production server:
npm start
```

## How does it work?

The example takes advantage of npm/yarn aliases, which essentially allow installing `preact/compat` at `node_modules/react`.

Here's how this example repo was set up:

- Set up a basic Next.js app using `create-next-app`
- Install `preact`, uninstall `react` and `react-dom`.
- Install [preact-compat/react](https://github.com/preact-compat/react) and [preact-compat/react-dom](https://github.com/preact-compat/react-dom) for aliasing.
- Use an [npm alias](https://github.com/npm/rfcs/blob/latest/implemented/0001-package-aliases.md#detailed-explanation) to replace `react-ssr-prepass` with `preact-ssr-prepass` (also [works](https://twitter.com/sebmck/status/873958247304232961) with Yarn).

# CI / Automated Testing / code quality

## Github Action

### Lighthouse

- https://github.com/OskarAhl/Lighthouse-github-action-comment

### Bundle Analyzer

- https://github.com/apps/bundle-analyzer

### Compressed Size

- https://github.com/preactjs/compressed-size-action

### BundleWatch

- https://bundlewatch.io/#/

### BundleStats

- https://github.com/relative-ci/bundle-stats
- https://github.com/apps/relativeci

### LGTM

- https://lgtm.com/

### Renovate

- https://medium.com/guidesmiths-dev/using-github-actions-and-renovate-app-to-safely-update-dependencies-automatically-b95a16e0a56a

### Next.js Stats Action

- https://github.com/vercel/next.js/tree/canary/.github/actions/next-stats-action

### Prettier - Standard

- https://github.com/sheerun/prettier-standard#readme

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle?ref=badge_large)

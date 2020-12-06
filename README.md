# Preact example

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle?ref=badge_shield)

![Prettier](https://github.com/einSelbst/vehicle/workflows/Prettier/badge.svg)

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
- https://github.com/treosh/lighthouse-ci-action
- https://github.com/GoogleChrome/lighthouse-ci

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

### auto create pull requests

- https://github.com/thomaseizinger/create-pull-request

### detect secrets

- https://github.com/marketplace/actions/easy-detect-secrets

### release notes preview

- https://github.com/marketplace/actions/release-notes-preview

### add labels to pull requests automatically

- https://github.com/actions/labeler

### under consideration

- https://github.com/peter-evans/create-pull-request
- https://github.com/hattan/verify-linked-issue-action
- https://github.com/marketplace/actions/clean-commit
- https://github.com/marketplace/actions/merge-me
- https://github.com/marketplace/actions/npm-audit-pr
- https://github.com/marketplace/actions/create-a-release
- https://github.com/marketplace/actions/milestone-closer
- https://github.com/marketplace/actions/wakatime-stat-update-action

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FeinSelbst%2Fvehicle?ref=badge_large)

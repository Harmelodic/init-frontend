# Contributing

## Technologies

[npm](https://docs.npmjs.com/) is the package manager for JavaScript projects. Add dependencies, run scripts and application metadata to `package.json`.

[React](https://reactjs.org/) is a library for creating components in a neat and composable manner.

[React Router](https://reacttraining.com/react-router/) is a library of navigational React components to allow you to manipulate the URL path and thus change what is visible on the webpage based on the URL path.

[Redux](https://redux.js.org/) is a client-side framework for storing and interacting with client-side state.

[styled-components](https://www.styled-components.com/) is a library for writing CSS to create components in JavaScript.

[eslint](https://eslint.org/) is a tool for analysing & linting JavaScript code.

[nginx](https://nginx.org/) is a webserver.

[webpack](https://webpack.js.org/) is a packaging/bundling tool for compiling JavaScript projects.

## Decoupling

The Redux implementation is isolated in the `src/store/` directory, and are only consumed by React Hooks.

React Hooks are isolated to the `src/hooks/` directory. Hooks consume data from Redux, HTTP APIs, other Hooks, etc. and provide that data & related-functions to the UI.

The actual UI implementation is isolated to the `src/ui/` directory. UI code can only interact with other things through Hooks.

## CI

The CI pipeline is tailored for GitHub Actions and defined in the `.github` directory.

The app's JavaScript is built using Webpack.

The app is built into a NGINX Docker container, where the Docker config is defined in the `Dockerfile` file, and custom NGINX config is defined in `nginx.conf`.

The app can be deployed to a Kubernetes cluster using the Kubernetes YAML files defined in `kustomize/`.

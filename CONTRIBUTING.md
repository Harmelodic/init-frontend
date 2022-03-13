# Contributing

## Technologies

[npm](https://docs.npmjs.com/) is the package/dependency manager for JavaScript projects. Add dependencies, run scripts and application metadata to `package.json`.

[React](https://reactjs.org/) is a library for creating components in a neat and composable manner.

[React Router](https://reacttraining.com/react-router/) is a library of navigational React components to allow you to manipulate the URL path and thus change what is visible on the webpage based on the URL path.

[Redux](https://redux.js.org/) is a client-side framework for storing and interacting with client-side state.

[styled-components](https://www.styled-components.com/) is a library for writing CSS to create components in JavaScript.

## Patterns / Project Structure

### Presentational vs Container components

Container components are React components that pull in state from the Redux store and define how your webpage is split up.  
The returned JSX in the render function of a Container component should contain either smaller Container components, Presentational components, styled-components or plain HTML.  
Examples of Container components are: A header bar, a menu, an embedded map, an embedded social media feed, and even the entire App itself.  
Container components are found in `src/containers/`.

Presentational components are React components that define how elements of your page will look and function by default.  
The returned JSX in the render function of a Presentational component should contain either further Presentational components, styled-components or plain HTML.  
Examples of Presentational components are: A button, a menu item, a text field, an interactable image.  
Presentational components are found in `src/components/`.

### Redux Isolation

Redux is made of 5 features: A **Store**, **Actions**, **Middleware**, **Reducers**, and **Subscriptions**.

All Redux features, *except Subscriptions*, are isolated in the `src/redux/` directory.

Subscriptions are defined in Container components. You must subscribe to the Store in the `componentDidMount()` React function and unsubscribe from the Store in the `componentWillUnmount()` React function.

The **Store** is an immutable JSON object, defined and exposed in the `Store.js` file.

**Actions** are functions that can be dispatched to the Store to update data stored in the Store.

**Middleware** are functions that can be dispatched to the Store to perform asynchronous calls to external systems that may end up updating the Store. These are *usually* HTTP calls.

**Reducers** are a functions, in a tree structure, that define how the Store is created and how Actions of certain types affect the Store.

**Subscriptions** are listeners that subscribe to the Store to listen for changes to the Store. When a change occurs in the Store, all Subscriptions should update themselves with the most recent data from the Store, pertitent to their context.

## CI/CD

The CI/CD pipeline is tailored for GitLab and defined in the `.gitlab-ci.yml` file.

The app's JavaScript is built using Webpack.

The app is built into a NGINX Docker container, where the Docker config is defined in the `Dockerfile` file, and custom NGINX config is defined in `nginx.conf`.

The app can be deployed to a Kubernetes cluster using the Kubernetes YAML files defined in `k8s/`.
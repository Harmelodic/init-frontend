# init-frontend

How web frontends are built.

...Except you can build web frontends in a variety of different ways, each having their trade-offs, and you should
choose different options depending on the _purpose_.

## The current paradigm

As of 2025:

Want to make a personal site, or just simple website - maybe with some commercial features?  
Use a Website builder with an easy hosting option (e.g. Squarespace, Wix, etc.).

Want to make a site where you have more control over the site structure and content - e.g. more advanced user wanting to
customize a blog, journalistic website, etc.?  
Use a CMS (WordPress, Drupal, etc.) and host it through a CMS-hosting provider or on your own webserver (self-hosted
or managed) if you're comfortable with that.

Want to make an easy-to-manage ecommerce website?  
Use an ecommerce website building & hosting platform (Squarespace, Shopify, etc.).

Want to make something more custom / original, either because you're offering a service, or you just want to showcase
web development skills?  
Make a custom site and host it yourself.

Custom site tech stack, in 2025:

| Component / Requirement | Solution                                                                                 |
|-------------------------|------------------------------------------------------------------------------------------|
| Programming language    | TypeScript                                                                               |
| Framework               | Next.js / React - mix of Server & Client components as necessary                         |
| Styling                 | Tailwind + some vanilla CSS + {your-favourite-charting-library} (e.g. D3.js, Highcharts) |
| Common libraries        | date-fns for date management                                                             |
| Linting                 | ESLint + Prettier + Husky (pre-commit hooks)                                             |
| Testing                 | Jest or Vitest, with Mock Service Worker                                                 |
| Build Tools             | npm + Turbopack                                                                          |
| Hosting                 | Container (or serverless)                                                                |
| Content Management      | Headless CMS + a CDN                                                                     |

## Paradigm Shifts and Technology Trends

While the "backend" world has a bunch of different programming languages and choices, each programming language
ecosystem offers a relatively unchanging set of standard frameworks/tools.

This is not the case for the web frontend ecosystem, which instead changes technologies and philosophy quite often -
occasionally even returning to previously adopted methodologies but with a different technology stack. I've heard these
moves be referred to as "paradigm shifts" but these aren't necessarily always large paradigm shifts but could be simply
problems solved with new technologies or the developer community shifting in preference.

From an inside and outside perspective, these paradigm shifts can be exciting and frustrating for a myriad of reasons. I
hope that the ecosystem eventually settles (and there are some technologies that the ecosystem seems to be settling on).

Below, I have documented the paradigm shifts (from my perspective) over time:

### 1990s

With the invention of the World Wide Web, a desire for nicely rendered information accessible from anywhere.

Tech Stack:

- Client-side only: HTML, CSS and JavaScript.
- Webserver (Apache HTTP Server).

### Late 1990s and Early 2000s

As the web is used more, a desire for more dynamic websites that offer useful services or more participation (e.g.
social media). CGI languages appeared and made this possible. The LAMP (Linux, Apache HTTP Server, MySQL, PHP) stack is
established.

Tech Stack:

- Client-side: HTML, CSS and JavaScript.
- Server-side: CGI languages like PHP or Perl.
- Webserver: Apache HTTP Server.

### Mid 2000s

More organisations are building systems, and are using other languages for other systems (Java, C#, etc.) and want to
build web frontends in those languages rather than deal with multiple languages for different components. New "server
pages" technologies make this possible. Usage of Perl is in decline, as developers prefer PHP as a CGI language.

Tech Stack:

- Client-side: HTML, CSS and JavaScript.
- Server-side, choose from:
    - PHP on Apache HTTP Server
    - Java (with JSP) on Apache Tomcat
    - C# (with ASP.NET) on Windows Server

### Late 2000s

A desire for easier ways for developers to manage CSS and implement client-side JavaScript. Developers adopt CSS
pre-processing and jQuery.

Tech Stack:

- Client-side:
    - HTML
    - Sass/SCSS/Less for CSS
    - jQuery + vanilla JavaScript.
- Server-side, choose from:
    - PHP on Apache HTTP Server
    - Java (with JSP) on Apache Tomcat
    - C# (with ASP.NET) on Windows Server

### Early 2010s

Other programming languages are becoming popular, and a desire for easier ways to manage more complex frontends is
needed. Frameworks and templating engines fulfil this need.

Node.js and NPM have also just been invented, meaning developers comfortable with client-side JavaScript can now begin
developing server-side applications in JavaScript (this begins the explosive rise of new JavaScript technologies that
will soon take hold).

Multiple other JavaScript projects (CoffeeScript, AngularJS, are also invented which are helping the JavaScript
ecosystem flourish).

"Content" can now be managed in a CDN (Content Delivery Network) which improves content download speeds for clients, as
content is hosted geographically closer, and improves server performance by offloading content-serving tasks from the
webserver.

Tech Stack:

- Client-side:
    - HTML
    - Sass/SCSS/Less for CSS
    - jQuery + vanilla JavaScript.
- Server-side, choose from:
    - PHP (native or with Laravel) on Apache HTTP Server.
    - Java (with JSP, ThymeLeaf, and some others) on Apache Tomcat.
    - C# (with ASP.NET and some others) on Windows Server.
    - Python (with Django and some others)
    - Node.js (with npm and mustache) and Express.js server.
- Content hosted in a CDN.

### Mid 2010s

Up until now, client-side development has been "manipulate the DOM with JavaScript". However, DOM operations are
expensive (in terms of performance) and so a new philosophy has developed "hold a virtual DOM in memory, and update that
virtual DOM in multiple small changes, then update the real DOM with one update (much less expensive)".

This has also combined with the now popular idea of making "single-page applications" (SPAs). Instead of server-side
rendering everything using templates, we server-side render very little (thus reduce server-side compute power) and let
client-side JavaScript update/rewrite the webpage to render different content (that it fetches from backend APIs). This
would make webpage feel more responsive and more like native desktop applications, rather than having entire pages
re-rendered and constant loading screens.

Both of these ideas have been made possible with new client-side JavaScript libraries & frameworks, available via a now
popular/established dependency manager. MEAN, MERN and MEVN (MongoDB, Express.js, Angular.js/React/Vue.js, Node.js) are
trying to establish themselves.

With improvements in cloud computing and containerisation, applications are hosted in (Docker) containers, which can
then be deployed to a variety of cloud providers.

At the same time, a new CSS framework (Bootstrap) is now quite popular and making it much easier to construct decent
looking sites that work on both Desktop web and Mobile web.

These projects are much more complex than the previous "templating" systems, so linting and testing is needed. ESLint
handles linting, multiple test frameworks are popular.

JavaScript is also being developed and improved, but browser & Node.js compatibility is varied, so transpiling of modern
JavaScript needs to be done before packaging. Babel is the tool of choice for this.

All of these desires, combined with npm's lack of features result in an explosion of different tools to create, manage,
run tests, precompile, transcompile, and package projects.

Tech Stack:

- Client-side single-page applications, choose from:
    - React
    - AngularJS (relatively swiftly replaced with Angular (2+))
    - Vue.js
    - Ember.js
    - Meteor
    - etc.
- Routing in the single-page application with React-Router.
- Styling with Bootstrap.
- Linting with ESLint.
- Testing with Jest, Mocha & Jasmine.
- Served from Node.js / Express.js webserver in a (Docker) container.
- Transpiling with Babel.
- Project managed, packaged with:
    - bower
    - Grunt
    - Gulp
    - npm
    - pnpm
    - Webpack
    - Yarn
    - Yeoman
    - etc.

### Late 2010s

React is the most dominant client-side library/framework in the industry, with other frameworks either maintaining some
relevance (Angular and Vue.js) or becoming less popular.

State management on the client-side was desired from developers for their client-side applications, leading to the
dominance of Redux.

Also, the CSS-in-JS paradigm (dominated by styled-components) emerges from a desire from developers to easily be able to
create UI libraries of components, and keep custom CSS close to React component code.

Improvements with npm, pnpm, and yarn have led stability on these choices for project & package management.

Improvements and convergence around Jest has led to Jest being the testing framework of choice.

A desire for a static typing has grown slowly in the JavaScript, with TypeScript leading this.

Handling and formatting dates consistently is desired, leading to the popularity of moment.js.

Organisations want to manage content not just in a CDN, but manage their other content (hosted in CMS websites) in the
same place. A "headless" CMS aids management on this content, both static and dynamic, whilst serving it still can be
handled by an CDN.

Tech Stack:

| Component / Requirement | Solution                                                                                          |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Programming language    | TypeScript                                                                                        |
| Framework               | React single-page application.                                                                    |
| Styling                 | styled-components + some vanilla CSS + {your-favourite-charting-library} (e.g. D3.js, Highcharts) |
| Common libraries        | moment.js for date management, Redux for state management.                                        |
| Linting                 | ESLint                                                                                            |
| Testing                 | Jest                                                                                              |
| Build Tools             | npm / pnpm / yarn with Webpack and Babel.                                                         |
| Hosting                 | Node.js, Express.js in a Container (or serverless)                                                |
| Content Management      | Headless CMS + a CDN                                                                              |

### Early 2020s

Further improvements in existing technologies maintain the dominance of most of the stack. Notably, in React 16.8, React
Hooks is released, which pioneers a shift from class-based components managing state and lifecycles, to functional
components with Hooks managing state and lifecycles.

Redux dominance begins to wane (but doesn't disappear) as state with React Hooks becomes easier to implement, and
developers push state management out of the presentational-focused frontend and into backend (e.g. BFFs or plain APIs)
with browser caching being relied upon for maintaining a performant user experience.

The shortcomings with npm are now mostly resolved, and npm is now the default project management tool (some usage of
pnpm continue for those who need extreme performance).

Adoption of Prettier and Husky (for pre-commit hooks) makes consistent code-styling easier to achieve in projects.

With Node.js backend development having improved, huge improvements in Cloud computing, and complex single-page
applications being difficult to manage and ship (bundling, code-splitting, pre-rendering for SEO) a desire for
server-side rendering has returned - this is aided by React 18's shipping of some server rendering features. Custom
solutions for this are being implemented, but adoption of opinionated frameworks that use the "React, TypeScript +
others" ecosystem that also offer server-side rendering are increasing, most notably: Next.js.

Tech Stack:

| Component / Requirement | Solution                                                                                          |
|-------------------------|---------------------------------------------------------------------------------------------------|
| Programming language    | TypeScript                                                                                        |
| Framework               | Next.js / React - mix of server-side & client-side code as needed.                                |
| Styling                 | styled-components + some vanilla CSS + {your-favourite-charting-library} (e.g. D3.js, Highcharts) |
| Common libraries        | date-fns for date management, Redux for state management.                                         |
| Linting                 | ESLint + Prettier + Husky (pre-commit hooks)                                                      |
| Testing                 | Jest                                                                                              |
| Build Tools             | npm (with Next.js, Webpack and Babel)                                                             |
| Hosting                 | Container (or serverless)                                                                         |
| Content Management      | Headless CMS + a CDN                                                                              |

### Mid 2020s

React 19 is released, introducing React Server Components. This further popularises server-side rendering (again) and
kills styled-components as a styling system (as is not compatible with RSC, and eventually enters maintenance mode).
Tailwind replaces styled-components and the CSS-in-JS philosophy for CSS class-based styling (reminiscent of Bootstrap).

Next.js adoption has increased, and they switch from Webpack to their own Turbopack system, and set React Server
Components as default.

MSW (Mock Service Worker) establishes itself as the industry standard way of building API mocks in JavaScript.

Remix (an opinionated framework alternative to Next.js) has also gained popularity since it's release in 2022, though
Next.js remains slightly more popular.

Vitest appears as an alternative to Jest, for faster test execution.

| Component / Requirement | Solution                                                                                 |
|-------------------------|------------------------------------------------------------------------------------------|
| Programming language    | TypeScript                                                                               |
| Framework               | Next.js / React - mix of Server & Client components as necessary                         |
| Styling                 | Tailwind + some vanilla CSS + {your-favourite-charting-library} (e.g. D3.js, Highcharts) |
| Common libraries        | date-fns for date management                                                             |
| Linting                 | ESLint + Prettier + Husky (pre-commit hooks)                                             |
| Testing                 | Jest or Vitest, with Mock Service Worker                                                 |
| Build Tools             | npm (+ Turbopack)                                                                        |
| Hosting                 | Container (or serverless)                                                                |
| Content Management      | Headless CMS + a CDN                                                                     |

## My personal preferences

Granted most of this either doesn't exist or "kind of" exists, or if it does exist, it might not be the industry
standard:

- A *real* typed language for client-side scripting (no TypeScript pre-compilation stuff).
- A simple way to handle both server-side rendering and client-side rendering, that makes it clear which "components"
  are rendered where, and makes modifications easy.
- The basic "frame" be server-side rendered, with heavily data-driven components and less-critical features be
  client-side rendered (with pre-rendering for SEO).
- Robust shift-left testing, with contract testing.
- Runtime mocking for purely local development.
- No monorepos. 1 webapp = 1 repo (possibly have "micro-frontends" for very large websites with multiple systems).
- Properly managed SemVer libraries.
- Vanilla CSS styling packaged close to "components", but backed by a styling library for easier development.
- Single tool for project management (e.g. npm)
- Headless CMS and CDN for content management.
- W3C Accessibility Standards, works with screen readers, light/dark/system/colour-blind theming.
- Minimal maintenance and need for refactoring (relies on a stable ecosystem)

### Code structure preferences

Unless a framework dictates a directory structure, I expect to structure my code along the lines of the following:

```
docs/ <= Docs for the project, built with MkDocs.
src/
  integrations/  <= For code that links the UI to APIs (e.g. React Hooks)
  public/        <=  For static content that is hosted on the webserver (e.g. the sitemap, the favicon, etc.)
  ui/            <= For the actual UI pages
  ui-components/ <= For reusable custom UI components
test/
  <same-structure-as-src>
...
config-files.json.yaml.js
```

### Testing ideals

- Code analysis / linting for:
    - Accessible and consistent code styling.
    - Common standards are followed.
    - Bugs / Code smells / Known security vulnerabilities.
    - Browser-compatibility of language features and browser APIs.
- Unit testing all functions (mocking dependencies).
- Integration testing API integrations using mocks (ideally enabling contract testing to be possible).
- Accessibility testing the UI.
- UI testing to ensure unexpected changes to the UI are not introduced
    - This can be automated to a point, but often needs manual review to just make sure UIs "look right". Even this
      manual review can have automations in place to generate views based on different mocked states.
    - Individual common UI components can be put into a separate library and automated UI testing performed there to
      reduce the UI testing overhead for applications using those UI components.
- End-to-End testing (with mocks) for critical user flows (minimise these!).

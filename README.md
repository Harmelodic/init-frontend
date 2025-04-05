# init-frontend

How web frontends are built.

...Except you can build web frontends in a variety of different ways, each having their trade-offs, and you should
choose different options depending on the _purpose_.

## The current paradigm

As of 2025:

- Want to make a personal site, or just simple website - maybe with some commercial features?
  - Use a Website builder with an easy hosting option (e.g. Squarespace, Wix, etc.).

- Want to make a site where you have more control over the site structure and content - e.g. more advanced user wanting
  to customize a blog, journalistic website, etc.?
  - Use a CMS (WordPress, Drupal, etc.) and host it through a CMS-hosting provider or on your own webserver (self-hosted
    or managed) if you're comfortable with that.

- Want to make an easy-to-manage ecommerce website?
  - Use an ecommerce website building & hosting platform (Squarespace, Shopify, etc.).

- Want to make something more custom / original, either because you're offering a service, or you just want to showcase
  web development skills?
  - Make a custom site and host it yourself.

Custom site tech stack, in 2025:

| Component / Requirement | Solution                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------|
| Programming language    | TypeScript                                                                                     |
| Framework               | Next.js / React - mix of Server & Client components as necessary                               |
| Styling                 | Tailwind + some vanilla CSS + {your-favourite-charting-library} (e.g. D3.js, Highcharts)       |
| Linting                 | ESLint + Prettier + Husky (pre-commit hooks)                                                   |
| Testing                 | Jest or Vitest, with Mock Service Worker.                                                      |
| Accessibility           | W3C Accessibility Standards, works with screen readers, light/dark/system/colour-blind theming |
| Build Tools             | npm + Turbopack                                                                                |
| Common libraries        | swr for client-side fetching, date-fns for date management                                     |
| Hosting                 | Serverless or Kubernetes (containerized)                                                       |
| Content Management      | Headless CMS + a CDN                                                                           |

## Paradigm Shifts

Whilst the "backend" world has a bunch of different programming languages and choices, each programming language
ecosystem offers a relatively unchanging set of standard frameworks/tools.

This is not the case for the web frontend ecosystem, which instead changes technologies and philosophy quite often -
occasionally even returning to previously adopted methodologies but with a different technology stack. I've heard these
moves be referred to as "paradigm shifts".

From an inside and outside perspective, these paradigm shifts can be exciting and frustrating for a myriad of reasons. I
hope that eventually the ecosystem settles - and there are some technologies that the ecosystem seems to be settling on.

Below, I have documented the paradigm shifts going back in time:

TODO: More writing of this 👇 - cover things like npm vs yarn vs pnpm, Hooks, Server Components, etc.

- Web 1.0 = Static sites.
- Mid-90s: HTML, CSS & JS - JavaScript used for simple client-side interactivity.
- Web 2.0 = Dynamic sites (or "webapps") (more advanced interactivity, dynamic content driven by backend systems)
- Late-90s: CGI-languages like PHP or Perl for server-side rendering.
- Early-00s: PHP, Java, C# for server-side rendering.
- Late-00s:
  - HTML5 and jQuery brought for more advanced client-side manipulation.
  - SCSS (a CSS pre-processor) introduced to make CSS styling easier.
- Early-10s: Shift to client-side rendering and "single page applications", driven by APIs.
  - Bootstrap introduced to making styling simpler with Bootstrap CSS classes.
  - AngularJS or React brought a shift from JavaScript being a language that manipulates the HTML, to being JavaScript
    controls and renders (on the client-side) the DOM.
  - Node.js and Express.js introduced to allow developers to begin writing backend systems in JavaScript.
  - npm introduced as a dependency/project management tool for building JavaScript projects (both for browser and
    Node.js)
- Mid- and Late-10s:
  - Angular2 introduced, as well as other frameworks like Vue and Ember, but React ends up leading the industry.
- Late-10s:
  - React is dominant.
  - CSS-in-JS styling gaining prevalence.
- Early-20s:
  - Next.js (and other Vercel-driven technologies) starts gaining dominance as the React technologies of choice.
- Mid-20s:
  - Now!

## My personal preferences

Granted most of this either doesn't exist or "kind of" exists, or if it does exist, it might not be the industry
standard:

- A *real* typed language for client-side scripting (no TypeScript pre-compilation stuff).
- A simple way to handle both server-side rendering and client-side rendering, that makes it clear which "components"
  are rendered where, and makes modifications easy.
- Mostly server-side rendered content, with some sections of pages being client-side rendered (with pre-rendering) for
  better user experience.
- Robust shift-left testing, with contract testing.
- Runtime mocking for purely local development.
- No monorepos. 1 webapp = 1 repo (possibly have "micro-frontends" for very large websites with multiple systems).
- Properly managed SemVer libraries.
- Vanilla CSS styling packaged close to "components", but backed by a styling library for easier development.
- Single tool for project management (e.g. npm)
- Headless CMS and CDN for content management.
- W3C Accessibility Standards, works with screen readers, light/dark/system/colour-blind theming.
- Minimal maintenance and need for refactoring (relies on a stable ecosystem)

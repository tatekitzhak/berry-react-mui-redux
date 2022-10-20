# React v18 Router v6 webpack v5 boilerplate using Babel and PostCSS.
# Complete React app setup with webpack, babel, and eslint
# Folder Structure:

├── package.json           -> Package json file.
├── public
├── README.md
├── src
│   ├── _mockApis          -> Mock Json data to be used for working apps
│   ├── assets
│   │   ├── images
│   │   ├── scss           -> Template SCSS files
│   │       ├── style.scss -> Application main file
│   │       ├── _themes-vars.module.scss
│   ├── contexts           -> State context for Login management
│   ├── hooks              -> Custom hooks
│   ├── layout
│   │   ├── DocsLayout     -> Layout for docs components & routers
│   │   ├── MainLayout     -> Layout for main components & routers
│   │   ├── MinimalLayout  -> Layout for mimimal components & routers
│   │   ├── NavigationScroll.js
│   │   ├── NavMotion.js
│   ├── menu-items         -> menu items
│   ├── routes             -> different route based on layouts
│   ├── store              -> Redux actions, reducers
│   │   ├── slices         -> different slices of toolkit
│   ├── themes             -> Contains application style and theme
│   ├── types              -> common types for Typescript. Exist only in Typescript
│   ├── ui-component       -> Template custom & reusable components
│   ├── utils
│   │   ├── locales        -> different locale json files
│   │   ├── route-guard    -> Auth guard to prevent unexpected navigations
│   └── views              -> View files for all pages
├── App.js                 -> starting point of application
├── config.js              -> Template constant value and live customization  
├── index.js               -> Application root js file

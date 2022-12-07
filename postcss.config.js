const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'is-active',
        'nav-open',
        'collapse',
        'expand',
        'parent-page-home',
        'parent-page-buildings',
        'parent-page-solutions',
        'parent-page-projects',
        'parent-page-resources',
        'parent-page-about',
        'parent-page-lets-talk',
        'search-open',
        'search__icon-wrapper',
        'pagefind-ui__drawer',
        'pagefind-ui__results',
        'pagefind-ui__result-link',
        'pagefind-ui__message',
        'pagefind-ui__results',
        'search-open',
        'mark',
      ],
    }),
  ],
}
# wp-datepicker-jqueryui

A Datepicker with support for disabling dates. Implemented with JQuery UI and supporting custom styles and legends. Can be used on any forms with a selector. Specifically written as a wordpress plugin.

## Development

## Codestyle

### Linting

## Building

## Bundling

## TODO

- [ ] use parcel2/vite instead of snowpack (supports swc, brotli)
- [ ] replace jqueryui with lit-html/svelte/flatpickr
- [ ] replace floats with flexbox
- [ ] add noscript text
- [ ] replace snowpack with vitejs
- [ ] read options from config file on server
  - [ ] generate options file from wordpress plugin settings
- [ ] hide disabled dates before today
- [?] replace xhr with fetch - IE11 needs two Polyfills (fetch and Promises) then
- [?] use jquery slim - not possible with datepicker
- [x] upgrade jqueryui
- [x] add linter
- [x] add prettier
- [x] add postcss
- [x] replace Parcel with Snowpack
- [x] add Prettier
  - [x] (optional, because they are slower than Prettier) add Eslint, Stylelint

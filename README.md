# wp-datepicker-jqueryui

A Datepicker with support for disabling dates. Implemented with JQuery UI and supporting custom styles and legends. Can be used on any forms with a selector. Specifically written as a wordpress plugin.

## Development

Download the latest version of JQuery UI with theme _smoothness_ from https://jqueryui.com/download/#!version=1.13.2&components=000000110000000000000010000000000000000000000000&zThemeParams=5d00008000d905000000000000003d8888d844329a8dfe02723de3e5701fa198449035fc0613ff729a37dd818cf92b1f6938fefa90282d04ae436bb72367f5909357c629e832248af2c086db4ab730aa4cced933a88449eca61db9f7f3b23d47f58a712d809b6088edfb3e1ab0fd4487a569ff42031bb9aefd95aa0a010c29ca4db94f3366f7eb73778008bb690e9d38991c2ab5acb470930c835016bb59ce85223ee2eb2ca74db38bd686e4f0726028207a63e44a04f3ac741d7b0bc5eb3b945532e31642bd3df4c99455415fbf190a56a8384a7a1b06182dbe2759fa2eee7ddbbe32e4be6469419ec67ee260c2aa1654c7a39f0ac8c9b103a68f684dddbe918860409194e418045ff4aa83ac8dfdab69bea83b7cb70ce4c3ebae729c9625a6595e2129f9fb213105d2bddf7fde48ba6844e19d5c44cd55a084be9df2aac2a361d764dd099320cd80849bccd086428d2c262f4adee5e482c00ce779ddaa07097b0111bba4d8294c6b481caba5df02a6796634e7111a01634cc6289876eb90fbc361ec343fcd5c738db443ad6a10040f369eb4d58a61e666560b5f9dac9d9edc158ac7f15f9117fa324e687480e0fa48738c79a5d468cd91db5569f0d4afdc1ab3ffae7ebdc5ac0e6c54873d8b9c97bfffd3cf14ad

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

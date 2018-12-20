# Tabed

tabed is a small, super fast and easy to use JavaScript Library to create HTML tabs.

## Installation

```html
<link rel="stylesheet" href="https://unpkg.com/tabed@0.7.2/dist/tabed.min.css">
<script src="https://unpkg.com/tabed@0.7.2/dist/tabed.min.js"></script>
```

or

```bash
npm install tabed
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera-mini/opera-mini_48x48.png" alt="Opera Mini" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera Mini |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 3 versions| last 3 versions| last 3 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

## Example

```html
<div class="tabed">
  <div class="tab" data-title='tab placeholder 1'>
    this is a tab 1
  </div>
  <div class="tab" data-title='tab placeholder 2'>
    this is a tab 2
  </div>
</div>
<script>
  new Tabed(".tabed", {
    // options...
  });
</script>
```


## Options

### theme

Option to set theme

```js
  new Tabed(".tabed", {
    theme: "theme_name"
  });
```

### tabOpen

Option to set tab that will be open on start

```js
  new Tabed(".tabed", {
    tabOpen: 2
  });
```

# iframe resizer scripts

Scripts to set the size of an iframe to the height of its content or to the height of the screen.

Two scripts are made available:

- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.js
- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.notify.js

## Set the iframe's height to the height of its content

**NOTE:** If you don't need to support the app, use https://github.com/davidjbradshaw/iframe-resizer instead.

### How to

On the page that will be embedded into another page as an iframe, load the notify script:

```html
<script src="https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.notify.js"></script>
```

This script notifies a parent context whenever the size of `body` changes. Notifications are throttled using lodash' `throttle` function. So, you'll need to include:

```html
<script src="https://storage.googleapis.com/rbb-data-static/lib/lodash.throttle.js"></script>
```

Finally, you probably also want to include a polyfill for `ResizeObserver`:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=ResizeObserver"></script>
```

On the page that contains the iframe to be resized, embed

```html
<script src="https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.js"></script>
```

and call

```js
rbbData.resizeIframe("id-of-my-iframe");
```

## Set the iframe's height to the height of the screen

### How to

Embed resizer script

```html
<script src="https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.js"></script>
```

and call

```js
rbbData.resizeIframe("id-of-my-iframe", { height: "full" });
```

### Options

If `height` is set to `'full'`, then further options are available:

- `only-resize-below-breakpoint` _number_ If set the script will only run if the window width is below this number
- `min-height` _number_ The minimum height of the iframe
- `max-height` _number_ The maximum height of the iframe

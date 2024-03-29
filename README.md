# iframe resizer scripts

Scripts to set the size of an iframe to the height of its content or to the height of the screen.

Two scripts are made available:

- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.js
- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.notify.js

And their minified versions:

- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.min.js
- https://storage.googleapis.com/rbb-data-static/lib/iframe-resizer/iframe-resizer.notify.min.js

## Set the iframe's height to the height of its content

> **Note**
> 
> **If you don't need to support the app, use https://github.com/davidjbradshaw/iframe-resizer instead.** Scripts from https://github.com/davidjbradshaw/iframe-resizer work perfectly well, but lead to issues within the app. I have no way of debugging why that is, so I wrote a minimal reproduction of these resizer scripts that do work in the app. If app support is not needed, however, there is no reason to use this code, use https://github.com/davidjbradshaw/iframe-resizer instead, which is well maintained and heavily tested.

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

### Options

If `height` is set to `'auto'` (or omitted, since it is the default), then further options are available:

- `defer` _boolean_ (default: `false`) If `true`, setting the iframe's height is queued as microtask. **It is generally not advised to use this.** ~~But: In the rbb|24 app (Version 2.1.7), the resizer script does not work (probably because the app tries to set the iframe's height as well). Deferring the iframe's resize works around this **but the iframe's height can only get bigger, not smaller**. Say you have an expandable that toggles the visibility of some content and is closed in its initial state. On click the content is shown. When `defer` is set to true, then the iframe's height gets adjusted in the app. But Closing the widget will not result in another iframe resize, which means you'll end up with lots of whitespace. Despite this limitation it might make sense to use `defer` in some situations. For example, if you want to show some content once the user has made some choices (and the content will then always be visible).~~ This has been fixed in app version 2.1.8

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

- `onlyResizeBelowBreakpoint` _number_ If set the script will only run if the window width is below this number
- `minHeight` _number_ The minimum height of the iframe
- `maxHeight` _number_ The maximum height of the iframe

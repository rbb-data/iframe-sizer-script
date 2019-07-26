# iframe sizer script

A simple js script to set the size of an iFrame to the height of the screen

## Options

When using the script it can be configured by setting data atributes on the script tag.
That the script can read the values it needs to have the id `rbb-data-iframe-script`

- `data-iframe-id` *string* (required) The id of the iframe to resize
- `data-only-resize-below-breakpoint` *number* If set the script will only run if the window width is below this number
- `data-min-height` *number* The minimum height of the iFrmae
- `data-max-height` *number* The maximum height of the iFrmae

For example:

```html
  <script
    id="rbb-data-iframe-script"
    src="https://raw.githubusercontent.com/rbb-data/iframe-sizer-script/master/index.js"
    data-iframe-id="some-iframe"
    data-only-resize-below-breakpoint="500"
    data-min-height="400"
    data-max-height="700"
    >
  </script>
```

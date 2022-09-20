# Cookie Widget.

Static cookie widget for your website, without any tracking and backend, hosted on GitHub pages

### What is that?

Cookie widget - is a simple widget that notifies users about site cookies usage.
Widget does not includes any tracking or server-side, being deployed only using GitHub pages! (Static only)

### How widget is looks like?

See [here](https://kirillzhosul.github.io/cookie-widget).

![Widget preview](/readme/example.png)

### How to use this widget?

Add this line inside your head HTML tag: \
`<script src="https://kirillzhosul.github.io/cookie-widget/widget.js"></script>` \
If you want use minified version, use `widget.min.js`, \
for configurable widget (with required own request to show) use `widget.c.js`, see below how to configure.

### How to configure this widget?

To use configurable widget, load `widget.c.js` (not `widget.js` or `widget.min.js`). \
After loading write another script with:

```js
new CookieWidget("Title", "Body!").tryShow(true);
```

`CookieWidget` constructor accepts 2 arguments (title text, body text), and `tryShow` accepts one argument (should it show widget even when user has clicked accept before). Notice that any argument can be ommited!

### Any opportunity to self-host?

Sure! Download `widget.css` and `widget.js` (or your required version, or all versions), update `_cookieWidgetDomain_` at the top of the JS script, to the your domain.
If widget not showing, it may caused by denied access to the `widget.css`, as is widget will show up only when styling is loaded!

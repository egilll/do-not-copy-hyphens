# do-not-copy-hyphens

This script removes soft hyphens from whatever text the user is copying from your website.

Soft hyphens are a part of the text and will be carried along when a user copies the text. This is not always desirable, as the invisible hyphens can get in the way of other tasks and be difficult to detect, for example when copying text into Excel or a console.

Install this package with `npm install do-not-copy-hyphens --save` and load it with:
```js
require('do-not-copy-hyphens')
```

If you're not using Node, you can load it as an external script:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/egilll/do-not-copy-hyphens/dist/index.js"></script>
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

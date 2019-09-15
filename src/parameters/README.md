# Plugin: Parameters

## Installation

1. Download the right version based on the following table

| uStart package | plugin version | latest release |
|  :---: | :---: | :--- |
| ustart-2.0.0-alpha.3 and earlier | No compatible | --- |
| ustart-2.0.0-alpha.4 and above | 2.0.x | <ul><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/parameters%2F2.0.0/parameters-2.0.0.zip">parameters-2.0.0.zip</a></li><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/parameters%2F2.0.0/parameters-2.0.0.tar.gz">parameters-2.0.0.tar.gz</a></li> |

2. Uncompress it into `plugins` (`your-project/src/plugins`)

3. Add your own seed data in `plugins/parameter/src/data/parameters.js`.

> This plugin does not provide any seed data besides testing.

4. Open `your-project/src/data/basicDataMocking.js` and add `populateParametersSync()` inside of `populateBasicData` function:

```js
import { populateParametersSync } from "../plugins/parameters/src/data/populate";

export async function populateBasicData() {
  populateParametersSync();
}
```

That is all, uStart will take care of the rest

If you **like** it, remember to give a star ;-)

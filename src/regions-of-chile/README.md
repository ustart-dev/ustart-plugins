# Plugin: Regions of Chile

## Installation

1. Download the right version based on the following table

| uStart package | plugin version | latest release |
|  :---: | :---: | :--- |
| ustart-2.0.0-alpha.3 and earlier | No compatible | --- |
| ustart-2.0.0-alpha.4 and above | 2.0.x | <ul><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/regions-of-chile%2F2.0.0/regions-of-chile-2.0.0.zip">regions-of-chile-2.0.0.zip</a></li><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/regions-of-chile%2F2.0.0/regions-of-chile-2.0.0.tar.gz">regions-of-chile-2.0.0.tar.gz</a></li> |

2. Uncompress it into `plugins` (`your-project/src/plugins`)

3. Import the seed function (it populates your database with Chilean regions). Open `your-project/src/data/basicDataMocking.js` and add `populateRegionsSync()` inside of `populateBasicData` function:

```js
import { populateRegionsSync } from "../plugins/regions-of-chile/src/data/populate";

export async function populateBasicData() {
  populateRegionsSync();
}
```

4. uStart will take care of the rest

If you **like** it, remember to give a star ;-)

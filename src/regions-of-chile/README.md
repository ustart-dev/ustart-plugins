# Plugin: Regions of Chile

## Installation

1. Clone `regions-of-chile` folder into `plugins`

```shell
git clone [PENDING]
```

2. Import the seed function (it populates your database with Chilean regions). Open `your-project/src/data/basicDataMocking.js` and add `populateRegionsSync()` inside of `populateBasicData` function:

```js
import { populateRegionsSync } from "../plugins/regions-of-chile/src/data/populate";

export async function populateBasicData() {
  populateRegionsSync();
}
```

3. uStart will take care of the rest

> This plugin requires ustart-2.0.0-alpha.4 or later

If you like it, remember to give a star ;-)

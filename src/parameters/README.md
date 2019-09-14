# Plugin: Parameters

## Installation

1. Clone `parameters` folder into `plugins`

```shell
git clone [PENDING]
```

2. Add your own seed data in `plugins/parameter/src/data/parameters.js`.

> This plugin does not provide any seed data besides testing.

3. Open `your-project/src/data/basicDataMocking.js` and add `populateParametersSync()` inside of `populateBasicData` function:

```js
import { populateParametersSync } from "../plugins/parameters/src/data/populate";

export async function populateBasicData() {
  populateParametersSync();
}
```

That is all, uStart will take care of the rest

> This plugin requires ustart-2.0.0-alpha.4 or later

If you like it, remember to give a star ;-)

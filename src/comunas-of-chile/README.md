# Plugin: Comunas of Chile

It works as a standalone plugin or together with [regions of chile](PENDING).

## Installation

1. Clone `comunas-of-chile` folder into `plugins`

```shell
git clone [PENDING]
```

2. Import the seed function (it populates your database with the Chilean comunas). Open `your-project/src/data/basicDataMocking.js` and add `populateComunasSync()` inside of `populateBasicData` function:

```js
import { populateComunasSync } from "../plugins/comunas-of-chile/src/data/populate";

export async function populateBasicData() {
  populateComunasSync();
}
```

## Use with regions of Chile

To make it work with [regions-of-chile]() plugin:

1. Make sure that `populateComunasSync()` is executed after `populateRegionsSync()`.
1. Add the association.

Open `${PROJECT_DIR}/src/models/associations.js`:

```js
import { ustart } from "ustart";

const {
  region,
  comuna
} = ustart.models;

region.hasMany(comuna);
comuna.belongsTo(region);
```

That is all, uStart will take care of the rest.

> This plugin requires ustart-2.0.0-alpha.4 or later

If you like it, remember to give a star ;-)

# Plugin: Comunas of Chile

It works as a standalone plugin or together with [regions of chile](PENDING).

## Installation

1. Download the right version based on the following table

| uStart package | plugin version | latest release |
|  :---: | :---: | :--- |
| ustart-2.0.0-alpha.3 and earlier | No compatible | --- |
| ustart-2.0.0-alpha.4 and above | 2.0.x | <ul><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/comunas-of-chile%2F2.0.0/comunas-of-chile-2.0.0.zip">comunas-of-chile-2.0.0.zip</a></li><li><a href="https://github.com/ustart-dev/ustart-plugins/releases/download/comunas-of-chile%2F2.0.0/comunas-of-chile-2.0.0.tar.gz">comunas-of-chile-2.0.0.tar.gz</a></li> |

2. Uncompress it into `plugins` (`your-project/src/plugins`)

3. Import the seed function (it populates your database with the Chilean comunas). Open `your-project/src/data/basicDataMocking.js` and add `populateComunasSync()` inside of `populateBasicData` function:

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

If you **like** it, remember to give a star ;-)

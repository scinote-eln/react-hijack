# render-hijack add-on loader library

The reason this library exists is to enable the team to include application add-ons created using React.js in the core application without introducing knowledge of the specific functionality in the core itself.

There are no design contstraints when using the library, only a simple nuance with regards to functional React.js components.

## Usage

**Import the library into the module where you want to use it:**

```js
import withExtras from 'render-hijack';
```

**Create your enhanced component:**

```js
import withExtras from 'render-hijack';

// ...
const MenuWithExtras = withExtras({ screenName: 'screen1' })(Menu);
export default MenuWithExtras
// ...
```

## Configuration

The configuration structure is very simple, as it can be observed from the example below.

```js
export default {
    'screen1': {
        'Component1': {
            modulePath: 'add-ons/Component1.js',
            mountPoint: 'mountPoint',
            strategy: 'replace'
        },

        'Component2': {
            modulePath: 'add-ons/Component2.js',
            mountPoint: 'mountPoint',
            strategy: 'append'
        }
    }
}
```

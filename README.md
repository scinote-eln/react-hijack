# React render hijacking library

The reason this library exists is to enable the team to include application add-ons created using React.js in the core application without introducing knowledge of the specific functionality in the core itself.

There are no design contstraints when using the library, only a simple nuance with regards to functional React.js components.

## Usage

**Import the library into the module where you want to use it:**

```js
import withExtras from 'react-hijack';
```

**Create your enhanced component:**

```js
import withExtras from 'react-hijack';

// ...
const MenuWithExtras = withExtras({ identifier: 'configIdentifier' })(Menu);
export default MenuWithExtras;
// ...
```

## Configuration

The configuration each React component should export should be structured like below

```js
export default {
    'Component1': {
        modulePath: 'add-ons/Component1.js',
        mountPoint: 'mountPoint',
        strategy: 'replace',
        areas: ['navigation', 'sidebar']
    },

    'Component2': {
        modulePath: 'add-ons/Component2.js',
        mountPoint: 'mountPoint',
        strategy: 'append',
        areas: ['sidebar']
    }
}
```
The configuration for each add-on will be compacted into a meta-configuration by
a rails initializer. This configuration will later be used in the application to configure
each enhanced component, in turn.

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withExtras = __webpack_require__(2);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withExtras).default;
  }
});

var _createLoader = __webpack_require__(9);

Object.defineProperty(exports, 'createLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createLoader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _enhanceComponent = __webpack_require__(3);

var _getConfiguration = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {Object}  options The configuration object
 * @param {string} options.identifier The screen identifier used to pull
 * configuration data out of the main config file.
 *
 * @returns {withExtras~enhance} Component manipulator. returns the enhanced component
 */
var withExtras = function withExtras(_ref, loader) {
    var _ref$identifier = _ref.identifier,
        identifier = _ref$identifier === undefined ? '' : _ref$identifier,
        _ref$config = _ref.config,
        config = _ref$config === undefined ? null : _ref$config;

    var componentConfiguration = {};
    /**
     *
     * @param {React.Component} EnhancedComponent The component that should
     * be ehnanced / modified
     * @returns {React.Component|null} The enhanced React component (EnhancedComponent)
     */
    var enhance = function enhance(EnhancedComponent) {
        return EnhancedComponent;
    };

    try {
        componentConfiguration = (0, _getConfiguration.getConfiguration)(identifier, config);
        enhance = function enhance(EnhancedComponent) {
            return (0, _enhanceComponent.enhanceComponent)(EnhancedComponent, componentConfiguration, loader);
        };
    } catch (configurationError) {
        // intentionally left blank
    }

    return enhance;
};

exports.default = withExtras;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enhanceComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _v = __webpack_require__(4);

var _v2 = _interopRequireDefault(_v);

var _scinoteReactTraverse = __webpack_require__(7);

var _scinoteReactTraverse2 = _interopRequireDefault(_scinoteReactTraverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Validates whether or not the provided Argument is a React component which extends
 * from React.Component (is a class) or not.
 *
 * @param {React.Component|null} Component The React component that needs to be validated
 */
var isClass = function isClass() {
    var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return !!(Component && Component.prototype.isReactComponent);
};

var STRATEGY_APPEND = 'append';
var STRATEGY_PREPEND = 'prepend';
var STRATEGY_REPLACE = 'replace';

/**
 * Modifies the list of children it receives as an argument based on the
 * add-on specific strategy.
 *
 * @param {React.Element[]} originalComponentChildren The children of the component
 * we are extending
 * @param {React.Element} addon The enhancement element to be inserted into
 * the application.
 */
var applyStrategy = function applyStrategy() {
    var originalComponentChildren = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var addon = arguments[1];

    switch (addon.strategy) {
        case STRATEGY_PREPEND:
            return [addon.component].concat(_toConsumableArray(originalComponentChildren));
        case STRATEGY_REPLACE:
            return addon.component;
        case STRATEGY_APPEND:
            return [].concat(_toConsumableArray(originalComponentChildren), [addon.component]);
        // default is treated through the default strategy value which is 'append'
    }
};

var traverseTreeStructure = function traverseTreeStructure(extras, path) {
    return extras.map(function (e) {
        if (path.node.props.id === e.mountPoint) {
            return _react2.default.cloneElement.apply(_react2.default, [path.node, path.node.props].concat(_toConsumableArray(applyStrategy(path.node.props.children, e))));
        }
        return path.node;
    }).pop();
};
/**
 * Extends the React render tree structure it receives with extra components it also
 * takes as arguments
 *
 * @param {React.Element} tree The render tree obtained from executing the `render()`
 * method of a class-based React component or by executing a stateless, functional
 * React component.
 * @param {Object[]} extras A list of add-ons (React components) used to enhance
 * the original render tree.
 *
 * @returns {React.Element} The initial render tree, enhanced with the extra components
 */
var enhanceTreeStructureWithExtras = function enhanceTreeStructureWithExtras(tree, extras) {
    return (0, _scinoteReactTraverse2.default)(tree, {
        DOMElement: function DOMElement(path) {
            return traverseTreeStructure(extras, path);
        },
        ComponentElement: function ComponentElement(path) {
            return traverseTreeStructure(extras, path);
        }
    });
};

var addUniqueKey = function addUniqueKey(component) {
    return _react2.default.cloneElement(component, Object.assign({}, component.props, { key: (0, _v2.default)() }), component.props.children);
};

/**
 *
 * @param {React.Element} tree The render tree resulted from executing
 * `Component.render()` or `Component()` in the case of functional components
 * @param {React.Element[]} extras A list of React components (add-ons) that need to be
 * added to the original tree.
 * @returns {React.Element} A newly generated tree with the add-ons bundled within.
 */
var hijackRendering = function hijackRendering(tree) {
    var extras = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var newProps = Object.assign({}, tree.props);
    var treeWithExtras = enhanceTreeStructureWithExtras(tree, extras);
    return treeWithExtras;
};

/**
 * Enhances class-based React components with the add-ons provided through the
 * `componentConfiguration` argument.
 *
 * @param {React.Component} Component The original React component which needs
 * to be enhanced. This component is a class.
 * @param {string} componentConfiguration The configuration object containing the add-ons
 * configuraiton for the specific screen where our component is loaded.
 * @returns {Object} A new React component with the add-ons bundled in.
 */
var enhanceFromComponent = function enhanceFromComponent(Component) {
    var componentConfiguration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var loader = arguments[2];

    if (!componentConfiguration) {
        return Component;
    }

    var RootComponent = isClass(Component) ? Component : _react2.default.Component;

    return function (_RootComponent) {
        _inherits(Enhancer, _RootComponent);

        _createClass(Enhancer, null, [{
            key: 'displayName',
            get: function get() {
                return 'withExtras(' + (Component.displayName || Component.name) + ')';
            }
        }]);

        function Enhancer(props) {
            _classCallCheck(this, Enhancer);

            var _this = _possibleConstructorReturn(this, (Enhancer.__proto__ || Object.getPrototypeOf(Enhancer)).call(this, props));

            _this.state = {
                isLoaded: false,
                extras: [],
                isClass: isClass(Component)
            };
            return _this;
        }

        _createClass(Enhancer, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                var components = Object.keys(componentConfiguration);
                var setReferencesOnState = function setReferencesOnState(loadedComponents) {
                    return _this2.setState({
                        extras: loadedComponents.map(function (LC, i) {
                            return {
                                name: components[i],
                                component: addUniqueKey(LC.default()),
                                mountPoint: componentConfiguration[components[i]].mountPoint,
                                strategy: componentConfiguration[components[i]].strategy
                            };
                        }),
                        isLoaded: true
                    });
                };

                return loader(componentConfiguration).then(setReferencesOnState);
            }
        }, {
            key: 'render',
            value: function render() {
                if (!this.state.isLoaded) {
                    return null;
                }
                var tree = this.state.isClass ? _get(Enhancer.prototype.__proto__ || Object.getPrototypeOf(Enhancer.prototype), 'render', this).call(this) : Component(_extends({}, this.props));
                var enhancedRenderOutput = hijackRendering(tree, this.state.extras);
                return _react2.default.createElement(
                    'div',
                    { className: 'react-hijack-enhanced' },
                    enhancedRenderOutput
                );
            }
        }]);

        return Enhancer;
    }(RootComponent);
};

/**
 * Takes care of the delegation of work and retrieves results of the component
 * extension workflow.
 *
 * @param {React.Component} Component The original React component that needs
 * enhancement.
 * @param {Object} componentConfiguration The list of components that need to be rendered within the initial component
 * @param {Function} loader The loader function used to perform the imports for each of the components
 * provided by componentConfiguration - Currently external due to Webpack limitations
 * @returns {React.Component} A React component enhanced with add-ons
 */
var enhanceComponent = exports.enhanceComponent = function enhanceComponent(Component, componentConfiguration, loader) {
    if (!componentConfiguration) {
        throw new Error('Invalid argument value for componentConfiguration => ' + componentConfiguration);
    }

    return enhanceFromComponent(Component, componentConfiguration, loader);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(5);
var bytesToUuid = __webpack_require__(6);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(0);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStatelessComponent;
function isStatelessComponent(type) {
  return typeof type.prototype === 'undefined' || typeof type.prototype.render !== 'function';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultTraverse = undefined;
exports.kindOf = kindOf;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function kindOf(node) {
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return 'Empty';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return 'Text';
  }
  if (Array.isArray(node)) {
    return 'Fragment';
  }
  var type = node.type;

  if (typeof type === 'string') {
    return 'DOMElement';
  }
  return 'ComponentElement';
}

function _defaultTraverse(path) {
  var kind = kindOf(path.node);
  if (kind === 'Empty') {
    return path.node;
  }
  if (kind === 'Text') {
    return path.node;
  }
  if (kind === 'Fragment') {
    return path.node.map(path.traverse);
  }
  return _react2.default.cloneElement.apply(_react2.default, [path.node, path.node.props].concat(_toConsumableArray(path.traverseChildren())));
}

exports.defaultTraverse = _defaultTraverse;
function _traverse(node, visitor) {
  var _visitor$Empty = visitor.Empty,
      Empty = _visitor$Empty === undefined ? _defaultTraverse : _visitor$Empty,
      _visitor$Text = visitor.Text,
      Text = _visitor$Text === undefined ? _defaultTraverse : _visitor$Text,
      _visitor$Fragment = visitor.Fragment,
      Fragment = _visitor$Fragment === undefined ? _defaultTraverse : _visitor$Fragment,
      _visitor$DOMElement = visitor.DOMElement,
      DOMElement = _visitor$DOMElement === undefined ? _defaultTraverse : _visitor$DOMElement,
      _visitor$ComponentEle = visitor.ComponentElement,
      ComponentElement = _visitor$ComponentEle === undefined ? _defaultTraverse : _visitor$ComponentEle;

  var path = {
    node: node,
    kindOf: kindOf,
    defaultTraverse: function defaultTraverse() {
      return _defaultTraverse(path);
    },
    traverse: function traverse(childNode) {
      var childVisitor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : visitor;

      return _traverse(childNode, childVisitor);
    },
    traverseChildren: function traverseChildren() {
      var childVisitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : visitor;

      return _react2.default.Children.toArray(path.node.props.children).map(function (childNode) {
        return path.traverse(childNode, childVisitor);
      });
    },

    visitor: visitor
  };
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return Empty(path); // eslint-disable-line new-cap
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return Text(path); // eslint-disable-line new-cap
  }
  if (Array.isArray(node)) {
    return Fragment(path); // eslint-disable-line new-cap
  }
  var type = node.type;

  if (typeof type === 'string') {
    return DOMElement(path); // eslint-disable-line new-cap
  }
  return ComponentElement(path); // eslint-disable-line new-cap
}
exports.default = _traverse;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = wrapRender;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _isStatelessComponent = __webpack_require__(1);

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapRenderMemo = new WeakMap();
function wrapRender(transformNode) {
  if (!wrapRenderMemo.has(transformNode)) {
    wrapRenderMemo.set(transformNode, new WeakMap());
  }
  var memo = wrapRenderMemo.get(transformNode);
  return function (type) {
    if (!memo.has(type)) {
      memo.set(type, function () {
        if ((0, _isStatelessComponent2.default)(type)) {
          return function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class() {
              _classCallCheck(this, _class);

              return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            _createClass(_class, [{
              key: 'render',
              value: function render() {
                return transformNode(type(this.props));
              }
            }], [{
              key: 'propTypes',
              get: function get() {
                return type.propTypes;
              }
            }, {
              key: 'displayName',
              get: function get() {
                return type.displayName || type.name;
              }
            }]);

            return _class;
          }(_react2.default.Component);
        }
        return function (_type) {
          _inherits(_class2, _type);

          function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
          }

          _createClass(_class2, [{
            key: 'render',
            value: function render() {
              return transformNode(_get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'render', this).call(this));
            }
          }]);

          return _class2;
        }(type);
      }());
    }
    return memo.get(type);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRender = exports.transformComponents = exports.isStatelessComponent = undefined;

var _isStatelessComponent = __webpack_require__(1);

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _traverse = __webpack_require__(2);

var _traverse2 = _interopRequireDefault(_traverse);

var _transformComponents = __webpack_require__(5);

var _transformComponents2 = _interopRequireDefault(_transformComponents);

var _wrapRender = __webpack_require__(3);

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isStatelessComponent = _isStatelessComponent2.default;
exports.transformComponents = _transformComponents2.default;
exports.wrapRender = _wrapRender2.default;
exports.default = _traverse2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformComponentsInNode = transformComponentsInNode;
exports.default = transformComponents;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _traverse = __webpack_require__(2);

var _traverse2 = _interopRequireDefault(_traverse);

var _wrapRender = __webpack_require__(3);

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformComponentsInNode(node, transformComponent) {
  return (0, _traverse2.default)(node, {
    ComponentElement: function ComponentElement(path) {
      var _path$node = path.node,
          type = _path$node.type,
          props = _path$node.props;

      return _react2.default.createElement(transformComponent(type), props);
    }
  });
}

var transformComponentsMemo = new WeakMap();
function transformComponents(transformComponent) {
  if (!transformComponentsMemo.has(transformComponent)) {
    transformComponentsMemo.set(transformComponent, new WeakMap());
  }
  var transformComponentMemo = transformComponentsMemo.get(transformComponent);
  return function (type) {
    if (typeof type === 'string') {
      return type;
    }
    if (!transformComponentMemo.has(type)) {
      if (_react2.default.isValidElement(type)) {
        transformComponentMemo.set(type, _react2.default.createElement(transformComponents(transformComponent)(function () {
          return type;
        })));
      } else {
        transformComponentMemo.set(type, transformComponent((0, _wrapRender2.default)(function (node) {
          return transformComponentsInNode(node, function (childType) {
            return transformComponents(transformComponent)(childType);
          });
        })(type)));
      }
    }
    return transformComponentMemo.get(type);
  };
}

/***/ })
/******/ ]);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @param {string} identifier The area of the application whose addons are required
 * @returns {Object|null} An object containing the components available
 * on the specified screen or null.
 */
var getConfiguration = exports.getConfiguration = function getConfiguration() {
  var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!identifier || !config || !(identifier in config)) {
    throw new Error('Invalid component configuration\n\n      identifier: ' + identifier + '\n      config: ' + JSON.stringify(config, null, 2) + '\n      ');
  }

  return config[identifier];
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createLoader = function createLoader(importer) {
  return function (config) {
    var components = Object.keys(config);
    var imports = components.map(function (c) {
      return importer(config[c].modulePath);
    });
    return Promise.all(imports);
  };
};

exports.default = createLoader;

/***/ })
/******/ ]);
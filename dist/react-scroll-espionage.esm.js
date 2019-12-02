import React, { Component } from 'react';
import PropTypes from 'prop-types';
import observeRect from '@reach/observe-rect';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var ScrollEspionage =
/*#__PURE__*/
function (_Component) {
  inherits(ScrollEspionage, _Component);

  function ScrollEspionage() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, ScrollEspionage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ScrollEspionage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_lastH", -1);

    defineProperty(assertThisInitialized(_this), "_lastRecalc", null);

    defineProperty(assertThisInitialized(_this), "wrapper", React.createRef());

    defineProperty(assertThisInitialized(_this), "observer", null);

    defineProperty(assertThisInitialized(_this), "state", {
      current: -1,
      positions: []
    });

    defineProperty(assertThisInitialized(_this), "observe", function () {
      if (_this.observer || !_this.wrapper.current) return;
      _this.observer = observeRect(_this.wrapper.current, _this.handleChange);

      _this.observer.observe();
    });

    defineProperty(assertThisInitialized(_this), "handleChange", function (_ref) {
      var top = _ref.top,
          height = _ref.height;
      if (typeof window === 'undefined') return;

      _this.handleScroll(top);

      if (!_this.wrapper.current) return;

      if (height > 0 && height !== _this._lastH) {
        _this.handleRecalc();

        _this._lastH = height; // After last recalculation, wait 500ms and re-fire.
        // This fixes calc issues on longer pages when animationFrame skips.

        clearTimeout(_this._lastRecalc);
        _this._lastRecalc = setTimeout(function () {
          return _this.handleRecalc();
        }, 500);
      }
    });

    defineProperty(assertThisInitialized(_this), "handleRecalc", function () {
      var elements = [];

      if (_this.props.selector) {
        elements = _this.wrapper.current.querySelectorAll(_this.props.selector);
      }

      _this.setState({
        positions: toConsumableArray(elements).map(function (node) {
          return node.getBoundingClientRect().top + window.scrollY;
        }).sort(function (a, b) {
          return a - b;
        })
      });
    });

    defineProperty(assertThisInitialized(_this), "handleScroll", function (top) {
      // If detectEnd, highlight last item even if it doesn’t reach the top.
      if (_this.props.detectEnd && Math.floor(_this._lastH - window.scrollY - window.innerHeight) <= 1) {
        _this.setState(function (_ref2) {
          var positions = _ref2.positions;
          return {
            current: positions.length - 1
          };
        });

        return;
      } // Find first section that is “too far,” then step back one.
      // Infinity is added at the end so you can step back to the last index.


      _this.setState(function (_ref3) {
        var positions = _ref3.positions;
        return {
          current: [].concat(toConsumableArray(positions), [Infinity]).findIndex(function (y) {
            return y - window.scrollY - _this.props.threshold > 0;
          }) - 1
        };
      });

      _this._lastY = top;
    });

    return _this;
  }

  createClass(ScrollEspionage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.observe(); // Initialize (observer won’t fire on mount)

      this.handleRecalc();
      this.handleScroll(window.scrollY);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.observe();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.observer) this.observer.unobserve();
    } // Fires on window scroll, and reflow (images loading, resize, etc.)

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          detectEnd = _this$props.detectEnd,
          nav = _this$props.nav,
          selector = _this$props.selector,
          threshold = _this$props.threshold,
          props = objectWithoutProperties(_this$props, ["children", "detectEnd", "nav", "selector", "threshold"]);

      return React.createElement("div", _extends_1({
        ref: this.wrapper
      }, props), nav({
        current: this.state.current,
        positions: this.state.positions
      }), children);
    }
  }]);

  return ScrollEspionage;
}(Component);

defineProperty(ScrollEspionage, "propTypes", {
  children: PropTypes.node,
  detectEnd: PropTypes.bool,
  nav: PropTypes.func,
  selector: PropTypes.string.isRequired,
  threshold: PropTypes.number
});

defineProperty(ScrollEspionage, "defaultProps", {
  children: undefined,
  detectEnd: false,
  nav: function nav() {
    return null;
  },
  threshold: 0
});

export default ScrollEspionage;
//# sourceMappingURL=react-scroll-espionage.esm.js.map

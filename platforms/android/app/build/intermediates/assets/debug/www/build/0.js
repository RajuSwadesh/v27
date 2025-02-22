webpackJsonp([0],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatetoPageModule", function() { return DonatetoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donateto__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonatetoPageModule = /** @class */ (function () {
    function DonatetoPageModule() {
    }
    DonatetoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donateto__["a" /* DonatetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donateto__["a" /* DonatetoPage */]),
            ],
        })
    ], DonatetoPageModule);
    return DonatetoPageModule;
}());

//# sourceMappingURL=donateto.module.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.9.1
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this ||
            {};

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype;
  var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  // Create quick reference variables for speed access to core prototypes.
  var push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeCreate = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `_` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.9.1';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      // The 2-argument case is omitted because we’re not using it.
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  var builtinIteratee;

  // An internal function to generate callbacks that can be applied to each
  // element in a collection, returning the desired result — either `identity`,
  // an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
    return _.property(value);
  };

  // External wrapper for our callback generator. Users may customize
  // `_.iteratee` if they want additional predicate/iteratee shorthand styles.
  // This abstraction hides the internal-only argCount argument.
  _.iteratee = builtinIteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // Some functions take a variable number of arguments, or a few expected
  // arguments at the beginning and then a variable number of values to operate
  // on. This helper accumulates all remaining arguments past the function’s
  // argument length (or an explicit `startIndex`), into an array that becomes
  // the last argument. Similar to ES6’s "rest parameter".
  var restArguments = function(func, startIndex) {
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function() {
      var length = Math.max(arguments.length - startIndex, 0),
          rest = Array(length),
          index = 0;
      for (; index < length; index++) {
        rest[index] = arguments[index + startIndex];
      }
      switch (startIndex) {
        case 0: return func.call(this, rest);
        case 1: return func.call(this, arguments[0], rest);
        case 2: return func.call(this, arguments[0], arguments[1], rest);
      }
      var args = Array(startIndex + 1);
      for (index = 0; index < startIndex; index++) {
        args[index] = arguments[index];
      }
      args[startIndex] = rest;
      return func.apply(this, args);
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var shallowProperty = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var has = function(obj, path) {
    return obj != null && hasOwnProperty.call(obj, path);
  }

  var deepGet = function(obj, path) {
    var length = path.length;
    for (var i = 0; i < length; i++) {
      if (obj == null) return void 0;
      obj = obj[path[i]];
    }
    return length ? obj : void 0;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object.
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = shallowProperty('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  var createReduce = function(dir) {
    // Wrap code that reassigns argument variables in a separate function than
    // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
    var reducer = function(obj, iteratee, memo, initial) {
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      if (!initial) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    };

    return function(obj, iteratee, memo, context) {
      var initial = arguments.length >= 3;
      return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
    };
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = restArguments(function(obj, path, args) {
    var contextPath, func;
    if (_.isFunction(path)) {
      func = path;
    } else if (_.isArray(path)) {
      contextPath = path.slice(0, -1);
      path = path[path.length - 1];
    }
    return _.map(obj, function(context) {
      var method = func;
      if (!method) {
        if (contextPath && contextPath.length) {
          context = deepGet(context, contextPath);
        }
        if (context == null) return void 0;
        method = context[path];
      }
      return method == null ? method : method.apply(context, args);
    });
  });

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value != null && value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(v, index, list) {
        computed = iteratee(v, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = v;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection.
  _.shuffle = function(obj) {
    return _.sample(obj, Infinity);
  };

  // Sample **n** random values from a collection using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
    var length = getLength(sample);
    n = Math.max(Math.min(n, length), 0);
    var last = length - 1;
    for (var index = 0; index < n; index++) {
      var rand = _.random(index, last);
      var temp = sample[index];
      sample[index] = sample[rand];
      sample[rand] = temp;
    }
    return sample.slice(0, n);
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    var index = 0;
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, key, list) {
      return {
        value: value,
        index: index++,
        criteria: iteratee(value, key, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior, partition) {
    return function(obj, iteratee, context) {
      var result = partition ? [[], []] : {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (has(result, key)) result[key]++; else result[key] = 1;
  });

  var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (_.isString(obj)) {
      // Keep surrogate pair characters together
      return obj.match(reStrSymbol);
    }
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = group(function(result, value, pass) {
    result[pass ? 0 : 1].push(value);
  }, true);

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null || array.length < 1) return n == null ? void 0 : [];
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, Boolean);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    output = output || [];
    var idx = output.length;
    for (var i = 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        // Flatten current level of array or arguments object.
        if (shallow) {
          var j = 0, len = value.length;
          while (j < len) output[idx++] = value[j++];
        } else {
          flatten(value, shallow, strict, output);
          idx = output.length;
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = restArguments(function(array, otherArrays) {
    return _.difference(array, otherArrays);
  });

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // The faster algorithm will not work with an iteratee if the iteratee
  // is not a one-to-one function, so providing an iteratee will disable
  // the faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted && !iteratee) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = restArguments(function(arrays) {
    return _.uniq(flatten(arrays, true, true));
  });

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      var j;
      for (j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = restArguments(function(array, rest) {
    rest = flatten(rest, true, true);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  });

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices.
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = restArguments(_.unzip);

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values. Passing by pairs is the reverse of _.pairs.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions.
  var createPredicateIndexFinder = function(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  };

  // Returns the first index on an array-like that passes a predicate test.
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions.
  var createIndexFinder = function(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
          i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Chunk a single array into multiple arrays, each containing `count` or fewer
  // items.
  _.chunk = function(array, count) {
    if (count == null || count < 1) return [];
    var result = [];
    var i = 0, length = array.length;
    while (i < length) {
      result.push(slice.call(array, i, i += count));
    }
    return result;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments.
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = restArguments(function(func, context, args) {
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var bound = restArguments(function(callArgs) {
      return executeBound(func, bound, context, this, args.concat(callArgs));
    });
    return bound;
  });

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder by default, allowing any combination of arguments to be
  // pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
  _.partial = restArguments(function(func, boundArgs) {
    var placeholder = _.partial.placeholder;
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  });

  _.partial.placeholder = _;

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = restArguments(function(obj, keys) {
    keys = flatten(keys, false, false);
    var index = keys.length;
    if (index < 1) throw new Error('bindAll must be passed function names');
    while (index--) {
      var key = keys[index];
      obj[key] = _.bind(obj[key], obj);
    }
  });

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = restArguments(function(func, wait, args) {
    return setTimeout(function() {
      return func.apply(null, args);
    }, wait);
  });

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };

    var throttled = function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };

    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };

    return throttled;
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  _.restArguments = restArguments;

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
    'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  };

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`.
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object.
  // In contrast to _.map it returns an object.
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = _.keys(obj),
        length = keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = keys[index];
      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  // The opposite of _.object.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`.
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, defaults) {
    return function(obj) {
      var length = arguments.length;
      if (defaults) obj = Object(obj);
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!defaults || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s).
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test.
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Internal pick helper function to determine if `obj` has key `key`.
  var keyInObj = function(value, key, obj) {
    return key in obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = restArguments(function(obj, keys) {
    var result = {}, iteratee = keys[0];
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
      keys = _.allKeys(obj);
    } else {
      iteratee = keyInObj;
      keys = flatten(keys, false, false);
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  });

  // Return a copy of the object without the blacklisted properties.
  _.omit = restArguments(function(obj, keys) {
    var iteratee = keys[0], context;
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
      if (keys.length > 1) context = keys[1];
    } else {
      keys = _.map(flatten(keys, false, false), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  });

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq, deepEq;
  eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
    return deepEq(a, b, aStack, bStack);
  };

  // Internal recursive comparison function for `isEqual`.
  deepEq = function(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
      case '[object Symbol]':
        return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
  var nodelist = root.document && root.document.childNodes;
  if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    return _.isNumber(obj) && isNaN(obj);
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, path) {
    if (!_.isArray(path)) {
      return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
      var key = path[i];
      if (obj == null || !hasOwnProperty.call(obj, key)) {
        return false;
      }
      obj = obj[key];
    }
    return !!length;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  // Creates a function that, when passed an object, will traverse that object’s
  // properties down the given `path`, specified as an array of keys or indexes.
  _.property = function(path) {
    if (!_.isArray(path)) {
      return shallowProperty(path);
    }
    return function(obj) {
      return deepGet(obj, path);
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    if (obj == null) {
      return function(){};
    }
    return function(path) {
      return !_.isArray(path) ? obj[path] : deepGet(obj, path);
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // Traverses the children of `obj` along `path`. If a child is a function, it
  // is invoked with its parent as context. Returns the value of the final
  // child, or `fallback` if any child is undefined.
  _.result = function(obj, path, fallback) {
    if (!_.isArray(path)) path = [path];
    var length = path.length;
    if (!length) {
      return _.isFunction(fallback) ? fallback.call(obj) : fallback;
    }
    for (var i = 0; i < length; i++) {
      var prop = obj == null ? void 0 : obj[path[i]];
      if (prop === void 0) {
        prop = fallback;
        i = length; // Ensure we don't continue iterating.
      }
      obj = _.isFunction(prop) ? prop.call(obj) : prop;
    }
    return obj;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offset.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    var render;
    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var chainResult = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return chainResult(this, func.apply(_, args));
      };
    });
    return _;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return chainResult(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return chainResult(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return String(this._wrapped);
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43), __webpack_require__(616)(module)))

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OutputType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```typescript
 * import { ImagePicker } from '@ionic-native/image-picker';
 *
 *
 * constructor(private imagePicker: ImagePicker) { }
 *
 * ...
 *
 * this.imagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => { });
 *
 * ```
 * @interfaces
 * ImagePickerOptions
 */
var ImagePicker = (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    /**
       * Pick pictures from the library.
       * @param {ImagePickerOptions} options
       * @returns {Promise<any>} Returns a Promise that resolves the image file URI
       * otherwise rejects with an error.
       */
    ImagePicker.prototype.getPictures = /**
       * Pick pictures from the library.
       * @param {ImagePickerOptions} options
       * @returns {Promise<any>} Returns a Promise that resolves the image file URI
       * otherwise rejects with an error.
       */
    function (options) { return; };
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    /**
       * Check if we have permission to read images
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
       */
    ImagePicker.prototype.hasReadPermission = /**
       * Check if we have permission to read images
       * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
       */
    function () { return; };
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    /**
       * Request permission to read images
       * @returns {Promise<any>}
       */
    ImagePicker.prototype.requestReadPermission = /**
       * Request permission to read images
       * @returns {Promise<any>}
       */
    function () { return; };
    ImagePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "getPictures", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "hasReadPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "requestReadPermission", null);
    /**
     * @name Image Picker
     * @description
     * Cordova Plugin For Multiple Image Selection
     *
     * Requires Cordova plugin: `cordova-plugin-image-picker`.
     * For more info, please see the https://github.com/wymsee/cordova-imagePicker
     *
     * @usage
     * ```typescript
     * import { ImagePicker } from '@ionic-native/image-picker';
     *
     *
     * constructor(private imagePicker: ImagePicker) { }
     *
     * ...
     *
     * this.imagePicker.getPictures(options).then((results) => {
     *   for (var i = 0; i < results.length; i++) {
     *       console.log('Image URI: ' + results[i]);
     *   }
     * }, (err) => { });
     *
     * ```
     * @interfaces
     * ImagePickerOptions
     */
    ImagePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'ImagePicker',
            plugin: 'cordova-plugin-telerik-imagepicker',
            pluginRef: 'window.imagePicker',
            repo: 'https://github.com/Telerik-Verified-Plugins/ImagePicker',
            install: 'ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"',
            installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
            platforms: ['Android', 'iOS']
        })
    ], ImagePicker);
    return ImagePicker;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DonatetoPage = /** @class */ (function () {
    function DonatetoPage(navCtrl, navParams, imagePicker, api, file, transfer, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.api = api;
        this.file = file;
        this.transfer = transfer;
        this.service = service;
        this.donation_images = [];
        this.category = '';
        this.product_title = '';
        this.description = '';
        this.stock = '';
        this.product_condition = '';
        this.contact_person = '';
        this.contact_number = '';
        this.address = '';
        this.city = '';
        this.pincode = '';
        this.donation_img_length = 6;
        this.category_list = [];
        this.sub_cat_section = [];
        this.sub_category = '';
        this.pro_cat = '';
        this.FormLocation = {
            address: '',
            latitude: '',
            longitude: ''
        };
        this.initautocomplete();
    }
    DonatetoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DonatetoPage');
        this.api.GET('/allCategories').then(function (res) {
            console.log(res);
            _this.category_list = res.data;
            console.log(_this.category_list);
        });
    };
    DonatetoPage.prototype.initautocomplete = function () {
        var base = this;
        setTimeout(function () {
            console.log('--------------------------------------------------------------------------------');
            console.log(document.getElementById('donateAddress').getElementsByTagName('input')[0]);
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('donateAddress').getElementsByTagName('input')[0]);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
                    return;
                }
                else {
                    console.log(place);
                    // base.destination = false;
                    base.FormLocation = {
                        address: place.formatted_address,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    };
                    console.log(base.FormLocation);
                }
            });
        }, 2000);
    };
    DonatetoPage.prototype.donatepayment = function () {
        this.navCtrl.push('DonatepaymentPage');
    };
    DonatetoPage.prototype.chooseimg = function () {
        var _this = this;
        var base = this;
        var options = {
            quality: 20,
            outputType: 1,
            maximumImagesCount: this.donation_img_length
        };
        base.imagePicker.getPictures(options).then(function (results) {
            console.log(results);
            console.log(results.length);
            for (var i = 0; i < results.length; i++) {
                var base64img = 'data:image/jpeg;base64,' + (results[i]);
                _this.donation_images.push(base64img);
                console.log(_this.donation_images);
            }
            if (_this.donation_images.length == 6) {
                _this.donation_img_length = 0;
            }
            else if (_this.donation_images.length == 5) {
                _this.donation_img_length = 1;
            }
            else if (_this.donation_images.length == 4) {
                _this.donation_img_length = 2;
            }
            else if (_this.donation_images.length == 3) {
                _this.donation_img_length = 3;
            }
            else if (_this.donation_images.length == 2) {
                _this.donation_img_length = 4;
            }
            else if (_this.donation_images.length == 1) {
                _this.donation_img_length = 5;
            }
            // this.donation_img_length=this.donation_img_length-(+this.donation_images.length);
            // console.log(this.donation_img_length)
        }, function (err) { });
    };
    DonatetoPage.prototype.donate = function () {
        if (this.category == '') {
            this.service.Warning('Please choose category');
        }
        else if (this.sub_cat_section.length > 0) {
            if (this.sub_category == '') {
                this.service.Warning('Please choose subcategory');
            }
            else if (this.product_title == '') {
                this.service.Warning('Enter Product Title');
            }
            else if (this.donation_images.length == 0) {
                this.service.Warning('Upload images');
            }
            else if (this.description == '') {
                this.service.Warning("Enter description");
            }
            else if (this.stock == '') {
                this.service.Warning("Enter Stock");
            }
            else if (this.product_condition == '') {
                this.service.Warning("Enter Product Condition");
            }
            else if (this.contact_person == '') {
                this.service.Warning("Enter Contact Person Name");
            }
            else if (this.contact_number == '') {
                this.service.Warning("Enter Contact Person Number");
            }
            else if (this.city == '') {
                this.service.Warning("Enter City");
            }
            else if (this.pincode == '') {
                this.service.Warning("Enter pincode");
            }
            else {
                this.save();
            }
        }
        else {
            if (this.product_title == '') {
                this.service.Warning('Enter Product Title');
            }
            else if (this.donation_images.length == 0) {
                this.service.Warning('Upload images');
            }
            else if (this.description == '') {
                this.service.Warning("Enter description");
            }
            else if (this.stock == '') {
                this.service.Warning("Enter Stock");
            }
            else if (this.product_condition == '') {
                this.service.Warning("Enter Product Condition");
            }
            else if (this.contact_person == '') {
                this.service.Warning("Enter Contact Person Name");
            }
            else if (this.contact_number == '') {
                this.service.Warning("Enter Contact Person Number");
            }
            else if (this.address == '') {
                this.service.Warning("Enter Address");
            }
            else if (this.city == '') {
                this.service.Warning("Enter City");
            }
            else if (this.pincode == '') {
                this.service.Warning("Enter pincode");
            }
            else {
                this.save();
            }
        }
    };
    DonatetoPage.prototype.save = function () {
        var _this = this;
        console.log(this.donation_images);
        console.log(this.category, this.product_title, this.donation_images, this.description, this.stock, this.product_condition, this.contact_person, this.contact_number, this.address, this.city, this.pincode);
        if (this.category != undefined && this.sub_category != undefined) {
            this.service.LoaderShowmsg('Submitting Product..');
            this.api.POST('/saveDonation', {
                in_category: this.pro_cat,
                product_title: this.product_title,
                more_images: this.donation_images,
                description: this.description,
                stock: this.stock,
                product_condition: this.product_condition,
                contact_person: this.contact_person,
                contact_number: this.contact_number,
                address: this.FormLocation.address,
                latitude: this.FormLocation.latitude,
                longitude: this.FormLocation.longitude,
                city: this.city,
                pin: this.pincode
            }).then(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    _this.service.Success(res.data);
                    _this.navCtrl.pop();
                    _this.service.LoaderHide();
                }
            }).catch(function (error) {
                _this.service.LoaderHide();
                _this.service.Warning('Something went wrong. Try again later');
            });
        }
        else {
            this.service.LoaderShowmsg('Submitting Product..');
            this.api.POST('/saveDonation', {
                in_category: this.category,
                product_title: this.product_title,
                more_images: this.donation_images,
                description: this.description,
                stock: this.stock,
                product_condition: this.product_condition,
                contact_person: this.contact_person,
                contact_number: this.contact_number,
                address: this.FormLocation.address,
                latitude: this.FormLocation.latitude,
                longitude: this.FormLocation.longitude,
                city: this.city,
                pin: this.pincode
            }).then(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    _this.service.Success(res.data);
                    _this.navCtrl.pop();
                    _this.service.LoaderHide();
                }
            }).catch(function (error) {
                _this.service.LoaderHide();
                _this.service.Warning('Something went wrong. Try again later');
            });
        }
    };
    DonatetoPage.prototype.remove = function (index) {
        this.donation_images.splice(index, 1);
        this.donation_img_length = this.donation_img_length + (+1);
        console.log(this.donation_img_length);
    };
    DonatetoPage.prototype.selectedVal = function (info) {
        var _this = this;
        console.log(info);
        console.log(this.category);
        this.pro_cat = this.category;
        console.log(this.pro_cat);
        var filtered_data = __WEBPACK_IMPORTED_MODULE_7_underscore__["filter"](this.category_list, function (elem) {
            if (elem.id == _this.category) {
                return elem;
            }
        });
        console.log(filtered_data);
        if (filtered_data[0].subCategories.length > 0) {
            this.sub_cat_section = filtered_data[0].subCategories;
        }
        else {
            this.sub_cat_section = [];
        }
    };
    DonatetoPage.prototype.selectedVal1 = function () {
        console.log(this.sub_category);
        this.pro_cat = this.category + ',' + this.sub_category;
        console.log(this.pro_cat);
    };
    DonatetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donateto',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donateto\donateto.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Donate To</ion-title>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ul>\n    <li><img src="assets/imgs/donation-9.jpg"></li>\n    <li><img src="assets/imgs/donation-10.jpg"></li>\n    <li><img src="assets/imgs/donation-11.jpg"></li>\n  </ul> -->\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Category</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="selectedVal(item)">\n          <ion-option *ngFor="let item of category_list" value="{{item.id}}" >{{item.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="category && sub_cat_section.length>0">\n        <ion-label floating>Sub Category</ion-label>\n        <ion-select [(ngModel)]="sub_category" (ionChange)="selectedVal1()">\n            <ion-option *ngFor="let item of sub_cat_section" value="{{item.id}}" >{{item.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating>Product Title</ion-label>\n      <ion-input type="text" [(ngModel)]="product_title" class="my-input"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-textarea type="text" [(ngModel)]="description" class="my-input"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Stock</ion-label>\n      <ion-input type="number" [(ngModel)]="stock" class="my-input"></ion-input>\n    </ion-item>\n\n    <ion-item>\n    <ion-label floating>Product Condition</ion-label>\n    <ion-select [(ngModel)]="product_condition">\n      <ion-option value="new">New</ion-option>\n      <ion-option value="used">Used</ion-option>\n      <ion-option value="damaged">Damaged</ion-option>\n    </ion-select>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>Contact Person</ion-label>\n      <ion-input type="text" [(ngModel)]="contact_person" class="my-input"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contact Number</ion-label>\n      <ion-input type="tel" [(ngModel)]="contact_number" class="my-input"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" [(ngModel)]="address" class="my-input"></ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label floating>City</ion-label>\n      <ion-input type="text" [(ngModel)]="city" class="my-input"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Pincode</ion-label>\n      <ion-input type="tel" [(ngModel)]="pincode" class="my-input"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n     <span item-start>Choose Images <span style="color:grey;font-size:13px;">(Maximum 6 Images)</span></span><span item-end class="cam" (click)="chooseimg()" *ngIf="donation_img_length>0"><ion-icon name="camera"></ion-icon></span>\n    </ion-item>\n\n    <!-- <button ion-button (click)="chooseimg()">Choose Image</button> -->\n\n    <ion-row>\n      <ion-col col-4 *ngFor="let item of donation_images;let i=index">\n        <div class="container">\n        <img [src]="item"/>\n        <div class="top-right" (click)="remove(i)"><ion-icon name="close"></ion-icon></div>\n        </div>\n      </ion-col>\n\n      <!-- <ion-col col-4>\n        <div class="container">\n        <img src="assets/imgs/donation-9.jpg">\n        <div class="top-right"><ion-icon name="close"></ion-icon></div>\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <img src="assets/imgs/donation-9.jpg">\n      </ion-col>\n      <ion-col col-4>\n        <img src="assets/imgs/donation-9.jpg">\n      </ion-col> -->\n    </ion-row>\n\n    <ion-item>\n      <ion-label floating>Address</ion-label>\n      <ion-input type="text" [(ngModel)]="FormLocation.address" id="donateAddress" class="my-input"></ion-input>\n    </ion-item>\n\n    <!-- <div class="custom" style="margin-top:17px;" >\n      <div class="subcustom" >\n      <label>Address</label>\n      <input type="text" id="GoForm"  placeholder="enter address...." [(ngModel)]="FormLocation.address">\n      </div>\n      </div> -->\n   \n\n    <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s" (tap)="donate()">Submit</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donateto\donateto.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */]])
    ], DonatetoPage);
    return DonatetoPage;
}());

//# sourceMappingURL=donateto.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
var File = (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR'
        };
        return _this;
    }
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    /**
       * Get free disk space in Bytes
       * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
       */
    File.prototype.getFreeDiskSpace = /**
       * Get free disk space in Bytes
       * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
       */
    function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    /**
       * Check if a directory exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dir Name of directory to check
       * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
       */
    File.prototype.checkDir = /**
       * Check if a directory exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dir Name of directory to check
       * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
       */
    function (path, dir) {
        if (/^\//.test(dir)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        var fullPath = path + dir;
        return this.resolveDirectoryUrl(fullPath).then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    /**
       * Creates a new directory in the specific path.
       * The replace boolean value determines whether to replace an existing directory with the same name.
       * If an existing directory exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
       */
    File.prototype.createDir = /**
       * Creates a new directory in the specific path.
       * The replace boolean value determines whether to replace an existing directory with the same name.
       * If an existing directory exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
       */
    function (path, dirName, replace) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path).then(function (fse) {
            return _this.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    /**
       * Remove a directory at a given path.
       *
       * @param {string} path The path to the directory
       * @param {string} dirName The directory name
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    File.prototype.removeDir = /**
       * Remove a directory at a given path.
       *
       * @param {string} path The path to the directory
       * @param {string} dirName The directory name
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destination path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    /**
       * Move a directory to a given path.
       *
       * @param {string} path The source path to the directory
       * @param {string} dirName The source directory name
       * @param {string} newPath The destination path to the directory
       * @param {string} newDirName The destination directory name
       * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
       */
    File.prototype.moveDir = /**
       * Move a directory to a given path.
       *
       * @param {string} path The source path to the directory
       * @param {string} dirName The source directory name
       * @param {string} newPath The destination path to the directory
       * @param {string} newDirName The destination directory name
       * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
       */
    function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if (/^\//.test(newDirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                return _this.move(srcde, destenation, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    /**
       * Copy a directory in various methods. If destination directory exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
       */
    File.prototype.copyDir = /**
       * Copy a directory in various methods. If destination directory exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
       */
    function (path, dirName, newPath, newDirName) {
        var _this = this;
        if (/^\//.test(newDirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    /**
       * List files and directory from a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory
       * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
       */
    File.prototype.listDir = /**
       * List files and directory from a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
       * @param {string} dirName Name of directory
       * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, {
                create: false,
                exclusive: false
            });
        })
            .then(function (de) {
            var reader = de.createReader();
            return _this.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    /**
       * Removes all files and the directory from a desired location.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
       */
    File.prototype.removeRecursively = /**
       * Removes all files and the directory from a desired location.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} dirName Name of directory
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
       */
    function (path, dirName) {
        var _this = this;
        if (/^\//.test(dirName)) {
            var err = new FileError(5);
            err.message = 'directory cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    /**
       * Check if a file exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file to check
       * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
       */
    File.prototype.checkFile = /**
       * Check if a file exists in a certain path, directory.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file to check
       * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
       */
    function (path, file) {
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    /**
       * Creates a new file in the specific path.
       * The replace boolean value determines whether to replace an existing file with the same name.
       * If an existing file exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
       */
    File.prototype.createFile = /**
       * Creates a new file in the specific path.
       * The replace boolean value determines whether to replace an existing file with the same name.
       * If an existing file exists and the replace value is false, the promise will fail and return an error.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to create
       * @param {boolean} replace If true, replaces file with same name. If false returns error
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
       */
    function (path, fileName, replace) {
        var _this = this;
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path).then(function (fse) {
            return _this.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    /**
       * Removes a file from a desired location.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to remove
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    File.prototype.removeFile = /**
       * Removes a file from a desired location.
       *
       * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to remove
       * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
       */
    function (path, fileName) {
        var _this = this;
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return _this.remove(fe);
        });
    };
    /**
     * Write a new file to the desired location.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName path relative to base path
     * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
     * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    /**
       * Write a new file to the desired location.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
       * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
       * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    File.prototype.writeFile = /**
       * Write a new file to the desired location.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob | ArrayBuffer} text content, blob or ArrayBuffer to write
       * @param {IWriteOptions} whether to replace/append to an existing file. See IWriteOptions for more information.
       * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (/^\//.test(fileName)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, fileName, getFileOpts);
        })
            .then(function (fileEntry) {
            return _this.writeFileEntry(fileEntry, text, options);
        });
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    /**
       * Write content to FileEntry.
       * @hidden
       * @param {FileEntry} fe file entry object
       * @param {string | Blob} text content or blob to write
       * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    File.prototype.writeFileEntry = /**
       * Write content to FileEntry.
       * @hidden
       * @param {FileEntry} fe file entry object
       * @param {string | Blob} text content or blob to write
       * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
       * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
       */
    function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /**
     * Write to an existing file.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    /**
       * Write to an existing file.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob} text content or blob to write
       * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
       */
    File.prototype.writeExistingFile = /**
       * Write to an existing file.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName path relative to base path
       * @param {string | Blob} text content or blob to write
       * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
       */
    function (path, fileName, text) {
        return this.writeFile(path, fileName, text, { replace: true });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    /**
       * Read the contents of a file as text.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
       */
    File.prototype.readAsText = /**
       * Read the contents of a file as text.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'Text');
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    /**
       * Read file and return data as a base64 encoded data url.
       * A data url is of the form:
       *      data: [<mediatype>][;base64],<data>
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
       */
    File.prototype.readAsDataURL = /**
       * Read file and return data as a base64 encoded data url.
       * A data url is of the form:
       *      data: [<mediatype>][;base64],<data>
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'DataURL');
    };
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    /**
       * Read file and return data as a binary data.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
       */
    File.prototype.readAsBinaryString = /**
       * Read file and return data as a binary data.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'BinaryString');
    };
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    /**
       * Read file and return data as an ArrayBuffer.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
       */
    File.prototype.readAsArrayBuffer = /**
       * Read file and return data as an ArrayBuffer.
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} file Name of file, relative to path.
       * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
       */
    function (path, file) {
        return this.readFile(path, file, 'ArrayBuffer');
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    /**
       * Move a file to a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to move
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to move to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
       */
    File.prototype.moveFile = /**
       * Move a file to a given path.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to move
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to move to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
       */
    function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if (/^\//.test(newFileName)) {
            var err = new FileError(5);
            err.message = 'file name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    /**
       * Copy a file in various methods. If file exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
       */
    File.prototype.copyFile = /**
       * Copy a file in various methods. If file exists, will fail to copy.
       *
       * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystem above
       * @param {string} fileName Name of file to copy
       * @param {string} newPath Base FileSystem of new location
       * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
       * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
       */
    function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if (/^\//.test(newFileName)) {
            var err = new FileError(5);
            err.message = 'file name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                return _this.copy(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.fillErrorMessage = /**
       * @hidden
       */
    function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    /**
       * Resolves a local file system URL
       * @param fileUrl {string} file system url
       * @returns {Promise<Entry>}
       */
    File.prototype.resolveLocalFilesystemUrl = /**
       * Resolves a local file system URL
       * @param fileUrl {string} file system url
       * @returns {Promise<Entry>}
       */
    function (fileUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    /**
       * Resolves a local directory url
       * @param directoryUrl {string} directory system url
       * @returns {Promise<DirectoryEntry>}
       */
    File.prototype.resolveDirectoryUrl = /**
       * Resolves a local directory url
       * @param directoryUrl {string} directory system url
       * @returns {Promise<DirectoryEntry>}
       */
    function (directoryUrl) {
        return this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    /**
       * Get a directory
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param directoryName {string} Directory name
       * @param flags {Flags} Options
       * @returns {Promise<DirectoryEntry>}
       */
    File.prototype.getDirectory = /**
       * Get a directory
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param directoryName {string} Directory name
       * @param flags {Flags} Options
       * @returns {Promise<DirectoryEntry>}
       */
    function (directoryEntry, directoryName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    /**
       * Get a file
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param fileName {string} File name
       * @param flags {Flags} Options
       * @returns {Promise<FileEntry>}
       */
    File.prototype.getFile = /**
       * Get a file
       * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
       * @param fileName {string} File name
       * @param flags {Flags} Options
       * @returns {Promise<FileEntry>}
       */
    function (directoryEntry, fileName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.remove = /**
       * @hidden
       */
    function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.move = /**
       * @hidden
       */
    function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.copy = /**
       * @hidden
       */
    function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.readEntries = /**
       * @hidden
       */
    function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.rimraf = /**
       * @hidden
       */
    function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.createWriter = /**
       * @hidden
       */
    function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.write = /**
       * @hidden
       */
    function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    /**
       * @hidden
       */
    File.prototype.writeFileInChunks = /**
       * @hidden
       */
    function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "dataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "cacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalApplicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalCacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalRootDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "tempDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "syncedDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "documentsDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "sharedDirectory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFreeDiskSpace", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "listDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeRecursively", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeExistingFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsText", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsDataURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsBinaryString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsArrayBuffer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveLocalFilesystemUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveDirectoryUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getDirectory", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFile", null);
    /**
     * @name File
     * @description
     * This plugin implements a File API allowing read/write access to files residing on the device.
     *
     * The File class implements static convenience functions to access files and directories.
     *
     * Example:
     * ```
     * import { File } from '@ionic-native/file';
     *
     * constructor(private file: File) { }
     *
     * ...
     *
     * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
     *
     * ```
     *
     *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
     *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
     *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
     *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
     *  @interfaces
     *  IFile
     *  Entry
     *  DirectoryEntry
     *  DirectoryReader
     *  FileSystem
     */
    File = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file',
            platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], File);
    return File;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTransfer; });
/* unused harmony export FileTransferObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @deprecated
 * This plugin has been deprecated in favor of XHR2
 * https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html
 *
 * @usage
 * ```typescript
 * import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: FileTransfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: FileTransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 *
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * FileTransferObject
 */
var FileTransfer = (function (_super) {
    __extends(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Error code rejected from upload with FileTransferError
           * Defined in FileTransferError.
           *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
           *      INVALID_URL_ERR: 2,     Return when url was invalid
           *      CONNECTION_ERR: 3,      Return on connection error
           *      ABORT_ERR: 4,           Return on aborting
           *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
           * @enum {number}
           */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    /**
       * Creates a new FileTransfer object
       * @return {FileTransferObject}
       */
    FileTransfer.prototype.create = /**
       * Creates a new FileTransfer object
       * @return {FileTransferObject}
       */
    function () {
        return new FileTransferObject();
    };
    FileTransfer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /**
     * @name File Transfer
     *
     * @description
     * This plugin allows you to upload and download files.
     *
     * @deprecated
     * This plugin has been deprecated in favor of XHR2
     * https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html
     *
     * @usage
     * ```typescript
     * import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
     * import { File } from '@ionic-native/file';
     *
     * constructor(private transfer: FileTransfer, private file: File) { }
     *
     * ...
     *
     * const fileTransfer: FileTransferObject = this.transfer.create();
     *
     * // Upload a file:
     * fileTransfer.upload(..).then(..).catch(..);
     *
     * // Download a file:
     * fileTransfer.download(..).then(..).catch(..);
     *
     * // Abort active transfer:
     * fileTransfer.abort();
     *
     * // full example
     * upload() {
     *   let options: FileUploadOptions = {
     *      fileKey: 'file',
     *      fileName: 'name.jpg',
     *      headers: {}
     *      .....
     *   }
     *
     *   fileTransfer.upload('<file path>', '<api endpoint>', options)
     *    .then((data) => {
     *      // success
     *    }, (err) => {
     *      // error
     *    })
     * }
     *
     * download() {
     *   const url = 'http://www.example.com/file.pdf';
     *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
     *     console.log('download complete: ' + entry.toURL());
     *   }, (error) => {
     *     // handle error
     *   });
     * }
     *
     * ```
     *
     * To store files in a different/publicly accessible directory, please refer to the following link
     * https://github.com/apache/cordova-plugin-file#where-to-store-files
     *
     * @interfaces
     * FileUploadOptions
     * FileUploadResult
     * FileTransferError
     * @classes
     * FileTransferObject
     */
    FileTransfer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'FileTransfer',
            plugin: 'cordova-plugin-file-transfer',
            pluginRef: 'FileTransfer',
            repo: 'https://github.com/apache/cordova-plugin-file-transfer',
            platforms: [
                'Amazon Fire OS',
                'Android',
                'Browser',
                'iOS',
                'Ubuntu',
                'Windows',
                'Windows Phone'
            ]
        })
    ], FileTransfer);
    return FileTransfer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

/**
 * @hidden
 */
var FileTransferObject = (function () {
    function FileTransferObject() {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* checkAvailability */])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} [options]  Optional parameters.
     * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    /**
       * Sends a file to a server.
       *
       * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
       * @param {FileUploadOptions} [options]  Optional parameters.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
       */
    FileTransferObject.prototype.upload = /**
       * Sends a file to a server.
       *
       * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
       * @param {FileUploadOptions} [options]  Optional parameters.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
       */
    function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    /**
       * Downloads a file from server.
       *
       * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
       * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
       * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
       */
    FileTransferObject.prototype.download = /**
       * Downloads a file from server.
       *
       * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
       * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
       * @param {boolean} [trustAllHosts]  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
       * @param {object} [Optional] parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
       * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
       */
    function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param {Function} listener Listener that takes a progress event.
     */
    /**
       * Registers a listener that gets called whenever a new chunk of data is transferred.
       * @param {Function} listener Listener that takes a progress event.
       */
    FileTransferObject.prototype.onProgress = /**
       * Registers a listener that gets called whenever a new chunk of data is transferred.
       * @param {Function} listener Listener that takes a progress event.
       */
    function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    /**
       * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
       * object which has an error code of FileTransferError.ABORT_ERR.
       */
    FileTransferObject.prototype.abort = /**
       * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
       * object which has an error code of FileTransferError.ABORT_ERR.
       */
    function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Boolean]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "upload", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean, Object]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "download", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "onProgress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "abort", null);
    /**
     * @hidden
     */
    FileTransferObject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            plugin: 'cordova-plugin-file-transfer',
            pluginName: 'FileTransfer'
        }),
        __metadata("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
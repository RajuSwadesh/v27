webpackJsonp([2],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassifiedPageModule", function() { return EditClassifiedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_classified__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditClassifiedPageModule = /** @class */ (function () {
    function EditClassifiedPageModule() {
    }
    EditClassifiedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_classified__["a" /* EditClassifiedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_classified__["a" /* EditClassifiedPage */]),
            ],
        })
    ], EditClassifiedPageModule);
    return EditClassifiedPageModule;
}());

//# sourceMappingURL=edit-classified.module.js.map

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

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(617);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditClassifiedPage = /** @class */ (function () {
    function EditClassifiedPage(navCtrl, navParams, service, api, alertCtrl, camera, actionSheetController, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.imagePicker = imagePicker;
        this.category_list = [];
        this.product_title = '';
        this.description = '';
        this.stock = '';
        this.product_condition = '';
        this.price = '';
        this.donation_img_length = 1;
        this.multiple_donation_img_length = 6;
        this.pro_cat = '';
        this.category = '';
        this.donation_images = [];
        this.multipleImages = [];
        this.other_images = [];
        this.product_status = '';
        this.featuredImage = '';
        this.details_id = '';
        this.fieldDetails = '';
        this.allImg = [];
        this.chkVal = [];
        this.checkedvalue = '';
        this.selectValue = '';
        this.defaultSelectValue = '';
        this.newExp = '';
        this.name = '';
        this.updateData = [];
        this.editImg = true;
        this.showSingleImg = false;
        this.showMultipleImg = false;
        this.catId = '';
        this.sub_catId = '';
        this.cameraSetting = {
            quality: 30,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.cameraSettingGallery = {
            quality: 30,
            sourceType: 2,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.FormLocation = {
            address: '',
            latitude: '',
            longitude: ''
        };
        this.donation_detail = this.navParams.get('detailId');
        console.log(this.donation_detail);
        this.sub_cat_id = this.navParams.get('cat_id');
        console.log(this.sub_cat_id);
        // console.log(this.sub_cat_id.split(','));
        if (this.sub_catId) {
            if (this.sub_cat_id.split(',')[0] != undefined) {
                this.catId = this.sub_cat_id.split(',')[0];
                console.log(this.catId);
            }
            if (this.sub_cat_id.split(',')[1] != undefined) {
                this.sub_catId = this.sub_cat_id.split(',')[1];
                console.log(this.sub_catId);
            }
        }
    }
    EditClassifiedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var arr1 = [];
        var arr2 = [];
        this.Checkbox = [];
        this.api.GET('/editClassified/' + this.donation_detail).then(function (data) {
            console.log(data);
            if (data.status == 'success') {
                _this.fieldDetails = [];
                _this.fieldDetails = data.data[0].fields;
                console.log(_this.fieldDetails);
                _this.FormLocation.address = data.data[0].address;
                console.log(_this.FormLocation.address);
                _this.FormLocation.latitude = data.data[0].latitude;
                console.log(_this.FormLocation.latitude);
                _this.FormLocation.longitude = data.data[0].longitude;
                console.log(_this.FormLocation.longitude);
                for (var i = 0; i < _this.fieldDetails.length; i++) {
                    console.log(_this.fieldDetails[i].field_details.field_type);
                    if (_this.fieldDetails[i].field_details.field_type == "Checkbox") {
                        var array = _this.fieldDetails[i].field_details.field_values.split(',');
                        console.log(array);
                        for (var j = 0; j < array.length; j++) {
                            arr1.push({
                                field_values: array[j],
                            });
                        }
                        _this.fieldDetails[i].field_details.checkValue = arr1;
                        console.log(_this.fieldDetails[i].field_details.checkValue);
                        _this.checkArr = _this.fieldDetails[i].field_value.split(',');
                        console.log(_this.checkArr);
                        for (var a = 0; a < _this.checkArr.length; a++) {
                            _this.Checkbox.push({
                                check: _this.checkArr[a],
                            });
                        }
                        _this.fieldDetails[i].field_details.checkval = _this.Checkbox;
                        console.log(_this.fieldDetails[i].field_details);
                        console.log(_this.fieldDetails);
                        console.log(_this.Checkbox);
                        console.log(_this.checkArr);
                        console.log(arr1);
                    }
                    else if (_this.fieldDetails[i].field_details.field_type == "Radio") {
                        _this.defaultSelectValue = _this.fieldDetails[i].field_value;
                        console.log(_this.defaultSelectValue);
                        var array1 = _this.fieldDetails[i].field_details.field_values.split(',');
                        console.log(array1);
                        for (var k = 0; k < array1.length; k++) {
                            arr2.push({
                                gender_values: array1[k],
                            });
                        }
                        _this.fieldDetails[i].field_details.genderValue = arr2;
                        console.log(_this.fieldDetails[i].field_details.genderValue);
                    }
                    else if (_this.fieldDetails[i].field_id == "images") {
                        _this.allImg = _this.fieldDetails[i].imageUrl;
                        console.log(_this.allImg);
                        //  for(let k=0;k<this.allImg.length;k++){
                        //    console.log(this.allImg[k]);
                        //    var image_name = this.allImg[k].substring(this.allImg[k].lastIndexOf("/")+1,this.allImg[k].length);
                        //  console.log(image_name.split('.')[1]);
                        //    var fileExt = image_name.split('.')[1];
                        //    console.log(fileExt);
                        //    if(fileExt != undefined){
                        //       console.log("ok");
                        //    }
                        //  }
                    }
                }
            }
        });
        this.initautocomplete();
    };
    EditClassifiedPage.prototype.initautocomplete = function () {
        var base = this;
        setTimeout(function () {
            console.log('--------------------------------------------------------------------------------');
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('GoForm'));
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
    EditClassifiedPage.prototype.getCheck = function (arr, data) {
        console.log("check");
        var x = document.getElementsByClassName("mycheck");
        console.log(x.length);
        var str = '';
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked === true) {
                str += x[i].value + ",";
                console.log(str);
                this.checkedvalue = str.replace(/,\s*$/, "");
                console.log(this.checkedvalue);
            }
        }
    };
    EditClassifiedPage.prototype.getGender = function (arr1) {
        this.selectValue = arr1.gender_values.toString();
        console.log(this.selectValue);
    };
    EditClassifiedPage.prototype.getNumber = function (event) {
        console.log(event);
        if (event.target.value != '') {
            this.newExp = event.target.value;
            console.log(this.newExp);
        }
    };
    EditClassifiedPage.prototype.getName = function (event) {
        console.log(event);
        if (event.target.value == '') {
            this.name = event.target.value;
        }
    };
    EditClassifiedPage.prototype.selectedVal = function (info) {
        var _this = this;
        this.pro_cat = this.category;
        var filtered_data = __WEBPACK_IMPORTED_MODULE_4_underscore__["filter"](this.category_list, function (elem) {
            if (elem.id == _this.category) {
                return elem;
            }
        });
    };
    EditClassifiedPage.prototype.remove = function (id, imgType, imgName) {
        console.log(id);
        console.log(imgType);
        console.log(imgName.substring(imgName.lastIndexOf("/") + 1, imgName.length));
        var image_name = imgName.substring(imgName.lastIndexOf("/") + 1, imgName.length);
        console.log(image_name);
        var base = this;
        if (imgType == 'image') {
            var alert_1 = this.alertCtrl.create({
                message: 'Do you want to delete this image?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'yes',
                        handler: function () {
                            base.api.GET('/deleteClassifiedImage/' + base.donation_detail + '/' + imgType + '/' + imgName).then(function (res) {
                                console.log(res);
                                if (res.status == "success") {
                                    base.service.Success(res.data);
                                    base.ionViewDidLoad();
                                }
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else if (imgType == 'images') {
            var alert_2 = base.alertCtrl.create({
                message: 'Do you want to delete this image?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'yes',
                        handler: function () {
                            base.api.GET('/deleteClassifiedImage/' + base.donation_detail + '/' + imgType + '/' + image_name).then(function (res) {
                                console.log(res);
                                if (res.status == "success") {
                                    base.service.Success(res.data);
                                    base.ionViewDidLoad();
                                }
                            });
                            //   var images = imgName.split(',');
                            //   console.log(images);
                            //   for(let i=0;i<images.length;i++){
                            //     console.log(images[i]);
                            //   base.api.GET('/deleteClassifiedImage/'+base.donation_detail+'/'+imgType+'/'+images[i]).then((res:any)=>{
                            //    console.log(res);
                            //    if(res.status == "success"){
                            //     base.service.Success(res.data);
                            //     base.ionViewDidLoad();
                            //    }
                            //   })
                            // }
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    EditClassifiedPage.prototype.chooseFeatureImage = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            buttons: [{
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log('camera clicked');
                        _this.featureImage(_this.cameraSetting);
                    }
                }, {
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log('gallery clicked');
                        _this.featureImage(_this.cameraSettingGallery);
                    }
                }]
        });
        actionSheet.present();
    };
    EditClassifiedPage.prototype.featureImage = function (options) {
        var base = this;
        base.camera.getPicture(options).then(function (imageData) {
            base.featuredImage = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    EditClassifiedPage.prototype.chooseOtherImage = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            buttons: [{
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log('camera clicked');
                        _this.otherImage(_this.cameraSetting);
                    }
                }, {
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log('gallery clicked');
                        _this.otherImage(_this.cameraSettingGallery);
                    }
                }]
        });
        actionSheet.present();
    };
    EditClassifiedPage.prototype.otherImage = function (options) {
        var base = this;
        base.camera.getPicture(options).then(function (imageData) {
            if (base.donation_images.length >= 6) {
                base.service.Warning('you have cross the maximum limit of image');
            }
            else {
                base.donation_images.push('data:image/jpeg;base64,' + imageData);
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditClassifiedPage.prototype.chooseImage = function () {
        var base = this;
        var options = {
            quality: 20,
            outputType: 1,
            maximumImagesCount: base.donation_img_length
        };
        base.imagePicker.getPictures(options).then(function (results) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                base.base64Img = 'data:image/jpeg;base64,' + (results[i]);
                base.donation_images.push(base.base64Img);
                base.editImg = false;
                base.showSingleImg = true;
                console.log(base.donation_images);
                console.log(base.donation_images.length);
            }
        }, function (err) { console.log(err); });
    };
    EditClassifiedPage.prototype.removeSingleImage = function (index) {
        this.donation_images.splice(index, 1);
        this.donation_img_length = this.donation_img_length + (+1);
    };
    EditClassifiedPage.prototype.chooseImages = function () {
        var base = this;
        var options = {
            quality: 20,
            outputType: 1,
            maximumImagesCount: base.multiple_donation_img_length
        };
        base.imagePicker.getPictures(options).then(function (results) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                base.base64Imges = 'data:image/jpeg;base64,' + (results[i]);
                base.multipleImages.push(base.base64Imges);
                base.editImg = false;
                base.showMultipleImg = true;
                console.log(base.multipleImages);
                console.log(base.multipleImages.length);
            }
        }, function (err) { console.log(err); });
    };
    EditClassifiedPage.prototype.removeMultiImage = function (index) {
        this.multipleImages.splice(index, 1);
        this.multiple_donation_img_length = this.multiple_donation_img_length + (+1);
    };
    EditClassifiedPage.prototype.removeOther = function (index) {
        this.donation_images.splice(index, 1);
        this.donation_img_length = this.donation_img_length + (+1);
    };
    EditClassifiedPage.prototype.donateUpdate = function () {
        var base = this;
        base.updateData = [];
        console.log(base.fieldDetails.length);
        for (var j = 0; j < base.fieldDetails.length; j++) {
            if (base.fieldDetails[j].field_details.field_type == "Text") {
                console.log(base.fieldDetails[j].field_value);
                base.textField = base.fieldDetails[j].field_value;
                if (base.textField == '') {
                    base.service.Warning(base.fieldDetails[j].field_details.name + " field is required!!");
                }
                else {
                    console.log(base.textField);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.textField
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_details.field_type == "Checkbox") {
                //  var chval = (<HTMLInputElement>document.getElementById(base.fieldDetails[j].field_details.name)).checked;
                if (base.checkedvalue == '') {
                    console.log(base.checkArr.toString());
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.checkArr.toString()
                    });
                }
                else {
                    console.log(base.checkedvalue);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.checkedvalue
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_details.field_type == "Radio") {
                if (base.selectValue == '') {
                    console.log(base.defaultSelectValue);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.defaultSelectValue
                    });
                }
                else {
                    console.log(base.selectValue);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.selectValue
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_details.field_type == "Number") {
                console.log(base.fieldDetails[j].field_value);
                base.numberField = base.fieldDetails[j].field_value;
                if (base.numberField == '') {
                    base.service.Warning(base.fieldDetails[j].field_details.name + " field is required!!");
                }
                else {
                    console.log(base.numberField);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.numberField
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_details.field_type == "Date") {
                console.log(base.fieldDetails[j].field_value);
                base.dateField = base.fieldDetails[j].field_value;
                if (base.dateField == '' || base.dateField == undefined) {
                    base.service.Warning(base.fieldDetails[j].field_details.name + " field is required!!");
                }
                else {
                    console.log(base.dateField);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.dateField
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_details.field_type == "Textarea") {
                console.log(base.fieldDetails[j].field_value);
                base.textareaField = base.fieldDetails[j].field_value;
                if (base.textareaField == '') {
                    base.service.Warning(base.fieldDetails[j].field_details.name + " field is required!!");
                }
                else {
                    console.log(base.textareaField);
                    base.updateData.push({
                        id: base.fieldDetails[j].field_details.id,
                        value: base.textareaField
                    });
                    console.log(base.updateData);
                }
            }
            else if (base.fieldDetails[j].field_id == "image") {
                console.log("------image upload ready-----------");
                console.log(base.fieldDetails[j].imageUrl);
                console.log(base.base64Img);
                if (base.base64Img == undefined || base.base64Img == null || base.base64Img == '') {
                    // base.service.Warning(base.fieldDetails[j].name+" is required!!");
                    console.log(base.fieldDetails[j].imageUrl);
                    base.updateData.push({
                        id: 'image',
                        value: base.fieldDetails[j].imageUrl
                    });
                }
                else {
                    base.updateData.push({
                        id: 'image',
                        value: base.base64Img
                    });
                }
            }
            else if (base.fieldDetails[j].field_id == "images") {
                console.log("------multiple image upload ready---------");
                console.log(base.base64Imges);
                if (base.base64Imges == undefined || base.base64Imges == null || base.base64Imges == '') {
                    console.log(base.fieldDetails[j].imageUrl);
                    //  base.service.Warning(base.fieldDetails[j].name+" is required2");
                    base.updateData.push({
                        id: 'images',
                        value: base.fieldDetails[j].imageUrl
                    });
                    //  base.updateData = base.fieldDetails[j].imageUrl;
                }
                else {
                    base.updateData.push({
                        id: 'images',
                        value: base.multipleImages
                    });
                    console.log(base.updateData);
                }
                console.log(base.updateData);
            }
        }
        console.log(base.updateData);
        // if(base.textField != '' && base.checkField != '' && base.numberField != '' && base.textareaField != ''){
        //   console.log(base.updateData);
        //   console.log(base.catId);
        //   console.log(base.sub_catId);
        //   console.log(base.FormLocation);
        //   if(base.catId != undefined && base.sub_catId != undefined){
        //   console.log(base.sub_cat_id);
        //   base.service.LoaderShowmsg("Updating product..");
        //   base.api.POST('/updateClassified/'+base.donation_detail,{in_category:base.sub_cat_id,data:base.updateData,address : base.FormLocation.address,latitude: base.FormLocation.latitude,
        //   longitude:base.FormLocation.longitude}).then((res:any)=>{
        //     console.log(res);
        //     if(res.status == "success"){
        //       base.service.Success(res.data);
        //       base.service.LoaderHide();
        //     }else{
        //       base.service.Warning(res.data);
        //       base.service.LoaderHide();
        //     }
        //   },error=>{
        //     console.log(error);
        //     base.service.Warning("Something went to wrong!!");
        //     base.service.LoaderHide();
        //   })
        // }else{
        //   base.service.LoaderShowmsg("Updating product..");
        //   base.api.POST('/updateClassified/'+base.donation_detail,{in_category:base.catId,data:base.updateData,address : base.FormLocation.address,latitude: base.FormLocation.latitude,
        //   longitude:base.FormLocation.longitude}).then((res:any)=>{
        //     console.log(res);
        //     if(res.status == "success"){
        //       base.service.Success(res.data);
        //       base.service.LoaderHide();
        //     }else{
        //       base.service.Warning(res.data);
        //       base.service.LoaderHide();
        //     }
        //   },error=>{
        //     console.log(error);
        //     base.service.Warning("Something went to wrong!!");
        //     base.service.LoaderHide();
        //   })
        // }
        // }
        console.log(base.textField);
    };
    EditClassifiedPage.prototype.save = function () {
        var _this = this;
        var base = this;
        this.service.LoaderShowmsg('Submitting Product..');
        this.api.POST('/updateClassified/' + this.donation_detail.id, {
            in_category: this.category,
            product_title: this.product_title,
            description: this.description,
            stock: this.stock,
            price: this.price,
            product_condition: this.product_condition,
            status: this.product_status,
            more_images: this.donation_images,
            feature_images: this.featuredImage,
        }).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                _this.api.GET('/editClassified/' + _this.donation_detail.id).then(function (details) {
                    base.donation_detail = details.data;
                    base.other_images = details.data.other_images;
                });
                _this.service.Success(res.data);
            }
        }).catch(function (error) {
            _this.service.Warning('Something went wrong. Try again later');
        });
    };
    EditClassifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-classified',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\edit-classified\edit-classified.html"*/'<ion-header mode="md">\n  <ion-navbar  mode="md" color="primary">\n    <ion-title mode="ios" text-capitalize="">Edit Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <!-- <ion-item>\n      <ion-label floating>Category</ion-label>\n      <ion-select [(ngModel)]="category" (ionChange)="selectedVal(item)">\n        <span *ngFor="let item of category_list">\n            <ion-option  value="{{item.id}}">\n              {{item.name}}\n            </ion-option>\n              <ion-option *ngFor="let item2 of item.subCategories" value="{{item.id+\',\'+item2.id}}">\n                &nbsp; &nbsp; - - {{item2.name}}\n              </ion-option>\n        </span>\n      </ion-select>\n    </ion-item> -->\n\n    <div class="custom" *ngFor="let subfield of fieldDetails;let j=index">\n      <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Text\'">\n       <label>{{subfield.field_details.label}}</label>\n       <ion-input type="{{subfield.field_details.field_type}}" [(ngModel)]="subfield.field_value"></ion-input>\n      </div>\n\n      <div *ngIf="subfield.field_details.field_type == \'Checkbox\'" class="input_fields">\n        <b>{{subfield.field_details.label}}</b>\n           <div class="item" *ngFor="let arr of subfield.field_details.checkValue;let i=index" (click)="getCheck(arr,subfield.field_details)">\n             <label> <span>{{arr.field_values}}</span>\n             <input class="mycheck" *ngIf="arr.field_values == checkArr[i]" type="checkbox" checked name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" value="{{arr.field_values}}">\n             <input class="mycheck" *ngIf="arr.field_values != checkArr[i]" type="checkbox" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" value="{{arr.field_values}}">\n            </label>\n           </div>\n      </div>\n\n      <!-- <div>\n        <input type="checkbox" name="ll" value="gh"> \n        <input type="checkbox" name="ll" value="hh"> \n      </div> -->\n\n      <div *ngIf="subfield.field_details.field_type == \'Radio\'" class="input_fields">\n        <b>{{subfield.field_details.label}}</b>\n           <div class="item" *ngFor="let arr1 of subfield.field_details.genderValue;" (change)="getGender(arr1)">\n             <label> <span>{{arr1.gender_values}}</span>\n             <input *ngIf="arr1.gender_values == subfield.field_value" checked type="radio" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="arr1.gender_values">\n             <input *ngIf="arr1.gender_values != subfield.field_value" type="radio" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="arr1.gender_values">\n            </label>\n           </div>\n      </div>\n\n      <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Number\'">\n        <label>{{subfield.field_details.label}}</label>\n        <ion-input type="{{subfield.field_details.field_type}}" [(ngModel)]="subfield.field_value"></ion-input>\n       </div>\n\n       <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Date\'">\n        <label>{{subfield.field_details.label}}</label>\n        <ion-input type="{{subfield.field_details.field_type}}" [(ngModel)]="subfield.field_value"></ion-input>\n       </div>\n\n       <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Textarea\'">\n        <label>{{subfield.field_details.label}}</label>\n        <ion-textarea [(ngModel)]="subfield.field_value" class="txtarea"></ion-textarea>\n       </div>\n\n      <ion-item no-lines *ngIf="subfield.field_id == \'image\'">\n        <span item-start>Choose Image <span style="color:grey;font-size:13px;"></span></span><span item-end class="cam" (click)="chooseImage()" *ngIf="donation_img_length>0"><ion-icon name="camera"></ion-icon></span><br/>\n      </ion-item>\n\n      <ion-row *ngIf="editImg">\n        <ion-col col-4 *ngIf="subfield.field_id == \'image\' && subfield.imageUrl != false">\n          <div class="container">\n            <img [src]="subfield.imageUrl"/>\n            <div class="top-right" (click)="remove(i,subfield.field_id,subfield.field_value)"><ion-icon name="close"></ion-icon></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-item no-lines *ngIf="subfield.field_id == \'images\'">\n        <span item-start>Choose Images <span style="color:grey;font-size:13px;"></span></span><span item-end class="cam" (click)="chooseImages()" *ngIf="donation_img_length>0"><ion-icon name="camera"></ion-icon></span><br/>\n      </ion-item>\n\n      <ion-row *ngIf="subfield.field_id == \'images\' && subfield.imageUrl != false">\n        <ion-col col-4 *ngFor="let img of allImg">\n          <div class="container">\n            <img [src]="img"/>\n            <div class="top-right" (click)="remove(i,subfield.field_id,img)"><ion-icon name="close"></ion-icon></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n      <ion-row *ngIf="showSingleImg">\n        <ion-col col-4 *ngFor="let item of donation_images;let i=index">\n          <div class="container">\n            <img style="width:100%;height:112px;" [src]="item"/>\n            <div class="top-right" (click)="removeSingleImage(i)"><ion-icon name="close"></ion-icon></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="showMultipleImg">\n        <ion-col col-4 *ngFor="let item2 of multipleImages;let i=index">\n          <div class="container">\n            <img style="width:100%;height:112px;" [src]="item2"/>\n            <div class="top-right" (click)="removeMultiImage(i)"><ion-icon name="close"></ion-icon></div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class="custom" style="margin-top:17px;" >\n        <div class="subcustom" >\n        <label>Enter address</label>\n        <input type="text" id="GoForm"  placeholder="enter address...." [(ngModel)]="FormLocation.address">\n        </div>\n        </div>\n    <button *ngIf="product_status !=\'Blocked\' " ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s" (tap)="donateUpdate()">Submit</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\edit-classified\edit-classified.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], EditClassifiedPage);
    return EditClassifiedPage;
}());

//# sourceMappingURL=edit-classified.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
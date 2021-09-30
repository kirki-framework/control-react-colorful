// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jAg0Z":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"kZ1Z6"}],"kZ1Z6":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"gFI7c"}],"gFI7c":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"ecPDr":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "0ec47630371e291a";
module.bundle.HMR_BUNDLE_ID = "2a4e2d0c02cb4d06";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7Y5mU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/* global wp */ var _controlScss = require("./control.scss");
var _kirkiReactColorfulControl = require("./KirkiReactColorfulControl"); // Register control type with Customizer.
var _kirkiReactColorfulControlDefault = parcelHelpers.interopDefault(_kirkiReactColorfulControl);
wp.customize.controlConstructor['kirki-react-colorful'] = _kirkiReactColorfulControlDefault.default;

},{"./control.scss":"3avPQ","./KirkiReactColorfulControl":"jVwOZ","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3avPQ":[function() {},{}],"jVwOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _kirkiReactColorfulForm = require("./KirkiReactColorfulForm");
var _kirkiReactColorfulFormDefault = parcelHelpers.interopDefault(_kirkiReactColorfulForm);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
/**
 * KirkiReactColorfulControl.
 *
 * @class
 * @augments wp.customize.Control
 * @augments wp.customize.Class
 */ var KirkiReactColorfulControl = wp.customize.Control.extend({
    /**
   * Initialize.
   *
   * @param {string} id - Control ID.
   * @param {object} params - Control params.
   */ initialize: function initialize(id, params) {
        var control = this; // Bind functions to this control context for passing as React props.
        control.setNotificationContainer = control.setNotificationContainer.bind(control);
        wp.customize.Control.prototype.initialize.call(control, id, params); // The following should be eliminated with <https://core.trac.wordpress.org/ticket/31334>.
        function onRemoved(removedControl) {
            if (control === removedControl) {
                control.destroy();
                control.container.remove();
                wp.customize.control.unbind('removed', onRemoved);
            }
        }
        wp.customize.control.bind('removed', onRemoved);
    },
    /**
   * Set notification container and render.
   *
   * This is called when the React component is mounted.
   *
   * @param {Element} element - Notification container.
   * @returns {void}
   */ setNotificationContainer: function setNotificationContainer(element) {
        var control = this;
        control.notifications.container = jQuery(element);
        control.notifications.render();
    },
    /**
   * Render the control into the DOM.
   *
   * This is called from the Control#embed() method in the parent class.
   *
   * @returns {void}
   */ renderContent: function renderContent() {
        var control = this;
        var useHueMode = 'hue' === control.params.mode;
        var choices = control.params.choices;
        var pickerComponent;
        if (choices.formComponent) // The "save_as" choice is ignored if formComponent is specified.
        pickerComponent = choices.formComponent;
        else {
            pickerComponent = choices.alpha ? 'RgbaStringColorPicker' : 'HexColorPicker'; // The "save_as" choice is ignored for HexColorPicker.
            if (choices.saveAs && 'array' === choices.saveAs && choices.alpha) pickerComponent = 'RgbaColorPicker';
        }
        pickerComponent = useHueMode ? 'HueColorPicker' : pickerComponent;
        var form = /*#__PURE__*/ React.createElement(_kirkiReactColorfulFormDefault.default, _extends({
        }, control.params, {
            control: control,
            customizerSetting: control.setting,
            useHueMode: useHueMode,
            pickerComponent: pickerComponent,
            value: control.params.value,
            setNotificationContainer: control.setNotificationContainer
        }));
        _reactDomDefault.default.render(form, control.container[0]);
    },
    /**
   * After control has been first rendered, start re-rendering when setting changes.
   *
   * React is able to be used here instead of the wp.customize.Element abstraction.
   *
   * @returns {void}
   */ ready: function ready() {
        var control = this;
        /**
     * Update component state when customizer setting changes.
     *
     * There was an issue (which was fixed):
     *
     * Let's say we have other color picker ("x" color picker) and this current color picker ("y" color picker).
     * Let's say there's a script that bind to that "x" color picker to make change to this "y" color picker.
     *
     * When "x" color picker is changed fast (by dragging the color, for example),
     * then the re-render of this "y" color picker will be messy.
     * There was something like "function-call race" between component re-render and function call inside the component.
     *
     * When that happens, the "x" color picker becomes unresponsive and un-usable.
     *
     * How we fixed that:
     * - Provide a updateComponentState property to this file.
     * - Inside the component, assign the updateComponentState with a function to update some states.
     * - Then inside the binding below, call updateComponentState instead of re-rendering the component.
     *
     * The result: Even though the "x" color picker becomes very slow, it's still usable and responsive enough.
     */ control.setting.bind(function(val) {
            control.updateComponentState(val);
        });
    },
    updateComponentState: function() {
    },
    /**
   * Handle removal/de-registration of the control.
   *
   * This is essentially the inverse of the Control#embed() method.
   *
   * @link https://core.trac.wordpress.org/ticket/31334
   * @returns {void}
   */ destroy: function destroy() {
        var control = this; // Garbage collection: undo mounting that was done in the embed/renderContent method.
        _reactDomDefault.default.unmountComponentAtNode(control.container[0]); // Call destroy method in parent if it exists (as of #31334).
        if (wp.customize.Control.prototype.destroy) wp.customize.Control.prototype.destroy.call(control);
    }
});
exports.default = KirkiReactColorfulControl;

},{"react-dom":"ilX9M","./KirkiReactColorfulForm":"bpSMF","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"ilX9M":[function(require,module,exports) {
module.exports = ReactDOM;

},{}],"bpSMF":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$becb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$becb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _react = require("react");
var _reactColorful = require("react-colorful");
var _kirkiReactColorfulButton = require("./js/components/KirkiReactColorfulButton");
var _kirkiReactColorfulButtonDefault = parcelHelpers.interopDefault(_kirkiReactColorfulButton);
var _kirkiReactColorfulInput = require("./js/components/KirkiReactColorfulInput");
var _kirkiReactColorfulInputDefault = parcelHelpers.interopDefault(_kirkiReactColorfulInput);
var _kirkiReactColorfulSwatches = require("./js/components/KirkiReactColorfulSwatches");
var _kirkiReactColorfulSwatchesDefault = parcelHelpers.interopDefault(_kirkiReactColorfulSwatches);
var _convertColorForPicker = require("./js/utils/convertColorForPicker");
var _convertColorForPickerDefault = parcelHelpers.interopDefault(_convertColorForPicker);
var _convertColorForCustomizer = require("./js/utils/convertColorForCustomizer");
var _convertColorForCustomizerDefault = parcelHelpers.interopDefault(_convertColorForCustomizer);
var _convertColorForInput = require("./js/utils/convertColorForInput");
var _convertColorForInputDefault = parcelHelpers.interopDefault(_convertColorForInput);
var _useClickOutside = require("./js/hooks/useClickOutside");
var _useClickOutsideDefault = parcelHelpers.interopDefault(_useClickOutside);
var _useFocusOutside = require("./js/hooks/useFocusOutside");
var _useFocusOutsideDefault = parcelHelpers.interopDefault(_useFocusOutside);
var _s = $RefreshSig$();
/**
 * The form component of Kirki React Colorful.
 *
 * Globals:
 * _, wp, React, ReactDOM
 *
 * @param {Object} props The props for the component.
 * @returns The component element.
 */ var KirkiReactColorfulForm = function(props) {
    _s();
    var control = props.control, customizerSetting = props.customizerSetting, useHueMode = props.useHueMode, pickerComponent = props.pickerComponent, choices = props.choices;
    var parseEmptyValue = function() {
        return useHueMode ? 0 : '#000000';
    };
    var parseHueModeValue = function(hueValue) {
        hueValue = hueValue || parseEmptyValue();
        hueValue = hueValue < 0 ? 0 : hueValue;
        return hueValue > 360 ? 360 : hueValue;
    };
    var parseInputValue = function(value) {
        if ('' === value) return '';
        return useHueMode ? parseHueModeValue(value) : _convertColorForInputDefault.default(value, pickerComponent, choices.formComponent);
    };
    var parseCustomizerValue = function(value) {
        if ('' === value) return '';
        return _convertColorForCustomizerDefault.default(value, pickerComponent, choices.formComponent);
    };
    var parsePickerValue = function(value) {
        value = value || parseEmptyValue(); // Hard coded saturation and lightness when using hue mode.
        return useHueMode ? {
            h: value,
            s: 100,
            l: 50
        } : _convertColorForPickerDefault.default(value, pickerComponent);
    };
    var ref = _helpers.slicedToArray(_react.useState(function() {
        return parseInputValue(props.value);
    }), 2), inputValue = ref[0], setInputValue = ref[1];
    var ref1 = _helpers.slicedToArray(_react.useState(function() {
        return parsePickerValue(props.value);
    }), 2), pickerValue = ref1[0], setPickerValue = ref1[1];
    var currentInputValue = inputValue;
    var currentPickerValue = pickerValue; // This function will be called when this control's customizer value is changed.
    control.updateComponentState = function(value) {
        var valueForInput = parseInputValue(value);
        var changeInputValue = false;
        if (typeof valueForInput === 'string' || useHueMode) changeInputValue = valueForInput !== inputValue;
        else changeInputValue = JSON.stringify(valueForInput) !== JSON.stringify(currentInputValue);
        if (changeInputValue) setInputValue(valueForInput);
        var valueForPicker = parsePickerValue(value);
        var changePickerValue = false;
        if (typeof valueForPicker === 'string' || useHueMode) changePickerValue = valueForPicker !== pickerValue;
        else changePickerValue = JSON.stringify(valueForPicker) !== JSON.stringify(currentPickerValue);
        if (changePickerValue) setPickerValue(valueForPicker);
    };
    var saveToCustomizer = function(value) {
        if (useHueMode) {
            /**
       * When using hue mode, the pickerComponent is HslColorPicker.
       * If there is value.h, then value is set from the picker.
       * Otherwise, value is set from the input or the customizer.
       */ value = value.h ? value.h : value;
            value = parseHueModeValue(value);
        } else value = parseCustomizerValue(value);
        customizerSetting.set(value);
    };
    /**
   * Function to run on picker change.
   *
   * @param {string|Object} color The value returned by the picker. It can be a string or a color object.
   */ var handlePickerChange = function(color) {
        if (props.onChange) props.onChange(color);
        currentPickerValue = color;
        saveToCustomizer(color);
    };
    var handleInputChange = function(value) {
        currentInputValue = value;
        saveToCustomizer(value);
    };
    var handleReset = function(value) {
        if (!value) {
            currentInputValue = '';
            currentPickerValue = '';
        }
        saveToCustomizer(value);
    };
    /**
   * Function to run on swatches click.
   *
   * @param {string} swatchColor The value from the clicked color swatch.
   */ var handleSwatchesClick = function(swatchColor) {
        saveToCustomizer(swatchColor);
    };
    var controlLabel = /*#__PURE__*/ React.createElement("span", {
        className: "customize-control-title",
        dangerouslySetInnerHTML: {
            __html: props.label
        }
    });
    var controlDescription = /*#__PURE__*/ React.createElement("span", {
        className: "description customize-control-description",
        dangerouslySetInnerHTML: {
            __html: props.description
        }
    });
    var controlNotifications = /*#__PURE__*/ React.createElement("div", {
        className: "customize-control-notifications-container",
        ref: props.setNotificationContainer
    });
    controlLabel = /*#__PURE__*/ React.createElement("label", {
        className: "kirki-control-label"
    }, props.label ? controlLabel : '', props.description ? controlDescription : '');
    var formRef = _react.useRef(null); // Reference to the form div.
    var inputRef = _react.useRef(null); // Reference to the form input.
    var pickerRef = _react.useRef(null); // Reference to the picker popup.
    var ref2 = _helpers.slicedToArray(_react.useState(''), 2), widthManipulatedClass = ref2[0], setWidthManipulatedClass = ref2[1];
    var ref3 = _helpers.slicedToArray(_react.useState(false), 2), isPickerOpen = ref3[0], setIsPickerOpen = ref3[1];
    var togglePicker = function() {
        if (isPickerOpen) closePicker();
        else openPicker();
    };
    var openPicker = function() {
        if (!isPickerOpen) {
            if (control.container[0].clientWidth < 250) {
                pickerRef.current.style.width = control.container[0].parentNode.firstElementChild.clientWidth + 'px';
                if ('picker-width-manipulated' !== widthManipulatedClass) setWidthManipulatedClass('picker-width-manipulated');
                if (choices.is_right_sided) {
                    var padding = window.getComputedStyle(control.container[0].parentNode).getPropertyValue('padding-left');
                    var number = parseInt(padding, 10);
                    var unit = padding.replace(number, '');
                    padding = number / 2;
                    padding += unit;
                    pickerRef.current.style.left = 'calc(-100% - ' + padding + ')';
                }
            } else {
                if ('' !== widthManipulatedClass) setWidthManipulatedClass('');
                pickerRef.current.removeAttribute('style');
            }
            setIsPickerOpen(true);
        }
    };
    var closePicker = function() {
        if (isPickerOpen) setIsPickerOpen(false);
    };
    var KirkiPickerComponent; // We can't just render `pickerComponent` directly, we need these lines so that the compiler will import them.
    switch(pickerComponent){
        case 'HexColorPicker':
            KirkiPickerComponent = _reactColorful.HexColorPicker;
            break;
        case 'RgbColorPicker':
            KirkiPickerComponent = _reactColorful.RgbColorPicker;
            break;
        case 'RgbStringColorPicker':
            KirkiPickerComponent = _reactColorful.RgbStringColorPicker;
            break;
        case 'RgbaColorPicker':
            KirkiPickerComponent = _reactColorful.RgbaColorPicker;
            break;
        case 'RgbaStringColorPicker':
            KirkiPickerComponent = _reactColorful.RgbaStringColorPicker;
            break;
        // We treat HueColorPicker (hue mode) as HslColorPicker.
        case 'HueColorPicker':
            KirkiPickerComponent = _reactColorful.HslColorPicker;
            break;
        case 'HslColorPicker':
            KirkiPickerComponent = _reactColorful.HslColorPicker;
            break;
        case 'HslStringColorPicker':
            KirkiPickerComponent = _reactColorful.HslStringColorPicker;
            break;
        case 'HslaColorPicker':
            KirkiPickerComponent = _reactColorful.HslaColorPicker;
            break;
        case 'HslaStringColorPicker':
            KirkiPickerComponent = _reactColorful.HslaStringColorPicker;
            break;
        case 'HsvColorPicker':
            KirkiPickerComponent = _reactColorful.HsvColorPicker;
            break;
        case 'HsvStringColorPicker':
            KirkiPickerComponent = _reactColorful.HsvStringColorPicker;
            break;
        case 'HsvaColorPicker':
            KirkiPickerComponent = _reactColorful.HsvaColorPicker;
            break;
        case 'HsvaStringColorPicker':
            KirkiPickerComponent = _reactColorful.HsvaStringColorPicker;
            break;
        default:
            KirkiPickerComponent = _reactColorful.HexColorPicker;
            break;
    }
    var formClassName = useHueMode ? 'kirki-control-form use-hue-mode' : 'kirki-control-form';
    formClassName += ' use-' + choices.triggerStyle + '-trigger ' + widthManipulatedClass;
    formClassName += choices.is_right_sided ? ' picker-is-right-sided' : ''; // Handle outside focus to close the picker popup.
    _useFocusOutsideDefault.default(formRef, closePicker); // Handle outside click to close the picker popup.
    _useClickOutsideDefault.default(inputRef, pickerRef, closePicker);
    if (jQuery.wp && jQuery.wp.wpColorPicker) {
        var wpColorPickerSwatches = jQuery.wp.wpColorPicker.prototype.options.palettes; // If 3rd parties applied custom colors to wpColorPicker swatches, let's use them.
        if (Array.isArray(wpColorPickerSwatches)) {
            if (wpColorPickerSwatches.length < 8) for(var i = wpColorPickerSwatches.length; i <= 8; i++)wpColorPickerSwatches.push(choices.swatches[i]);
            choices.swatches = wpColorPickerSwatches;
        }
    }
    var formInput = /*#__PURE__*/ React.createElement(_kirkiReactColorfulInputDefault.default, {
        pickerComponent: pickerComponent,
        inputRef: inputRef,
        useHueMode: useHueMode,
        color: inputValue,
        initialColor: props.value,
        triggerStyle: choices.triggerStyle,
        isPickerOpen: isPickerOpen,
        togglePickerHandler: togglePicker,
        openPickerHandler: openPicker,
        onChange: handleInputChange,
        onReset: handleReset
    });
    var formButton = '';
    if ('button' === choices.triggerStyle) formButton = /*#__PURE__*/ React.createElement(_kirkiReactColorfulButtonDefault.default, {
        pickerComponent: pickerComponent,
        useHueMode: useHueMode,
        buttonText: choices.buttonText,
        color: inputValue,
        initialColor: props.value,
        isPickerOpen: isPickerOpen,
        togglePickerHandler: togglePicker,
        onReset: handleReset
    });
    return(/*#__PURE__*/ React.createElement("div", {
        className: formClassName,
        ref: formRef,
        tabIndex: "1"
    }, props.label || props.description ? controlLabel : '', controlNotifications, 'button' === choices.triggerStyle ? formButton : formInput, /*#__PURE__*/ React.createElement("div", {
        ref: pickerRef,
        className: isPickerOpen ? pickerComponent + ' colorPickerContainer is-open' : pickerComponent + ' colorPickerContainer'
    }, !useHueMode && /*#__PURE__*/ React.createElement(_kirkiReactColorfulSwatchesDefault.default, {
        colors: choices.swatches,
        onClick: handleSwatchesClick
    }), /*#__PURE__*/ React.createElement(KirkiPickerComponent, {
        color: pickerValue,
        onChange: handlePickerChange
    }), 'button' === choices.triggerStyle ? formInput : '')));
};
_s(KirkiReactColorfulForm, "brWDSgrSiGFuxsItAagWuHx4Hb0=", false, function() {
    return [_useFocusOutsideDefault.default, _useClickOutsideDefault.default];
});
_c = KirkiReactColorfulForm;
exports.default = KirkiReactColorfulForm;
var _c;
$RefreshReg$(_c, "KirkiReactColorfulForm");

  $parcel$ReactRefreshHelpers$becb.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@swc/helpers":"fw9mb","react":"bE4sN","react-colorful":"J7dxw","./js/components/KirkiReactColorfulButton":"aAj3m","./js/components/KirkiReactColorfulInput":"6kfiY","./js/components/KirkiReactColorfulSwatches":"kMyrp","./js/utils/convertColorForPicker":"6Ldvf","./js/utils/convertColorForCustomizer":"3tQvJ","./js/utils/convertColorForInput":"hudza","./js/hooks/useClickOutside":"3U1UY","./js/hooks/useFocusOutside":"3m4sU","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1KDe"}],"fw9mb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);

},{"./_apply_decorated_descriptor":"lfXlB","./_array_with_holes":"4bPjv","./_array_without_holes":"iondU","./_assert_this_initialized":"kUyb2","./_async_generator":"hendw","./_async_generator_delegate":"5GhYz","./_async_iterator":"cJf2z","./_async_to_generator":"3oC7B","./_await_async_generator":"5OrZN","./_await_value":"9K3QG","./_class_call_check":"l65ID","./_class_name_tdz_error":"fraHo","./_class_private_field_get":"c1Xv7","./_class_private_field_loose_base":"3N2W9","./_class_private_field_set":"93MOC","./_class_private_method_get":"6uRdf","./_class_private_method_set":"lBWOR","./_class_static_private_field_spec_get":"bKX7D","./_class_static_private_field_spec_set":"14P2S","./_construct":"kITdI","./_create_class":"87aUT","./_decorate":"4LjN9","./_defaults":"dEpp1","./_define_enumerable_properties":"fOq1m","./_define_property":"63lzi","./_extends":"cDXfG","./_get":"kLvQz","./_get_prototype_of":"gYdhY","./_inherits":"iUa9b","./_inherits_loose":"bXGPP","./_initializer_define_property":"blDCs","./_initializer_warning_helper":"1wFgn","./_instanceof":"5qkn9","./_interop_require_default":"9Dkex","./_interop_require_wildcard":"6L2fb","./_is_native_function":"1lChi","./_iterable_to_array":"6TjaF","./_iterable_to_array_limit":"l9ohl","./_iterable_to_array_limit_loose":"fJTPN","./_jsx":"cgH9z","./_new_arrow_check":"kWAHZ","./_non_iterable_rest":"fW4Zj","./_non_iterable_spread":"3VWOU","./_object_spread":"6u00B","./_object_without_properties":"9TPKd","./_object_without_properties_loose":"ly94u","./_possible_constructor_return":"6EFRu","./_read_only_error":"jLs6m","./_set":"bHz5n","./_set_prototype_of":"3QEan","./_skip_first_generator_next":"f4W1z","./_sliced_to_array":"afwXB","./_sliced_to_array_loose":"MXuPk","./_super_prop_base":"7Qc8A","./_tagged_template_literal":"kaFDN","./_tagged_template_literal_loose":"6Q47B","./_throw":"bU4YJ","./_to_array":"2QxEV","./_to_consumable_array":"4HrUM","./_to_primitive":"9205g","./_to_property_key":"iz6DG","./_type_of":"3RJph","./_wrap_async_generator":"8TRim","./_wrap_native_super":"4RJ2k","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"lfXlB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ('value' in desc || desc.initializer) desc.writable = true;
    desc = decorators.slice().reverse().reduce(function(desc1, decorator) {
        return decorator ? decorator(target, property, desc1) || desc1 : desc1;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    if (desc.initializer === void 0) {
        Object["defineProperty"](target, property, desc);
        desc = null;
    }
    return desc;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bdniN":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4bPjv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"iondU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"kUyb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"hendw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg1) {
                if (wrappedAwait) {
                    resume("next", arg1);
                    return;
                }
                settle(result.done ? "return" : "normal", arg1);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"9K3QG","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"9K3QG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"5GhYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"cJf2z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3oC7B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"5OrZN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"9K3QG","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"l65ID":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"fraHo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"c1Xv7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3N2W9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"93MOC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6uRdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"lBWOR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bKX7D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"14P2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"kITdI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct1(Parent1, args1, Class1) {
        var a = [
            null
        ];
        a.push.apply(a, args1);
        var Constructor = Function.bind.apply(Parent1, a);
        var instance = new Constructor();
        if (Class1) _setPrototypeOf(instance, Class1.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"87aUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
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
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"4LjN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement1(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other;
        if (element.kind === "method" && (other = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras(decorators[i](elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor(decorators[i](obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = finishers[i](constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"2QxEV","./_to_property_key":"iz6DG","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"2QxEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"4bPjv","./_iterable_to_array":"6TjaF","./_non_iterable_rest":"fW4Zj","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6TjaF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"fW4Zj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"iz6DG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"3RJph","./_to_primitive":"9205g","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3RJph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"9205g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"3RJph","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"dEpp1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"fOq1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"63lzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"cDXfG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"kLvQz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get1(target1, property1, receiver1) {
        var base = _superPropBaseDefault.default(target1, property1);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property1);
        if (desc.get) return desc.get.call(receiver1 || target1);
        return desc.value;
    };
    return get(target, property, receiver);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"7Qc8A","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"7Qc8A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"gYdhY","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"gYdhY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return getPrototypeOf(o);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"iUa9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"3QEan","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3QEan":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o, p) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return setPrototypeOf(o, p);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bXGPP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"blDCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"1wFgn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"5qkn9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"9Dkex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6L2fb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"1lChi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"l9ohl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"fJTPN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"cgH9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"kWAHZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3VWOU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6u00B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"63lzi","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"9TPKd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"ly94u","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"ly94u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6EFRu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"kUyb2","./_type_of":"3RJph","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"jLs6m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bHz5n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set1(target1, property1, value1, receiver1) {
        var base = _superPropBaseDefault.default(target1, property1);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property1);
            if (desc.set) {
                desc.set.call(receiver1, value1);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver1, property1);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value1;
            Object.defineProperty(receiver1, property1, desc);
        } else _definePropertyDefault.default(receiver1, property1, value1);
        return true;
    };
    return set(target, property, value, receiver);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"63lzi","./_super_prop_base":"7Qc8A","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"f4W1z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"afwXB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"4bPjv","./_iterable_to_array":"6TjaF","./_non_iterable_rest":"fW4Zj","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"MXuPk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"4bPjv","./_iterable_to_array_limit_loose":"fJTPN","./_non_iterable_rest":"fW4Zj","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"kaFDN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6Q47B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bU4YJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"4HrUM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"iondU","./_iterable_to_array":"6TjaF","./_non_iterable_spread":"3VWOU","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"8TRim":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"hendw","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"4RJ2k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper1(Class1) {
        if (Class1 === null || !_isNativeFunctionDefault.default(Class1)) return Class1;
        if (typeof Class1 !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class1)) return _cache.get(Class1);
            _cache.set(Class1, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class1, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class1.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class1);
    };
    return wrapNativeSuper(Class);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"kITdI","./_is_native_function":"1lChi","./_get_prototype_of":"gYdhY","./_set_prototype_of":"3QEan","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"bE4sN":[function(require,module,exports) {
module.exports = React;

},{}],"J7dxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HexColorInput", ()=>Me
);
parcelHelpers.export(exports, "HexColorPicker", ()=>J
);
parcelHelpers.export(exports, "HslColorPicker", ()=>te
);
parcelHelpers.export(exports, "HslStringColorPicker", ()=>ne
);
parcelHelpers.export(exports, "HslaColorPicker", ()=>W
);
parcelHelpers.export(exports, "HslaStringColorPicker", ()=>ee
);
parcelHelpers.export(exports, "HsvColorPicker", ()=>ie
);
parcelHelpers.export(exports, "HsvStringColorPicker", ()=>ve
);
parcelHelpers.export(exports, "HsvaColorPicker", ()=>le
);
parcelHelpers.export(exports, "HsvaStringColorPicker", ()=>ce
);
parcelHelpers.export(exports, "RgbColorPicker", ()=>be
);
parcelHelpers.export(exports, "RgbStringColorPicker", ()=>xe
);
parcelHelpers.export(exports, "RgbaColorPicker", ()=>he
);
parcelHelpers.export(exports, "RgbaStringColorPicker", ()=>ge
);
parcelHelpers.export(exports, "setNonce", ()=>Y
);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function u() {
    return (u = Object.assign || function(e) {
        for(var r = 1; r < arguments.length; r++){
            var t = arguments[r];
            for(var o in t)Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
        return e;
    }).apply(this, arguments);
}
function c(e, r) {
    if (null == e) return {
    };
    var t, o, n = {
    }, a = Object.keys(e);
    for(o = 0; o < a.length; o++)r.indexOf(t = a[o]) >= 0 || (n[t] = e[t]);
    return n;
}
function s(e) {
    var t = _react.useRef(e), o = _react.useRef(function(e1) {
        t.current && t.current(e1);
    });
    return t.current = e, o.current;
}
var i = function(e, r, t) {
    return (void 0) === r && (r = 0), (void 0) === t && (t = 1), e > t ? t : e < r ? r : e;
}, f = function(e) {
    return "touches" in e;
}, v = function(e, r) {
    var t = e.getBoundingClientRect(), o = f(r) ? r.touches[0] : r;
    return {
        left: i((o.pageX - (t.left + window.pageXOffset)) / t.width),
        top: i((o.pageY - (t.top + window.pageYOffset)) / t.height)
    };
}, d = function(e) {
    !f(e) && e.preventDefault();
}, h = _reactDefault.default.memo(function(n) {
    var a = n.onMove, l = n.onKey, i1 = c(n, [
        "onMove",
        "onKey"
    ]), h1 = _react.useRef(null), m = s(a), g = s(l), p = _react.useRef(!1), b = _react.useMemo(function() {
        var e = function(e1) {
            d(e1), (f(e1) ? e1.touches.length > 0 : e1.buttons > 0) && h1.current ? m(v(h1.current, e1)) : t(!1);
        }, r = function() {
            return t(!1);
        };
        function t(t1) {
            var o = p.current, n1 = t1 ? self.addEventListener : self.removeEventListener;
            n1(o ? "touchmove" : "mousemove", e), n1(o ? "touchend" : "mouseup", r);
        }
        return [
            function(e1) {
                var r1 = e1.nativeEvent, o = h1.current;
                o && (d(r1), !function(e2, r2) {
                    return r2 && !f(e2);
                }(r1, p.current) && o && (p.current = f(r1), o.focus(), m(v(o, r1)), t(!0)));
            },
            function(e1) {
                var r1 = e1.which || e1.keyCode;
                r1 < 37 || r1 > 40 || (e1.preventDefault(), g({
                    left: 39 === r1 ? 0.05 : 37 === r1 ? -0.05 : 0,
                    top: 40 === r1 ? 0.05 : 38 === r1 ? -0.05 : 0
                }));
            },
            t
        ];
    }, [
        g,
        m
    ]), _ = b[0], x = b[1], C = b[2];
    return _react.useEffect(function() {
        return C;
    }, [
        C
    ]), _reactDefault.default.createElement("div", u({
    }, i1, {
        onTouchStart: _,
        onMouseDown: _,
        className: "react-colorful__interactive",
        ref: h1,
        onKeyDown: x,
        tabIndex: 0,
        role: "slider"
    }));
}), m = function(e) {
    return e.filter(Boolean).join(" ");
}, g = function(r) {
    var t = r.color, o = r.left, n = r.top, a = (void 0) === n ? 0.5 : n, l = m([
        "react-colorful__pointer",
        r.className
    ]);
    return _reactDefault.default.createElement("div", {
        className: l,
        style: {
            top: 100 * a + "%",
            left: 100 * o + "%"
        }
    }, _reactDefault.default.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
            backgroundColor: t
        }
    }));
}, p = function(e, r, t) {
    return (void 0) === r && (r = 0), (void 0) === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, b = {
    grad: 0.9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}, _ = function(e) {
    return "#" === e[0] && (e = e.substr(1)), e.length < 6 ? {
        r: parseInt(e[0] + e[0], 16),
        g: parseInt(e[1] + e[1], 16),
        b: parseInt(e[2] + e[2], 16),
        a: 1
    } : {
        r: parseInt(e.substr(0, 2), 16),
        g: parseInt(e.substr(2, 2), 16),
        b: parseInt(e.substr(4, 2), 16),
        a: 1
    };
}, x = function(e, r) {
    return (void 0) === r && (r = "deg"), Number(e) * (b[r] || 1);
}, C = function(e) {
    var r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? H({
        h: x(r[1], r[2]),
        s: Number(r[3]),
        l: Number(r[4]),
        a: (void 0) === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, E = C, H = function(e) {
    var r = e.s, t = e.l;
    return {
        h: e.h,
        s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0,
        v: t + r,
        a: e.a
    };
}, M = function(e) {
    var r = e.s, t = e.v, o = e.a, n = (200 - r) * t / 100;
    return {
        h: p(e.h),
        s: p(n > 0 && n < 200 ? r * t / 100 / (n <= 100 ? n : 200 - n) * 100 : 0),
        l: p(n / 2),
        a: p(o, 2)
    };
}, N = function(e) {
    var r = M(e);
    return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, w = function(e) {
    var r = M(e);
    return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, y = function(e) {
    var r = e.h, t = e.s, o = e.v, n = e.a;
    r = r / 360 * 6, t /= 100, o /= 100;
    var a = Math.floor(r), l = o * (1 - t), u1 = o * (1 - (r - a) * t), c1 = o * (1 - (1 - r + a) * t), s1 = a % 6;
    return {
        r: p(255 * [
            o,
            u1,
            l,
            l,
            c1,
            o
        ][s1]),
        g: p(255 * [
            c1,
            o,
            o,
            u1,
            l,
            l
        ][s1]),
        b: p(255 * [
            l,
            l,
            c1,
            o,
            o,
            u1
        ][s1]),
        a: p(n, 2)
    };
}, q = function(e) {
    var r = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? B({
        h: x(r[1], r[2]),
        s: Number(r[3]),
        v: Number(r[4]),
        a: (void 0) === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, k = q, O = function(e) {
    var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
    return r ? z({
        r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
        g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
        b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
        a: (void 0) === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)
    }) : {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    };
}, I = O, j = function(e) {
    var r = e.toString(16);
    return r.length < 2 ? "0" + r : r;
}, z = function(e) {
    var r = e.r, t = e.g, o = e.b, n = e.a, a = Math.max(r, t, o), l = a - Math.min(r, t, o), u1 = l ? a === r ? (t - o) / l : a === t ? 2 + (o - r) / l : 4 + (r - t) / l : 0;
    return {
        h: p(60 * (u1 < 0 ? u1 + 6 : u1)),
        s: p(a ? l / a * 100 : 0),
        v: p(a / 255 * 100),
        a: n
    };
}, B = function(e) {
    return {
        h: p(e.h),
        s: p(e.s),
        v: p(e.v),
        a: p(e.a, 2)
    };
}, K = _reactDefault.default.memo(function(r) {
    var t = r.hue, o = r.onChange, n = m([
        "react-colorful__hue",
        r.className
    ]);
    return _reactDefault.default.createElement("div", {
        className: n
    }, _reactDefault.default.createElement(h, {
        onMove: function(e) {
            o({
                h: 360 * e.left
            });
        },
        onKey: function(e) {
            o({
                h: i(t + 360 * e.left, 0, 360)
            });
        },
        "aria-label": "Hue",
        "aria-valuetext": p(t)
    }, _reactDefault.default.createElement(g, {
        className: "react-colorful__hue-pointer",
        left: t / 360,
        color: N({
            h: t,
            s: 100,
            v: 100,
            a: 1
        })
    })));
}), L = _reactDefault.default.memo(function(r) {
    var t = r.hsva, o = r.onChange, n = {
        backgroundColor: N({
            h: t.h,
            s: 100,
            v: 100,
            a: 1
        })
    };
    return _reactDefault.default.createElement("div", {
        className: "react-colorful__saturation",
        style: n
    }, _reactDefault.default.createElement(h, {
        onMove: function(e) {
            o({
                s: 100 * e.left,
                v: 100 - 100 * e.top
            });
        },
        onKey: function(e) {
            o({
                s: i(t.s + 100 * e.left, 0, 100),
                v: i(t.v - 100 * e.top, 0, 100)
            });
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + p(t.s) + "%, Brightness " + p(t.v) + "%"
    }, _reactDefault.default.createElement(g, {
        className: "react-colorful__saturation-pointer",
        top: 1 - t.v / 100,
        left: t.s / 100,
        color: N(t)
    })));
}), A = function(e, r) {
    if (e === r) return !0;
    for(var t in e)if (e[t] !== r[t]) return !1;
    return !0;
}, D = function(e, r) {
    return e.replace(/\s/g, "") === r.replace(/\s/g, "");
};
function S(e, t, l) {
    var u1 = s(l), c1 = _react.useState(function() {
        return e.toHsva(t);
    }), i1 = c1[0], f1 = c1[1], v1 = _react.useRef({
        color: t,
        hsva: i1
    });
    _react.useEffect(function() {
        if (!e.equal(t, v1.current.color)) {
            var r = e.toHsva(t);
            v1.current = {
                hsva: r,
                color: t
            }, f1(r);
        }
    }, [
        t,
        e
    ]), _react.useEffect(function() {
        var r;
        A(i1, v1.current.hsva) || e.equal(r = e.fromHsva(i1), v1.current.color) || (v1.current = {
            hsva: i1,
            color: r
        }, u1(r));
    }, [
        i1,
        e,
        u1
    ]);
    var d1 = _react.useCallback(function(e1) {
        f1(function(r) {
            return Object.assign({
            }, r, e1);
        });
    }, []);
    return [
        i1,
        d1
    ];
}
var F, P, T = "undefined" != typeof window ? _react.useLayoutEffect : _react.useEffect, X = function() {
    return F || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
}, Y = function(e) {
    F = e;
}, R = function() {
    T(function() {
        if ("undefined" != typeof document && !P) {
            (P = document.createElement("style")).innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:22px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';
            var e = X();
            e && P.setAttribute("nonce", e), document.head.appendChild(P);
        }
    }, []);
}, $ = function(r) {
    var t = r.className, o = r.colorModel, n = r.color, a = (void 0) === n ? o.defaultColor : n, l = r.onChange, s1 = c(r, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]);
    R();
    var i1 = S(o, a, l), f1 = i1[0], v1 = i1[1], d1 = m([
        "react-colorful",
        t
    ]);
    return _reactDefault.default.createElement("div", u({
    }, s1, {
        className: d1
    }), _reactDefault.default.createElement(L, {
        hsva: f1,
        onChange: v1
    }), _reactDefault.default.createElement(K, {
        hue: f1.h,
        onChange: v1,
        className: "react-colorful__last-control"
    }));
}, G = {
    defaultColor: "000",
    toHsva: function(e) {
        return z(_(e));
    },
    fromHsva: function(e) {
        var r, t, o;
        return t = (r = y(e)).g, o = r.b, "#" + j(r.r) + j(t) + j(o);
    },
    equal: function(e, r) {
        return e.toLowerCase() === r.toLowerCase() || A(_(e), _(r));
    }
}, J = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: G
    }));
}, Q = function(r) {
    var t = r.className, o = r.hsva, n = r.onChange, a = {
        backgroundImage: "linear-gradient(90deg, " + w(Object.assign({
        }, o, {
            a: 0
        })) + ", " + w(Object.assign({
        }, o, {
            a: 1
        })) + ")"
    }, l = m([
        "react-colorful__alpha",
        t
    ]);
    return _reactDefault.default.createElement("div", {
        className: l
    }, _reactDefault.default.createElement("div", {
        className: "react-colorful__alpha-gradient",
        style: a
    }), _reactDefault.default.createElement(h, {
        onMove: function(e) {
            n({
                a: e.left
            });
        },
        onKey: function(e) {
            n({
                a: i(o.a + e.left)
            });
        },
        "aria-label": "Alpha",
        "aria-valuetext": p(100 * o.a) + "%"
    }, _reactDefault.default.createElement(g, {
        className: "react-colorful__alpha-pointer",
        left: o.a,
        color: w(o)
    })));
}, U = function(r) {
    var t = r.className, o = r.colorModel, n = r.color, a = (void 0) === n ? o.defaultColor : n, l = r.onChange, s1 = c(r, [
        "className",
        "colorModel",
        "color",
        "onChange"
    ]);
    R();
    var i1 = S(o, a, l), f1 = i1[0], v1 = i1[1], d1 = m([
        "react-colorful",
        t
    ]);
    return _reactDefault.default.createElement("div", u({
    }, s1, {
        className: d1
    }), _reactDefault.default.createElement(L, {
        hsva: f1,
        onChange: v1
    }), _reactDefault.default.createElement(K, {
        hue: f1.h,
        onChange: v1
    }), _reactDefault.default.createElement(Q, {
        hsva: f1,
        onChange: v1,
        className: "react-colorful__last-control"
    }));
}, V = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0,
        a: 1
    },
    toHsva: H,
    fromHsva: M,
    equal: A
}, W = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: V
    }));
}, Z = {
    defaultColor: "hsla(0, 0%, 0%, 1)",
    toHsva: C,
    fromHsva: w,
    equal: D
}, ee = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: Z
    }));
}, re = {
    defaultColor: {
        h: 0,
        s: 0,
        l: 0
    },
    toHsva: function(e) {
        return H({
            h: e.h,
            s: e.s,
            l: e.l,
            a: 1
        });
    },
    fromHsva: function(e) {
        var r;
        return {
            h: (r = M(e)).h,
            s: r.s,
            l: r.l
        };
    },
    equal: A
}, te = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: re
    }));
}, oe = {
    defaultColor: "hsl(0, 0%, 0%)",
    toHsva: E,
    fromHsva: N,
    equal: D
}, ne = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: oe
    }));
}, ae = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0,
        a: 1
    },
    toHsva: function(e) {
        return e;
    },
    fromHsva: B,
    equal: A
}, le = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: ae
    }));
}, ue = {
    defaultColor: "hsva(0, 0%, 0%, 1)",
    toHsva: q,
    fromHsva: function(e) {
        var r = B(e);
        return "hsva(" + r.h + ", " + r.s + "%, " + r.v + "%, " + r.a + ")";
    },
    equal: D
}, ce = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: ue
    }));
}, se = {
    defaultColor: {
        h: 0,
        s: 0,
        v: 0
    },
    toHsva: function(e) {
        return {
            h: e.h,
            s: e.s,
            v: e.v,
            a: 1
        };
    },
    fromHsva: function(e) {
        var r = B(e);
        return {
            h: r.h,
            s: r.s,
            v: r.v
        };
    },
    equal: A
}, ie = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: se
    }));
}, fe = {
    defaultColor: "hsv(0, 0%, 0%)",
    toHsva: k,
    fromHsva: function(e) {
        var r = B(e);
        return "hsv(" + r.h + ", " + r.s + "%, " + r.v + "%)";
    },
    equal: D
}, ve = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: fe
    }));
}, de = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    toHsva: z,
    fromHsva: y,
    equal: A
}, he = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: de
    }));
}, me = {
    defaultColor: "rgba(0, 0, 0, 1)",
    toHsva: O,
    fromHsva: function(e) {
        var r = y(e);
        return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
    },
    equal: D
}, ge = function(r) {
    return _reactDefault.default.createElement(U, u({
    }, r, {
        colorModel: me
    }));
}, pe = {
    defaultColor: {
        r: 0,
        g: 0,
        b: 0
    },
    toHsva: function(e) {
        return z({
            r: e.r,
            g: e.g,
            b: e.b,
            a: 1
        });
    },
    fromHsva: function(e) {
        var r;
        return {
            r: (r = y(e)).r,
            g: r.g,
            b: r.b
        };
    },
    equal: A
}, be = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: pe
    }));
}, _e = {
    defaultColor: "rgb(0, 0, 0)",
    toHsva: I,
    fromHsva: function(e) {
        var r = y(e);
        return "rgb(" + r.r + ", " + r.g + ", " + r.b + ")";
    },
    equal: D
}, xe = function(r) {
    return _reactDefault.default.createElement($, u({
    }, r, {
        colorModel: _e
    }));
}, Ce = /^#?([0-9A-F]{3,8})$/i, Ee = function(r) {
    var t = r.color, l = (void 0) === t ? "" : t, i1 = r.onChange, f1 = r.onBlur, v1 = r.escape, d1 = r.validate, h1 = r.format, m1 = r.process, g1 = c(r, [
        "color",
        "onChange",
        "onBlur",
        "escape",
        "validate",
        "format",
        "process"
    ]), p1 = _react.useState(function() {
        return v1(l);
    }), b1 = p1[0], _1 = p1[1], x1 = s(i1), C1 = s(f1), E1 = _react.useCallback(function(e) {
        var r1 = v1(e.target.value);
        _1(r1), d1(r1) && x1(m1 ? m1(r1) : r1);
    }, [
        v1,
        m1,
        d1,
        x1
    ]), H1 = _react.useCallback(function(e) {
        d1(e.target.value) || _1(v1(l)), C1(e);
    }, [
        l,
        v1,
        d1,
        C1
    ]);
    return _react.useEffect(function() {
        _1(v1(l));
    }, [
        l,
        v1
    ]), _reactDefault.default.createElement("input", u({
    }, g1, {
        value: h1 ? h1(b1) : b1,
        spellCheck: "false",
        onChange: E1,
        onBlur: H1
    }));
}, He = function(e) {
    return "#" + e;
}, Me = function(r) {
    var t = r.prefixed, o = r.alpha, n = c(r, [
        "prefixed",
        "alpha"
    ]), l = _react.useCallback(function(e) {
        return e.replace(/([^0-9A-F]+)/gi, "").substr(0, o ? 8 : 6);
    }, [
        o
    ]), s1 = _react.useCallback(function(e) {
        return (function(e1, r1) {
            var t1 = Ce.exec(e1), o1 = t1 ? t1[1].length : 0;
            return 3 === o1 || 6 === o1 || !!r1 && 4 === o1 || !!r1 && 8 === o1;
        })(e, o);
    }, [
        o
    ]);
    return _reactDefault.default.createElement(Ee, u({
    }, n, {
        escape: l,
        format: t ? He : void 0,
        process: He,
        validate: s1
    }));
};

},{"react":"bE4sN","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"aAj3m":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5127 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5127.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _react = require("react");
var _reactcss = require("reactcss");
var _reactcssDefault = parcelHelpers.interopDefault(_reactcss);
var _s = $RefreshSig$();
var KirkiReactColorfulButton = function(props) {
    _s();
    var _color = props.color, color = _color === void 0 ? "" : _color;
    var ref = _helpers.slicedToArray(_react.useState(function() {
        return color;
    }), 2), value = ref[0], setValue = ref[1];
    var resetColor = function() {
        props.onReset(props.initialColor); // Run onReset handler passed by `KirkiReactColorfulForm` component.
    }; // Update the local state when `color` property value is changed.
    _react.useEffect(function() {
        // We don't need to convert the color since it's using the customizer value.
        setValue(color);
    }, [
        color
    ]);
    var pickersWithAlpha = [
        'RgbaColorPicker',
        'RgbaStringColorPicker',
        'HslaColorPicker',
        'HslaStringColorPicker',
        'HsvaColorPicker',
        'HsvaStringColorPicker'
    ];
    var styles = _reactcssDefault.default({
        'default': {
            triggerButton: {
                backgroundImage: pickersWithAlpha.includes(props.pickerComponent) ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==")' : 'none'
            },
            colorPreview: {
                backgroundColor: value ? value : 'transparent'
            }
        }
    });
    return(/*#__PURE__*/ React.createElement("div", {
        className: "kirki-trigger-button-wrapper"
    }, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "kirki-trigger-button",
        onClick: props.togglePickerHandler,
        style: styles.triggerButton
    }, !props.useHueMode && /*#__PURE__*/ React.createElement("span", {
        className: "kirki-color-preview",
        style: styles.colorPreview
    }), /*#__PURE__*/ React.createElement("span", {
        className: "kirki-button-text"
    }, props.buttonText)), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "kirki-control-reset",
        onClick: resetColor,
        title: "reset color",
        style: {
            display: props.isPickerOpen ? 'flex' : 'none'
        }
    }, /*#__PURE__*/ React.createElement("i", {
        className: "dashicons dashicons-image-rotate"
    }))));
};
_s(KirkiReactColorfulButton, "La4JiguEQPqyomEu9yFrls8F3WA=");
_c = KirkiReactColorfulButton;
exports.default = KirkiReactColorfulButton;
var _c;
$RefreshReg$(_c, "KirkiReactColorfulButton");

  $parcel$ReactRefreshHelpers$5127.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@swc/helpers":"fw9mb","react":"bE4sN","reactcss":"56SNS","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1KDe"}],"56SNS":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;
var _flattenNames = require('./flattenNames');
var _flattenNames2 = _interopRequireDefault(_flattenNames);
var _mergeClasses = require('./mergeClasses');
var _mergeClasses2 = _interopRequireDefault(_mergeClasses);
var _autoprefix = require('./autoprefix');
var _autoprefix2 = _interopRequireDefault(_autoprefix);
var _hover2 = require('./components/hover');
var _hover3 = _interopRequireDefault(_hover2);
var _active = require('./components/active');
var _active2 = _interopRequireDefault(_active);
var _loop2 = require('./loop');
var _loop3 = _interopRequireDefault(_loop2);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS1(classes) {
    for(var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)activations[_key - 1] = arguments[_key];
    var activeNames = _flattenNames2.default(activations);
    var merged = _mergeClasses2.default(classes, activeNames);
    return _autoprefix2.default(merged);
};
exports.default = ReactCSS;

},{"./flattenNames":"2Bc6Q","./mergeClasses":"nyjOj","./autoprefix":"lna8X","./components/hover":"kfW9p","./components/active":"lj4Mi","./loop":"iKiRH"}],"2Bc6Q":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flattenNames = undefined;
var _isString2 = require('lodash/isString');
var _isString3 = _interopRequireDefault(_isString2);
var _forOwn2 = require('lodash/forOwn');
var _forOwn3 = _interopRequireDefault(_forOwn2);
var _isPlainObject2 = require('lodash/isPlainObject');
var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
var _map2 = require('lodash/map');
var _map3 = _interopRequireDefault(_map2);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var flattenNames = exports.flattenNames = function flattenNames1() {
    var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var names = [];
    _map3.default(things, function(thing) {
        if (Array.isArray(thing)) flattenNames1(thing).map(function(name) {
            return names.push(name);
        });
        else if (_isPlainObject3.default(thing)) _forOwn3.default(thing, function(value, key) {
            value === true && names.push(key);
            names.push(key + '-' + value);
        });
        else if (_isString3.default(thing)) names.push(thing);
    });
    return names;
};
exports.default = flattenNames;

},{"lodash/isString":"9MMGr","lodash/forOwn":"i7gcE","lodash/isPlainObject":"bwTgc","lodash/map":"b7bkr"}],"9MMGr":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isArray = require('./isArray'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var stringTag = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
module.exports = isString;

},{"./_baseGetTag":"cgCJl","./isArray":"b8pR0","./isObjectLike":"hDnm8"}],"cgCJl":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), getRawTag = require('./_getRawTag'), objectToString = require('./_objectToString');
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol1 ? Symbol1.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"wogBC","./_getRawTag":"dum6z","./_objectToString":"i3wnQ"}],"wogBC":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Symbol1 = root.Symbol;
module.exports = Symbol1;

},{"./_root":"2Jxc4"}],"2Jxc4":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

},{"./_freeGlobal":"gAltf"}],"gAltf":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"dum6z":[function(require,module,exports) {
var Symbol1 = require('./_Symbol');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol1 ? Symbol1.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"wogBC"}],"i3wnQ":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"b8pR0":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"hDnm8":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

},{}],"i7gcE":[function(require,module,exports) {
var baseForOwn = require('./_baseForOwn'), castFunction = require('./_castFunction');
/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */ function forOwn(object, iteratee) {
    return object && baseForOwn(object, castFunction(iteratee));
}
module.exports = forOwn;

},{"./_baseForOwn":"kLXBO","./_castFunction":"1SBGo"}],"kLXBO":[function(require,module,exports) {
var baseFor = require('./_baseFor'), keys = require('./keys');
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;

},{"./_baseFor":"jcFpJ","./keys":"8gIFd"}],"jcFpJ":[function(require,module,exports) {
var createBaseFor = require('./_createBaseFor');
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;

},{"./_createBaseFor":"9twJg"}],"9twJg":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) break;
        }
        return object;
    };
}
module.exports = createBaseFor;

},{}],"8gIFd":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'), baseKeys = require('./_baseKeys'), isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"ksOIs","./_baseKeys":"6LS5P","./isArrayLike":"56DRq"}],"ksOIs":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'), isArguments = require('./isArguments'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isIndex = require('./_isIndex'), isTypedArray = require('./isTypedArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"iA1B9","./isArguments":"5sIuX","./isArray":"b8pR0","./isBuffer":"5X3XH","./_isIndex":"gxjHB","./isTypedArray":"gjpHr"}],"iA1B9":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while((++index) < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"5sIuX":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'), isObjectLike = require('./isObjectLike');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

},{"./_baseIsArguments":"bxxx3","./isObjectLike":"hDnm8"}],"bxxx3":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"cgCJl","./isObjectLike":"hDnm8"}],"5X3XH":[function(require,module,exports) {
var root = require('./_root'), stubFalse = require('./stubFalse');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"2Jxc4","./stubFalse":"US47w"}],"US47w":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"gxjHB":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"gjpHr":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"hLe2y","./_baseUnary":"byPNb","./_nodeUtil":"iUV4l"}],"hLe2y":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isLength = require('./isLength'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {
};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"cgCJl","./isLength":"jgx3U","./isObjectLike":"hDnm8"}],"jgx3U":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"byPNb":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"iUV4l":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {
    }
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"gAltf"}],"6LS5P":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'), nativeKeys = require('./_nativeKeys');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != 'constructor') result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"49L7o","./_nativeKeys":"kT9JM"}],"49L7o":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"kT9JM":[function(require,module,exports) {
var overArg = require('./_overArg');
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"e2HP7"}],"e2HP7":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"56DRq":[function(require,module,exports) {
var isFunction = require('./isFunction'), isLength = require('./isLength');
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"25Tj3","./isLength":"jgx3U"}],"25Tj3":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObject = require('./isObject');
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"cgCJl","./isObject":"cA0ZB"}],"cA0ZB":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

},{}],"1SBGo":[function(require,module,exports) {
var identity = require('./identity');
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */ function castFunction(value) {
    return typeof value == 'function' ? value : identity;
}
module.exports = castFunction;

},{"./identity":"hDgZn"}],"hDgZn":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"bwTgc":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), getPrototype = require('./_getPrototype'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

},{"./_baseGetTag":"cgCJl","./_getPrototype":"ipFJz","./isObjectLike":"hDnm8"}],"ipFJz":[function(require,module,exports) {
var overArg = require('./_overArg');
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

},{"./_overArg":"e2HP7"}],"b7bkr":[function(require,module,exports) {
var arrayMap = require('./_arrayMap'), baseIteratee = require('./_baseIteratee'), baseMap = require('./_baseMap'), isArray = require('./isArray');
/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */ function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
}
module.exports = map;

},{"./_arrayMap":"JLFFu","./_baseIteratee":"b8q01","./_baseMap":"cNKaw","./isArray":"b8pR0"}],"JLFFu":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while((++index) < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"b8q01":[function(require,module,exports) {
var baseMatches = require('./_baseMatches'), baseMatchesProperty = require('./_baseMatchesProperty'), identity = require('./identity'), isArray = require('./isArray'), property = require('./property');
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') return value;
    if (value == null) return identity;
    if (typeof value == 'object') return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"./_baseMatches":"e0SeR","./_baseMatchesProperty":"7h6N4","./identity":"hDgZn","./isArray":"b8pR0","./property":"hgmOt"}],"e0SeR":[function(require,module,exports) {
var baseIsMatch = require('./_baseIsMatch'), getMatchData = require('./_getMatchData'), matchesStrictComparable = require('./_matchesStrictComparable');
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"./_baseIsMatch":"63kmT","./_getMatchData":"8CkNc","./_matchesStrictComparable":"4angt"}],"63kmT":[function(require,module,exports) {
var Stack = require('./_Stack'), baseIsEqual = require('./_baseIsEqual');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while((++index) < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"./_Stack":"ivC3W","./_baseIsEqual":"kKolq"}],"ivC3W":[function(require,module,exports) {
var ListCache = require('./_ListCache'), stackClear = require('./_stackClear'), stackDelete = require('./_stackDelete'), stackGet = require('./_stackGet'), stackHas = require('./_stackHas'), stackSet = require('./_stackSet');
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"9Oi1m","./_stackClear":"f0NpV","./_stackDelete":"5Tymw","./_stackGet":"9VwuQ","./_stackHas":"ecajF","./_stackSet":"4wy3C"}],"9Oi1m":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'), listCacheDelete = require('./_listCacheDelete'), listCacheGet = require('./_listCacheGet'), listCacheHas = require('./_listCacheHas'), listCacheSet = require('./_listCacheSet');
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"5QbCh","./_listCacheDelete":"bE8du","./_listCacheGet":"9HYPz","./_listCacheHas":"iLnAg","./_listCacheSet":"5egkz"}],"5QbCh":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"bE8du":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"9z7Wl"}],"9z7Wl":[function(require,module,exports) {
var eq = require('./eq');
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"iICX3"}],"iICX3":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"9HYPz":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"9z7Wl"}],"iLnAg":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"9z7Wl"}],"5egkz":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"9z7Wl"}],"f0NpV":[function(require,module,exports) {
var ListCache = require('./_ListCache');
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"9Oi1m"}],"5Tymw":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"9VwuQ":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"ecajF":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"4wy3C":[function(require,module,exports) {
var ListCache = require('./_ListCache'), Map1 = require('./_Map'), MapCache = require('./_MapCache');
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"9Oi1m","./_Map":"jKWYS","./_MapCache":"6vruj"}],"jKWYS":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Map1 = getNative(root, 'Map');
module.exports = Map1;

},{"./_getNative":"gnxeN","./_root":"2Jxc4"}],"gnxeN":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'), getValue = require('./_getValue');
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"20tBy","./_getValue":"iwGdj"}],"20tBy":[function(require,module,exports) {
var isFunction = require('./isFunction'), isMasked = require('./_isMasked'), isObject = require('./isObject'), toSource = require('./_toSource');
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"25Tj3","./_isMasked":"i25ol","./isObject":"cA0ZB","./_toSource":"knXR9"}],"i25ol":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"b9b44"}],"b9b44":[function(require,module,exports) {
var root = require('./_root');
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

},{"./_root":"2Jxc4"}],"knXR9":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {
        }
        try {
            return func + '';
        } catch (e) {
        }
    }
    return '';
}
module.exports = toSource;

},{}],"iwGdj":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"6vruj":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'), mapCacheDelete = require('./_mapCacheDelete'), mapCacheGet = require('./_mapCacheGet'), mapCacheHas = require('./_mapCacheHas'), mapCacheSet = require('./_mapCacheSet');
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"6rXQv","./_mapCacheDelete":"6vZVx","./_mapCacheGet":"l6sSN","./_mapCacheHas":"bzHhr","./_mapCacheSet":"gUtEJ"}],"6rXQv":[function(require,module,exports) {
var Hash = require('./_Hash'), ListCache = require('./_ListCache'), Map1 = require('./_Map');
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map1 || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"4aqAX","./_ListCache":"9Oi1m","./_Map":"jKWYS"}],"4aqAX":[function(require,module,exports) {
var hashClear = require('./_hashClear'), hashDelete = require('./_hashDelete'), hashGet = require('./_hashGet'), hashHas = require('./_hashHas'), hashSet = require('./_hashSet');
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while((++index) < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"5Ngqr","./_hashDelete":"7Jm8V","./_hashGet":"avVpv","./_hashHas":"2lkEd","./_hashSet":"24y12"}],"5Ngqr":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {
    };
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"1cnxh"}],"1cnxh":[function(require,module,exports) {
var getNative = require('./_getNative');
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

},{"./_getNative":"gnxeN"}],"7Jm8V":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"avVpv":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"1cnxh"}],"2lkEd":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"1cnxh"}],"24y12":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"1cnxh"}],"6vZVx":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"lj8Jh"}],"lj8Jh":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"j54L5"}],"j54L5":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;

},{}],"l6sSN":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"lj8Jh"}],"bzHhr":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"lj8Jh"}],"gUtEJ":[function(require,module,exports) {
var getMapData = require('./_getMapData');
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"lj8Jh"}],"kKolq":[function(require,module,exports) {
var baseIsEqualDeep = require('./_baseIsEqualDeep'), isObjectLike = require('./isObjectLike');
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"gaccT","./isObjectLike":"hDnm8"}],"gaccT":[function(require,module,exports) {
var Stack = require('./_Stack'), equalArrays = require('./_equalArrays'), equalByTag = require('./_equalByTag'), equalObjects = require('./_equalObjects'), getTag = require('./_getTag'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isTypedArray = require('./isTypedArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"ivC3W","./_equalArrays":"89VCT","./_equalByTag":"7UIE3","./_equalObjects":"53XZw","./_getTag":"5tXwd","./isArray":"b8pR0","./isBuffer":"5X3XH","./isTypedArray":"gjpHr"}],"89VCT":[function(require,module,exports) {
var SetCache = require('./_SetCache'), arraySome = require('./_arraySome'), cacheHas = require('./_cacheHas');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while((++index) < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue1, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue1 || equalFunc(arrValue, othValue1, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"jgU9K","./_arraySome":"2vH4b","./_cacheHas":"T1SXT"}],"jgU9K":[function(require,module,exports) {
var MapCache = require('./_MapCache'), setCacheAdd = require('./_setCacheAdd'), setCacheHas = require('./_setCacheHas');
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while((++index) < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"6vruj","./_setCacheAdd":"aLzsH","./_setCacheHas":"lYDsZ"}],"aLzsH":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"lYDsZ":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"2vH4b":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while((++index) < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"T1SXT":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"7UIE3":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), Uint8Array1 = require('./_Uint8Array'), eq = require('./eq'), equalArrays = require('./_equalArrays'), mapToArray = require('./_mapToArray'), setToArray = require('./_setToArray');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol1 ? Symbol1.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array1(object), new Uint8Array1(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"wogBC","./_Uint8Array":"96YUn","./eq":"iICX3","./_equalArrays":"89VCT","./_mapToArray":"aEHeJ","./_setToArray":"kzeSU"}],"96YUn":[function(require,module,exports) {
var root = require('./_root');
/** Built-in value references. */ var Uint8Array1 = root.Uint8Array;
module.exports = Uint8Array1;

},{"./_root":"2Jxc4"}],"aEHeJ":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"kzeSU":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"53XZw":[function(require,module,exports) {
var getAllKeys = require('./_getAllKeys');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while((++index) < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) result = false;
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"5ZfX7"}],"5ZfX7":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'), getSymbols = require('./_getSymbols'), keys = require('./keys');
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"itr83","./_getSymbols":"kTWjA","./keys":"8gIFd"}],"itr83":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'), isArray = require('./isArray');
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"65dlx","./isArray":"b8pR0"}],"65dlx":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while((++index) < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"kTWjA":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'), stubArray = require('./stubArray');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"2SawT","./stubArray":"gqQnL"}],"2SawT":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while((++index) < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"gqQnL":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"5tXwd":[function(require,module,exports) {
var DataView1 = require('./_DataView'), Map1 = require('./_Map'), Promise1 = require('./_Promise'), Set1 = require('./_Set'), WeakMap1 = require('./_WeakMap'), baseGetTag = require('./_baseGetTag'), toSource = require('./_toSource');
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView1), mapCtorString = toSource(Map1), promiseCtorString = toSource(Promise1), setCtorString = toSource(Set1), weakMapCtorString = toSource(WeakMap1);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView1 && getTag(new DataView1(new ArrayBuffer(1))) != dataViewTag || Map1 && getTag(new Map1) != mapTag || Promise1 && getTag(Promise1.resolve()) != promiseTag || Set1 && getTag(new Set1) != setTag || WeakMap1 && getTag(new WeakMap1) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"4fsPU","./_Map":"jKWYS","./_Promise":"91192","./_Set":"2VCA0","./_WeakMap":"1P0BK","./_baseGetTag":"cgCJl","./_toSource":"knXR9"}],"4fsPU":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var DataView1 = getNative(root, 'DataView');
module.exports = DataView1;

},{"./_getNative":"gnxeN","./_root":"2Jxc4"}],"91192":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Promise1 = getNative(root, 'Promise');
module.exports = Promise1;

},{"./_getNative":"gnxeN","./_root":"2Jxc4"}],"2VCA0":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var Set1 = getNative(root, 'Set');
module.exports = Set1;

},{"./_getNative":"gnxeN","./_root":"2Jxc4"}],"1P0BK":[function(require,module,exports) {
var getNative = require('./_getNative'), root = require('./_root');
/* Built-in method references that are verified to be native. */ var WeakMap1 = getNative(root, 'WeakMap');
module.exports = WeakMap1;

},{"./_getNative":"gnxeN","./_root":"2Jxc4"}],"8CkNc":[function(require,module,exports) {
var isStrictComparable = require('./_isStrictComparable'), keys = require('./keys');
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"./_isStrictComparable":"bD4qm","./keys":"8gIFd"}],"bD4qm":[function(require,module,exports) {
var isObject = require('./isObject');
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"./isObject":"cA0ZB"}],"4angt":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"7h6N4":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual'), get = require('./get'), hasIn = require('./hasIn'), isKey = require('./_isKey'), isStrictComparable = require('./_isStrictComparable'), matchesStrictComparable = require('./_matchesStrictComparable'), toKey = require('./_toKey');
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"kKolq","./get":"3KRU0","./hasIn":"6x9hi","./_isKey":"iA9ZS","./_isStrictComparable":"bD4qm","./_matchesStrictComparable":"4angt","./_toKey":"7otHO"}],"3KRU0":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"1pZOo"}],"1pZOo":[function(require,module,exports) {
var castPath = require('./_castPath'), toKey = require('./_toKey');
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"5HqrF","./_toKey":"7otHO"}],"5HqrF":[function(require,module,exports) {
var isArray = require('./isArray'), isKey = require('./_isKey'), stringToPath = require('./_stringToPath'), toString = require('./toString');
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"b8pR0","./_isKey":"iA9ZS","./_stringToPath":"bbe2K","./toString":"dsX1e"}],"iA9ZS":[function(require,module,exports) {
var isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"b8pR0","./isSymbol":"7jTxa"}],"7jTxa":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"cgCJl","./isObjectLike":"hDnm8"}],"bbe2K":[function(require,module,exports) {
var memoizeCapped = require('./_memoizeCapped');
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push('');
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"hQyRM"}],"hQyRM":[function(require,module,exports) {
var memoize = require('./memoize');
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"l8rRL"}],"l8rRL":[function(require,module,exports) {
var MapCache = require('./_MapCache');
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"6vruj"}],"dsX1e":[function(require,module,exports) {
var baseToString = require('./_baseToString');
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"jLEP6"}],"jLEP6":[function(require,module,exports) {
var Symbol1 = require('./_Symbol'), arrayMap = require('./_arrayMap'), isArray = require('./isArray'), isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol1 ? Symbol1.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : '';
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;

},{"./_Symbol":"wogBC","./_arrayMap":"JLFFu","./isArray":"b8pR0","./isSymbol":"7jTxa"}],"7otHO":[function(require,module,exports) {
var isSymbol = require('./isSymbol');
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) return value;
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;

},{"./isSymbol":"7jTxa"}],"6x9hi":[function(require,module,exports) {
var baseHasIn = require('./_baseHasIn'), hasPath = require('./_hasPath');
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"./_baseHasIn":"eEyPv","./_hasPath":"5W1zq"}],"eEyPv":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"5W1zq":[function(require,module,exports) {
var castPath = require('./_castPath'), isArguments = require('./isArguments'), isArray = require('./isArray'), isIndex = require('./_isIndex'), isLength = require('./isLength'), toKey = require('./_toKey');
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while((++index) < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || (++index) != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"./_castPath":"5HqrF","./isArguments":"5sIuX","./isArray":"b8pR0","./_isIndex":"gxjHB","./isLength":"jgx3U","./_toKey":"7otHO"}],"hgmOt":[function(require,module,exports) {
var baseProperty = require('./_baseProperty'), basePropertyDeep = require('./_basePropertyDeep'), isKey = require('./_isKey'), toKey = require('./_toKey');
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"./_baseProperty":"h5lSg","./_basePropertyDeep":"gNw7v","./_isKey":"iA9ZS","./_toKey":"7otHO"}],"h5lSg":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"gNw7v":[function(require,module,exports) {
var baseGet = require('./_baseGet');
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"./_baseGet":"1pZOo"}],"cNKaw":[function(require,module,exports) {
var baseEach = require('./_baseEach'), isArrayLike = require('./isArrayLike');
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection1) {
        result[++index] = iteratee(value, key, collection1);
    });
    return result;
}
module.exports = baseMap;

},{"./_baseEach":"j88Tx","./isArrayLike":"56DRq"}],"j88Tx":[function(require,module,exports) {
var baseForOwn = require('./_baseForOwn'), createBaseEach = require('./_createBaseEach');
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */ var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;

},{"./_baseForOwn":"kLXBO","./_createBaseEach":"exGmm"}],"exGmm":[function(require,module,exports) {
var isArrayLike = require('./isArrayLike');
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) return collection;
        if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while(fromRight ? index-- : (++index) < length){
            if (iteratee(iterable[index], index, iterable) === false) break;
        }
        return collection;
    };
}
module.exports = createBaseEach;

},{"./isArrayLike":"56DRq"}],"nyjOj":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeClasses = undefined;
var _forOwn2 = require('lodash/forOwn');
var _forOwn3 = _interopRequireDefault(_forOwn2);
var _cloneDeep2 = require('lodash/cloneDeep');
var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var mergeClasses = exports.mergeClasses = function mergeClasses1(classes) {
    var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var styles = classes.default && _cloneDeep3.default(classes.default) || {
    };
    activeNames.map(function(name) {
        var toMerge = classes[name];
        if (toMerge) _forOwn3.default(toMerge, function(value, key) {
            if (!styles[key]) styles[key] = {
            };
            styles[key] = _extends({
            }, styles[key], toMerge[key]);
        });
        return name;
    });
    return styles;
};
exports.default = mergeClasses;

},{"lodash/forOwn":"i7gcE","lodash/cloneDeep":"c70zh"}],"c70zh":[function(require,module,exports) {
var baseClone = require('./_baseClone');
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
module.exports = cloneDeep;

},{"./_baseClone":"4NysJ"}],"4NysJ":[function(require,module,exports) {
var Stack = require('./_Stack'), arrayEach = require('./_arrayEach'), assignValue = require('./_assignValue'), baseAssign = require('./_baseAssign'), baseAssignIn = require('./_baseAssignIn'), cloneBuffer = require('./_cloneBuffer'), copyArray = require('./_copyArray'), copySymbols = require('./_copySymbols'), copySymbolsIn = require('./_copySymbolsIn'), getAllKeys = require('./_getAllKeys'), getAllKeysIn = require('./_getAllKeysIn'), getTag = require('./_getTag'), initCloneArray = require('./_initCloneArray'), initCloneByTag = require('./_initCloneByTag'), initCloneObject = require('./_initCloneObject'), isArray = require('./isArray'), isBuffer = require('./isBuffer'), isMap = require('./isMap'), isObject = require('./isObject'), isSet = require('./isSet'), keys = require('./keys'), keysIn = require('./keysIn');
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {
};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!isObject(value)) return value;
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {
            } : initCloneObject(value);
            if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {
            };
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (isSet(value)) value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
    else if (isMap(value)) value.forEach(function(subValue, key1) {
        result.set(key1, baseClone(subValue, bitmask, customizer, key1, value, stack));
    });
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key1) {
        if (props) {
            key1 = subValue;
            subValue = value[key1];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key1, baseClone(subValue, bitmask, customizer, key1, value, stack));
    });
    return result;
}
module.exports = baseClone;

},{"./_Stack":"ivC3W","./_arrayEach":"c47n9","./_assignValue":"hdKEi","./_baseAssign":"kApuz","./_baseAssignIn":"ksUP2","./_cloneBuffer":"1emMG","./_copyArray":"8k8lr","./_copySymbols":"8n0Yj","./_copySymbolsIn":"1t4xS","./_getAllKeys":"5ZfX7","./_getAllKeysIn":"9cDtv","./_getTag":"5tXwd","./_initCloneArray":"fHIgn","./_initCloneByTag":"fsHTW","./_initCloneObject":"5rBml","./isArray":"b8pR0","./isBuffer":"5X3XH","./isMap":"6tXyw","./isObject":"cA0ZB","./isSet":"43rja","./keys":"8gIFd","./keysIn":"3RvXZ"}],"c47n9":[function(require,module,exports) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while((++index) < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
module.exports = arrayEach;

},{}],"hdKEi":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'), eq = require('./eq');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value);
}
module.exports = assignValue;

},{"./_baseAssignValue":"l29je","./eq":"iICX3"}],"l29je":[function(require,module,exports) {
var defineProperty = require('./_defineProperty');
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
    });
    else object[key] = value;
}
module.exports = baseAssignValue;

},{"./_defineProperty":"bDhHV"}],"bDhHV":[function(require,module,exports) {
var getNative = require('./_getNative');
var defineProperty = function() {
    try {
        var func = getNative(Object, 'defineProperty');
        func({
        }, '', {
        });
        return func;
    } catch (e) {
    }
}();
module.exports = defineProperty;

},{"./_getNative":"gnxeN"}],"kApuz":[function(require,module,exports) {
var copyObject = require('./_copyObject'), keys = require('./keys');
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;

},{"./_copyObject":"xpaQu","./keys":"8gIFd"}],"xpaQu":[function(require,module,exports) {
var assignValue = require('./_assignValue'), baseAssignValue = require('./_baseAssignValue');
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {
    });
    var index = -1, length = props.length;
    while((++index) < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) newValue = source[key];
        if (isNew) baseAssignValue(object, key, newValue);
        else assignValue(object, key, newValue);
    }
    return object;
}
module.exports = copyObject;

},{"./_assignValue":"hdKEi","./_baseAssignValue":"l29je"}],"ksUP2":[function(require,module,exports) {
var copyObject = require('./_copyObject'), keysIn = require('./keysIn');
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;

},{"./_copyObject":"xpaQu","./keysIn":"3RvXZ"}],"3RvXZ":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'), baseKeysIn = require('./_baseKeysIn'), isArrayLike = require('./isArrayLike');
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;

},{"./_arrayLikeKeys":"ksOIs","./_baseKeysIn":"1LjyN","./isArrayLike":"56DRq"}],"1LjyN":[function(require,module,exports) {
var isObject = require('./isObject'), isPrototype = require('./_isPrototype'), nativeKeysIn = require('./_nativeKeysIn');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!isObject(object)) return nativeKeysIn(object);
    var isProto = isPrototype(object), result = [];
    for(var key in object)if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
    return result;
}
module.exports = baseKeysIn;

},{"./isObject":"cA0ZB","./_isPrototype":"49L7o","./_nativeKeysIn":"erZVg"}],"erZVg":[function(require,module,exports) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function nativeKeysIn(object) {
    var result = [];
    if (object != null) for(var key in Object(object))result.push(key);
    return result;
}
module.exports = nativeKeysIn;

},{}],"1emMG":[function(require,module,exports) {
var root = require('./_root');
/** Detect free variable `exports`. */ var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
module.exports = cloneBuffer;

},{"./_root":"2Jxc4"}],"8k8lr":[function(require,module,exports) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while((++index) < length)array[index] = source[index];
    return array;
}
module.exports = copyArray;

},{}],"8n0Yj":[function(require,module,exports) {
var copyObject = require('./_copyObject'), getSymbols = require('./_getSymbols');
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;

},{"./_copyObject":"xpaQu","./_getSymbols":"kTWjA"}],"1t4xS":[function(require,module,exports) {
var copyObject = require('./_copyObject'), getSymbolsIn = require('./_getSymbolsIn');
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;

},{"./_copyObject":"xpaQu","./_getSymbolsIn":"gxRyZ"}],"gxRyZ":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'), getPrototype = require('./_getPrototype'), getSymbols = require('./_getSymbols'), stubArray = require('./stubArray');
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while(object){
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
module.exports = getSymbolsIn;

},{"./_arrayPush":"65dlx","./_getPrototype":"ipFJz","./_getSymbols":"kTWjA","./stubArray":"gqQnL"}],"9cDtv":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'), getSymbolsIn = require('./_getSymbolsIn'), keysIn = require('./keysIn');
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
module.exports = getAllKeysIn;

},{"./_baseGetAllKeys":"itr83","./_getSymbolsIn":"gxRyZ","./keysIn":"3RvXZ"}],"fHIgn":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
module.exports = initCloneArray;

},{}],"fsHTW":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer'), cloneDataView = require('./_cloneDataView'), cloneRegExp = require('./_cloneRegExp'), cloneSymbol = require('./_cloneSymbol'), cloneTypedArray = require('./_cloneTypedArray');
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return cloneSymbol(object);
    }
}
module.exports = initCloneByTag;

},{"./_cloneArrayBuffer":"8OQH3","./_cloneDataView":"2mDNP","./_cloneRegExp":"ekMPT","./_cloneSymbol":"1V6MK","./_cloneTypedArray":"l0TPp"}],"8OQH3":[function(require,module,exports) {
var Uint8Array1 = require('./_Uint8Array');
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array1(result).set(new Uint8Array1(arrayBuffer));
    return result;
}
module.exports = cloneArrayBuffer;

},{"./_Uint8Array":"96YUn"}],"2mDNP":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer');
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
module.exports = cloneDataView;

},{"./_cloneArrayBuffer":"8OQH3"}],"ekMPT":[function(require,module,exports) {
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
module.exports = cloneRegExp;

},{}],"1V6MK":[function(require,module,exports) {
var Symbol1 = require('./_Symbol');
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol1 ? Symbol1.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {
    };
}
module.exports = cloneSymbol;

},{"./_Symbol":"wogBC"}],"l0TPp":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer');
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":"8OQH3"}],"5rBml":[function(require,module,exports) {
var baseCreate = require('./_baseCreate'), getPrototype = require('./_getPrototype'), isPrototype = require('./_isPrototype');
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {
    };
}
module.exports = initCloneObject;

},{"./_baseCreate":"d8i0N","./_getPrototype":"ipFJz","./_isPrototype":"49L7o"}],"d8i0N":[function(require,module,exports) {
var isObject = require('./isObject');
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {
    }
    return function(proto) {
        if (!isObject(proto)) return {
        };
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
module.exports = baseCreate;

},{"./isObject":"cA0ZB"}],"6tXyw":[function(require,module,exports) {
var baseIsMap = require('./_baseIsMap'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;

},{"./_baseIsMap":"6iQso","./_baseUnary":"byPNb","./_nodeUtil":"iUV4l"}],"6iQso":[function(require,module,exports) {
var getTag = require('./_getTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = baseIsMap;

},{"./_getTag":"5tXwd","./isObjectLike":"hDnm8"}],"43rja":[function(require,module,exports) {
var baseIsSet = require('./_baseIsSet'), baseUnary = require('./_baseUnary'), nodeUtil = require('./_nodeUtil');
/* Node.js helper references. */ var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;

},{"./_baseIsSet":"iqPrS","./_baseUnary":"byPNb","./_nodeUtil":"iUV4l"}],"iqPrS":[function(require,module,exports) {
var getTag = require('./_getTag'), isObjectLike = require('./isObjectLike');
/** `Object#toString` result references. */ var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = baseIsSet;

},{"./_getTag":"5tXwd","./isObjectLike":"hDnm8"}],"lna8X":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.autoprefix = undefined;
var _forOwn2 = require('lodash/forOwn');
var _forOwn3 = _interopRequireDefault(_forOwn2);
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var transforms = {
    borderRadius: function borderRadius(value) {
        return {
            msBorderRadius: value,
            MozBorderRadius: value,
            OBorderRadius: value,
            WebkitBorderRadius: value,
            borderRadius: value
        };
    },
    boxShadow: function boxShadow(value) {
        return {
            msBoxShadow: value,
            MozBoxShadow: value,
            OBoxShadow: value,
            WebkitBoxShadow: value,
            boxShadow: value
        };
    },
    userSelect: function userSelect(value) {
        return {
            WebkitTouchCallout: value,
            KhtmlUserSelect: value,
            MozUserSelect: value,
            msUserSelect: value,
            WebkitUserSelect: value,
            userSelect: value
        };
    },
    flex: function flex(value) {
        return {
            WebkitBoxFlex: value,
            MozBoxFlex: value,
            WebkitFlex: value,
            msFlex: value,
            flex: value
        };
    },
    flexBasis: function flexBasis(value) {
        return {
            WebkitFlexBasis: value,
            flexBasis: value
        };
    },
    justifyContent: function justifyContent(value) {
        return {
            WebkitJustifyContent: value,
            justifyContent: value
        };
    },
    transition: function transition(value) {
        return {
            msTransition: value,
            MozTransition: value,
            OTransition: value,
            WebkitTransition: value,
            transition: value
        };
    },
    transform: function transform(value) {
        return {
            msTransform: value,
            MozTransform: value,
            OTransform: value,
            WebkitTransform: value,
            transform: value
        };
    },
    absolute: function absolute(value) {
        var direction = value && value.split(' ');
        return {
            position: 'absolute',
            top: direction && direction[0],
            right: direction && direction[1],
            bottom: direction && direction[2],
            left: direction && direction[3]
        };
    },
    extend: function extend(name, otherElementStyles) {
        var otherStyle = otherElementStyles[name];
        if (otherStyle) return otherStyle;
        return {
            'extend': name
        };
    }
};
var autoprefix = exports.autoprefix = function autoprefix1(elements) {
    var prefixed = {
    };
    _forOwn3.default(elements, function(styles, element) {
        var expanded = {
        };
        _forOwn3.default(styles, function(value, key) {
            var transform = transforms[key];
            if (transform) expanded = _extends({
            }, expanded, transform(value));
            else expanded[key] = value;
        });
        prefixed[element] = expanded;
    });
    return prefixed;
};
exports.default = autoprefix;

},{"lodash/forOwn":"i7gcE"}],"kfW9p":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hover = undefined;
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var hover = exports.hover = function hover1(Component) {
    var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
    return (function(_React$Component) {
        _inherits(Hover, _React$Component);
        function Hover() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Hover);
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [
                this
            ].concat(args))), _this), _this.state = {
                hover: false
            }, _this.handleMouseOver = function() {
                return _this.setState({
                    hover: true
                });
            }, _this.handleMouseOut = function() {
                return _this.setState({
                    hover: false
                });
            }, _this.render = function() {
                return _react2.default.createElement(Span, {
                    onMouseOver: _this.handleMouseOver,
                    onMouseOut: _this.handleMouseOut
                }, _react2.default.createElement(Component, _extends({
                }, _this.props, _this.state)));
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        return Hover;
    })(_react2.default.Component);
};
exports.default = hover;

},{"react":"bE4sN"}],"lj4Mi":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.active = undefined;
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var active = exports.active = function active1(Component) {
    var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
    return (function(_React$Component) {
        _inherits(Active, _React$Component);
        function Active() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Active);
            for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [
                this
            ].concat(args))), _this), _this.state = {
                active: false
            }, _this.handleMouseDown = function() {
                return _this.setState({
                    active: true
                });
            }, _this.handleMouseUp = function() {
                return _this.setState({
                    active: false
                });
            }, _this.render = function() {
                return _react2.default.createElement(Span, {
                    onMouseDown: _this.handleMouseDown,
                    onMouseUp: _this.handleMouseUp
                }, _react2.default.createElement(Component, _extends({
                }, _this.props, _this.state)));
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        return Active;
    })(_react2.default.Component);
};
exports.default = active;

},{"react":"bE4sN"}],"iKiRH":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var loopable = function loopable1(i, length) {
    var props = {
    };
    var setProp = function setProp1(name) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        props[name] = value;
    };
    i === 0 && setProp('first-child');
    i === length - 1 && setProp('last-child');
    (i === 0 || i % 2 === 0) && setProp('even');
    Math.abs(i % 2) === 1 && setProp('odd');
    setProp('nth-child', i);
    return props;
};
exports.default = loopable;

},{}],"d1KDe":[function(require,module,exports) {
"use strict";
var Refresh = require('react-refresh/runtime');
function debounce(func, delay) {
    var args;
    var timeout = undefined;
    return function(args1) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = undefined;
            func.call(null, args1);
        }, delay);
    };
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30); // Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module) {
    window.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module) {
    if (isReactRefreshBoundary(module.exports)) {
        registerExportsForReactRefresh(module);
        if (module.hot) {
            module.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module.exports;
            });
            module.hot.accept(function(getParents) {
                var prevExports = module.hot.data.prevExports;
                var nextExports = module.exports; // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports); // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
} // When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module) {
    var exports = module.exports, id = module.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        Refresh.register(exportValue, id + ' %exports% ' + key);
    }
}

},{"react-refresh/runtime":"kZ1Z6"}],"6kfiY":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$17dc = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$17dc.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("@swc/helpers");
var _react = require("react");
var _reactcss = require("reactcss");
var _reactcssDefault = parcelHelpers.interopDefault(_reactcss);
var _s = $RefreshSig$();
var KirkiReactColorfulInput = function(props) {
    _s();
    var onChange = props.onChange, onReset = props.onReset, triggerStyle = props.triggerStyle, _color = props.color, color = _color === void 0 ? "" : _color;
    var ref = _helpers.slicedToArray(_react.useState(function() {
        return color;
    }), 2), value = ref[0], setValue = ref[1];
    var handleChange = _react.useCallback(function(e) {
        onChange(e.target.value); // Run onChange handler passed by `KirkiReactColorfulForm` component.
    }, [
        onChange
    ]);
    var resetColor = function() {
        onReset(props.initialColor); // Run onReset handler passed by `KirkiReactColorfulForm` component.
    };
    var togglePickerHandler = 'button' === triggerStyle ? function() {
    } : props.togglePickerHandler;
    var openPickerHandler = 'button' === triggerStyle ? function() {
    } : props.openPickerHandler; // Update the local state when `color` property value is changed.
    _react.useEffect(function() {
        // We don't need to convert the color since it's already handled in parent component.
        setValue(color);
    }, [
        color
    ]);
    var pickersWithAlpha = [
        'RgbaColorPicker',
        'RgbaStringColorPicker',
        'HslaColorPicker',
        'HslaStringColorPicker',
        'HsvaColorPicker',
        'HsvaStringColorPicker'
    ];
    var styles = _reactcssDefault.default({
        'default': {
            colorPreviewWrapper: {
                backgroundImage: pickersWithAlpha.includes(props.pickerComponent) ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAAHnlligAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNpi+P///4EDBxiAGMgCCCAGFB5AADGCRBgYDh48CCRZIJS9vT2QBAggFBkmBiSAogxFBiCAoHogAKIKAlBUYTELAiAmEtABEECk20G6BOmuIl0CIMBQ/IEMkO0myiSSraaaBhZcbkUOs0HuBwDplz5uFJ3Z4gAAAABJRU5ErkJggg==")' : 'none'
            },
            colorPreview: {
                backgroundColor: value
            }
        }
    });
    return(/*#__PURE__*/ React.createElement("div", {
        className: "kirki-color-input-wrapper"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "kirki-color-input-control"
    }, !props.useHueMode && /*#__PURE__*/ React.createElement("div", {
        className: "kirki-color-preview-wrapper",
        style: styles.colorPreviewWrapper
    }, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "kirki-color-preview",
        style: styles.colorPreview,
        onClick: togglePickerHandler
    })), /*#__PURE__*/ React.createElement("input", {
        ref: props.inputRef,
        type: "text",
        value: value,
        className: "kirki-color-input",
        spellCheck: "false",
        onFocus: openPickerHandler,
        onChange: handleChange
    }), 'input' === triggerStyle && /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "kirki-control-reset",
        onClick: resetColor,
        style: {
            display: props.isPickerOpen ? 'flex' : 'none'
        }
    }, /*#__PURE__*/ React.createElement("i", {
        className: "dashicons dashicons-image-rotate"
    })))));
};
_s(KirkiReactColorfulInput, "4YOKgFgOo+CSPSWQu1KvrOugHVE=");
_c = KirkiReactColorfulInput;
exports.default = KirkiReactColorfulInput;
var _c;
$RefreshReg$(_c, "KirkiReactColorfulInput");

  $parcel$ReactRefreshHelpers$17dc.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"@swc/helpers":"fw9mb","react":"bE4sN","reactcss":"56SNS","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1KDe"}],"kMyrp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var KirkiReactColorfulSwatches = function(param) {
    var colors = param.colors, onClick = param.onClick;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "kirki-color-swatches"
    }, colors.map(function(color, index) {
        /*#__PURE__*/ return React.createElement("button", {
            key: index.toString(),
            type: "button",
            className: "kirki-color-swatch",
            "data-kirki-color": color,
            style: {
                backgroundColor: color
            },
            onClick: function() {
                return onClick(color);
            }
        });
    })));
};
_c = KirkiReactColorfulSwatches;
exports.default = KirkiReactColorfulSwatches;
var _c;
$RefreshReg$(_c, "KirkiReactColorfulSwatches");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"6Ldvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colord = require("colord");
/**
 * Convert the value for the color picker.
 *
 * @param {string|Object} value The value to be converted.
 * @param {string} pickerComponent The picker component name.
 *
 * @returns {string|Object} The converted value.
 */ var convertColorForPicker = function(value, pickerComponent) {
    var convertedValue;
    switch(pickerComponent){
        case 'HexColorPicker':
            convertedValue = _colord.colord(value).toHex();
            break;
        case 'RgbColorPicker':
            convertedValue = _colord.colord(value).toRgb();
            delete convertedValue.a;
            break;
        case 'RgbStringColorPicker':
            convertedValue = _colord.colord(value).toRgbString();
            break;
        case 'RgbaColorPicker':
            convertedValue = _colord.colord(value).toRgb();
            break;
        case 'RgbaStringColorPicker':
            convertedValue = _colord.colord(value).toRgbString(); // Force to set the alpha channel value.
            if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
                convertedValue = convertedValue.replace('rgb', 'rgba');
                convertedValue = convertedValue.replace(')', ', 1)');
            }
            break;
        case 'HslColorPicker':
            convertedValue = _colord.colord(value).toHsl();
            delete convertedValue.a;
            break;
        case 'HslStringColorPicker':
            convertedValue = _colord.colord(value).toHslString();
            break;
        case 'HslaColorPicker':
            convertedValue = _colord.colord(value).toHsl();
            break;
        case 'HslaStringColorPicker':
            convertedValue = _colord.colord(value).toHslString(); // Force to set the alpha channel value.
            if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
                convertedValue = convertedValue.replace('hsl', 'hsla');
                convertedValue = convertedValue.replace(')', ', 1)');
            }
            break;
        case 'HsvColorPicker':
            convertedValue = _colord.colord(value).toHsv();
            delete convertedValue.a;
            break;
        case 'HsvStringColorPicker':
            var hsv = _colord.colord(value).toHsv();
            convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
            break;
        case 'HsvaColorPicker':
            convertedValue = _colord.colord(value).toHsv();
            break;
        case 'HsvaStringColorPicker':
            // colord library doesn't provide .toHsvString() method yet.
            var hsva = _colord.colord(value).toHsv();
            convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
            break;
        default:
            convertedValue = _colord.colord(value).toHex();
            break;
    }
    return convertedValue;
};
exports.default = convertColorForPicker;

},{"colord":"ey5NZ","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"ey5NZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Colord", ()=>j
);
parcelHelpers.export(exports, "colord", ()=>w
);
parcelHelpers.export(exports, "extend", ()=>k
);
parcelHelpers.export(exports, "getFormat", ()=>I
);
parcelHelpers.export(exports, "random", ()=>E
);
var r = {
    grad: 0.9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}, t = function(r1) {
    return "string" == typeof r1 ? r1.length > 0 : "number" == typeof r1;
}, n = function(r1, t1, n1) {
    return (void 0) === t1 && (t1 = 0), (void 0) === n1 && (n1 = Math.pow(10, t1)), Math.round(n1 * r1) / n1 + 0;
}, e = function(r1, t1, n1) {
    return (void 0) === t1 && (t1 = 0), (void 0) === n1 && (n1 = 1), r1 > n1 ? n1 : r1 > t1 ? r1 : t1;
}, u = function(r1) {
    return (r1 = isFinite(r1) ? r1 % 360 : 0) > 0 ? r1 : r1 + 360;
}, a = function(r1) {
    return {
        r: e(r1.r, 0, 255),
        g: e(r1.g, 0, 255),
        b: e(r1.b, 0, 255),
        a: e(r1.a)
    };
}, o = function(r1) {
    return {
        r: n(r1.r),
        g: n(r1.g),
        b: n(r1.b),
        a: n(r1.a, 3)
    };
}, i = /^#([0-9a-f]{3,8})$/i, s = function(r1) {
    var t1 = r1.toString(16);
    return t1.length < 2 ? "0" + t1 : t1;
}, h = function(r1) {
    var t1 = r1.r, n1 = r1.g, e1 = r1.b, u1 = r1.a, a1 = Math.max(t1, n1, e1), o1 = a1 - Math.min(t1, n1, e1), i1 = o1 ? a1 === t1 ? (n1 - e1) / o1 : a1 === n1 ? 2 + (e1 - t1) / o1 : 4 + (t1 - n1) / o1 : 0;
    return {
        h: 60 * (i1 < 0 ? i1 + 6 : i1),
        s: a1 ? o1 / a1 * 100 : 0,
        v: a1 / 255 * 100,
        a: u1
    };
}, b = function(r1) {
    var t1 = r1.h, n1 = r1.s, e1 = r1.v, u1 = r1.a;
    t1 = t1 / 360 * 6, n1 /= 100, e1 /= 100;
    var a1 = Math.floor(t1), o1 = e1 * (1 - n1), i1 = e1 * (1 - (t1 - a1) * n1), s1 = e1 * (1 - (1 - t1 + a1) * n1), h1 = a1 % 6;
    return {
        r: 255 * [
            e1,
            i1,
            o1,
            o1,
            s1,
            e1
        ][h1],
        g: 255 * [
            s1,
            e1,
            e1,
            i1,
            o1,
            o1
        ][h1],
        b: 255 * [
            o1,
            o1,
            s1,
            e1,
            e1,
            i1
        ][h1],
        a: u1
    };
}, g = function(r1) {
    return {
        h: u(r1.h),
        s: e(r1.s, 0, 100),
        l: e(r1.l, 0, 100),
        a: e(r1.a)
    };
}, d = function(r1) {
    return {
        h: n(r1.h),
        s: n(r1.s),
        l: n(r1.l),
        a: n(r1.a, 3)
    };
}, f = function(r1) {
    var t1, n1, e1;
    return b((n1 = (t1 = r1).s, {
        h: t1.h,
        s: (n1 *= ((e1 = t1.l) < 50 ? e1 : 100 - e1) / 100) > 0 ? 2 * n1 / (e1 + n1) * 100 : 0,
        v: e1 + n1,
        a: t1.a
    }));
}, c = function(r1) {
    var t1, n1, e1, u1;
    return {
        h: (t1 = h(r1)).h,
        s: (u1 = (200 - (n1 = t1.s)) * (e1 = t1.v) / 100) > 0 && u1 < 200 ? n1 * e1 / 100 / (u1 <= 100 ? u1 : 200 - u1) * 100 : 0,
        l: u1 / 2,
        a: t1.a
    };
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = {
    string: [
        [
            function(r1) {
                var t1 = i.exec(r1);
                return t1 ? (r1 = t1[1]).length <= 4 ? {
                    r: parseInt(r1[0] + r1[0], 16),
                    g: parseInt(r1[1] + r1[1], 16),
                    b: parseInt(r1[2] + r1[2], 16),
                    a: 4 === r1.length ? n(parseInt(r1[3] + r1[3], 16) / 255, 2) : 1
                } : 6 === r1.length || 8 === r1.length ? {
                    r: parseInt(r1.substr(0, 2), 16),
                    g: parseInt(r1.substr(2, 2), 16),
                    b: parseInt(r1.substr(4, 2), 16),
                    a: 8 === r1.length ? n(parseInt(r1.substr(6, 2), 16) / 255, 2) : 1
                } : null : null;
            },
            "hex"
        ],
        [
            function(r1) {
                var t1 = v.exec(r1) || m.exec(r1);
                return t1 ? t1[2] !== t1[4] || t1[4] !== t1[6] ? null : a({
                    r: Number(t1[1]) / (t1[2] ? 100 / 255 : 1),
                    g: Number(t1[3]) / (t1[4] ? 100 / 255 : 1),
                    b: Number(t1[5]) / (t1[6] ? 100 / 255 : 1),
                    a: (void 0) === t1[7] ? 1 : Number(t1[7]) / (t1[8] ? 100 : 1)
                }) : null;
            },
            "rgb"
        ],
        [
            function(t1) {
                var n1 = l.exec(t1) || p.exec(t1);
                if (!n1) return null;
                var e1, u1, a1 = g({
                    h: (e1 = n1[1], u1 = n1[2], (void 0) === u1 && (u1 = "deg"), Number(e1) * (r[u1] || 1)),
                    s: Number(n1[3]),
                    l: Number(n1[4]),
                    a: (void 0) === n1[5] ? 1 : Number(n1[5]) / (n1[6] ? 100 : 1)
                });
                return f(a1);
            },
            "hsl"
        ]
    ],
    object: [
        [
            function(r1) {
                var n1 = r1.r, e1 = r1.g, u1 = r1.b, o1 = r1.a, i1 = (void 0) === o1 ? 1 : o1;
                return t(n1) && t(e1) && t(u1) ? a({
                    r: Number(n1),
                    g: Number(e1),
                    b: Number(u1),
                    a: Number(i1)
                }) : null;
            },
            "rgb"
        ],
        [
            function(r1) {
                var n1 = r1.h, e1 = r1.s, u1 = r1.l, a1 = r1.a, o1 = (void 0) === a1 ? 1 : a1;
                if (!t(n1) || !t(e1) || !t(u1)) return null;
                var i1 = g({
                    h: Number(n1),
                    s: Number(e1),
                    l: Number(u1),
                    a: Number(o1)
                });
                return f(i1);
            },
            "hsl"
        ],
        [
            function(r1) {
                var n1 = r1.h, a1 = r1.s, o1 = r1.v, i1 = r1.a, s1 = (void 0) === i1 ? 1 : i1;
                if (!t(n1) || !t(a1) || !t(o1)) return null;
                var h1 = function(r2) {
                    return {
                        h: u(r2.h),
                        s: e(r2.s, 0, 100),
                        v: e(r2.v, 0, 100),
                        a: e(r2.a)
                    };
                }({
                    h: Number(n1),
                    s: Number(a1),
                    v: Number(o1),
                    a: Number(s1)
                });
                return b(h1);
            },
            "hsv"
        ]
    ]
}, N = function(r1, t1) {
    for(var n1 = 0; n1 < t1.length; n1++){
        var e1 = t1[n1][0](r1);
        if (e1) return [
            e1,
            t1[n1][1]
        ];
    }
    return [
        null,
        void 0
    ];
}, x = function(r1) {
    return "string" == typeof r1 ? N(r1.trim(), y.string) : "object" == typeof r1 && null !== r1 ? N(r1, y.object) : [
        null,
        void 0
    ];
}, I = function(r1) {
    return x(r1)[1];
}, M = function(r1, t1) {
    var n1 = c(r1);
    return {
        h: n1.h,
        s: e(n1.s + 100 * t1, 0, 100),
        l: n1.l,
        a: n1.a
    };
}, H = function(r1) {
    return (299 * r1.r + 587 * r1.g + 114 * r1.b) / 1000 / 255;
}, $ = function(r1, t1) {
    var n1 = c(r1);
    return {
        h: n1.h,
        s: n1.s,
        l: e(n1.l + 100 * t1, 0, 100),
        a: n1.a
    };
}, j = function() {
    function r1(r2) {
        this.parsed = x(r2)[0], this.rgba = this.parsed || {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
    }
    return r1.prototype.isValid = function() {
        return null !== this.parsed;
    }, r1.prototype.brightness = function() {
        return n(H(this.rgba), 2);
    }, r1.prototype.isDark = function() {
        return H(this.rgba) < 0.5;
    }, r1.prototype.isLight = function() {
        return H(this.rgba) >= 0.5;
    }, r1.prototype.toHex = function() {
        var r2, t1, e2, u1, a1, i1;
        return r2 = o(this.rgba), t1 = r2.r, e2 = r2.g, u1 = r2.b, i1 = (a1 = r2.a) < 1 ? s(n(255 * a1)) : "", "#" + s(t1) + s(e2) + s(u1) + i1;
    }, r1.prototype.toRgb = function() {
        return o(this.rgba);
    }, r1.prototype.toRgbString = function() {
        var r2, t1, n1, e2, u1;
        return r2 = o(this.rgba), t1 = r2.r, n1 = r2.g, e2 = r2.b, (u1 = r2.a) < 1 ? "rgba(" + t1 + ", " + n1 + ", " + e2 + ", " + u1 + ")" : "rgb(" + t1 + ", " + n1 + ", " + e2 + ")";
    }, r1.prototype.toHsl = function() {
        return d(c(this.rgba));
    }, r1.prototype.toHslString = function() {
        var r2, t1, n1, e2, u1;
        return r2 = d(c(this.rgba)), t1 = r2.h, n1 = r2.s, e2 = r2.l, (u1 = r2.a) < 1 ? "hsla(" + t1 + ", " + n1 + "%, " + e2 + "%, " + u1 + ")" : "hsl(" + t1 + ", " + n1 + "%, " + e2 + "%)";
    }, r1.prototype.toHsv = function() {
        var r2;
        return r2 = h(this.rgba), {
            h: n(r2.h),
            s: n(r2.s),
            v: n(r2.v),
            a: n(r2.a, 3)
        };
    }, r1.prototype.invert = function() {
        var r2;
        return w({
            r: 255 - (r2 = this.rgba).r,
            g: 255 - r2.g,
            b: 255 - r2.b,
            a: r2.a
        });
    }, r1.prototype.saturate = function(r2) {
        return (void 0) === r2 && (r2 = 0.1), w(M(this.rgba, r2));
    }, r1.prototype.desaturate = function(r2) {
        return (void 0) === r2 && (r2 = 0.1), w(M(this.rgba, -r2));
    }, r1.prototype.grayscale = function() {
        return w(M(this.rgba, -1));
    }, r1.prototype.lighten = function(r2) {
        return (void 0) === r2 && (r2 = 0.1), w($(this.rgba, r2));
    }, r1.prototype.darken = function(r2) {
        return (void 0) === r2 && (r2 = 0.1), w($(this.rgba, -r2));
    }, r1.prototype.rotate = function(r2) {
        return (void 0) === r2 && (r2 = 15), this.hue(this.hue() + r2);
    }, r1.prototype.alpha = function(r2) {
        var t1;
        return "number" == typeof r2 ? w({
            r: (t1 = this.rgba).r,
            g: t1.g,
            b: t1.b,
            a: r2
        }) : n(this.rgba.a, 3);
    }, r1.prototype.hue = function(r2) {
        var t1 = c(this.rgba);
        return "number" == typeof r2 ? w({
            h: r2,
            s: t1.s,
            l: t1.l,
            a: t1.a
        }) : n(t1.h);
    }, r1.prototype.isEqual = function(r2) {
        return this.toHex() === w(r2).toHex();
    }, r1;
}(), w = function(r1) {
    return r1 instanceof j ? r1 : new j(r1);
}, S = [], k = function(r1) {
    r1.forEach(function(r2) {
        S.indexOf(r2) < 0 && (r2(j, y), S.push(r2));
    });
}, E = function() {
    return new j({
        r: 255 * Math.random(),
        g: 255 * Math.random(),
        b: 255 * Math.random()
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3tQvJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colord = require("colord");
/**
 * Convert the value for the customizer.
 *
 * @param {string|Object} value The value to be converted.
 * @param {string} pickerComponent The picker component name.
 *
 * @returns {string} The converted value.
 */ var convertColorForCustomizer = function(value, pickerComponent, formComponent) {
    var rgba;
    var hsv;
    var hsva;
    var convertedValue;
    switch(pickerComponent){
        /**
     * The HexColorPicker is used by these condition:
     * 1. When formComponent is defined with HexColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is not set or set to false (the old way).
     */ case 'HexColorPicker':
            convertedValue = _colord.colord(value).toHex();
            break;
        case 'RgbColorPicker':
            convertedValue = _colord.colord(value).toRgb();
            delete convertedValue.a;
            break;
        case 'RgbStringColorPicker':
            convertedValue = _colord.colord(value).toRgbString();
            break;
        /**
     * The RgbaColorPicker is used by these condition:
     * 1. When formComponent is defined with RgbaColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is set to true and "save_as" value is "array".
     */ case 'RgbaColorPicker':
            rgba = _colord.colord(value).toRgb();
            convertedValue = rgba;
            if (rgba.a == 1) // When it uses the 2nd condition above, then the expected value is "hex".
            {
                if (!formComponent) convertedValue = _colord.colord(value).toHex();
            }
            break;
        /**
     * The RgbaStringColorPicker is used by these condition:
     * 1. When formComponent is defined with RgbaColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is set to true without the "save_as" choice (old way) / "save_as" choice is set to false.
     */ case 'RgbaStringColorPicker':
            rgba = _colord.colord(value).toRgb();
            if (rgba.a < 1) convertedValue = _colord.colord(value).toRgbString();
            else // When it uses the 2nd condition above, then the expected value is "hex".
            if (!formComponent) convertedValue = _colord.colord(value).toHex();
            else {
                convertedValue = _colord.colord(value).toRgbString(); // Force to set the alpha channel value.
                if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
                    convertedValue = convertedValue.replace('rgb', 'rgba');
                    convertedValue = convertedValue.replace(')', ', 1)');
                }
            }
            break;
        case 'HslColorPicker':
            convertedValue = _colord.colord(value).toHsl();
            delete convertedValue.a;
            break;
        case 'HslStringColorPicker':
            convertedValue = _colord.colord(value).toHslString();
            break;
        case 'HslaColorPicker':
            convertedValue = _colord.colord(value).toHsl();
            break;
        case 'HslaStringColorPicker':
            convertedValue = _colord.colord(value).toHslString(); // Force to set the alpha channel value.
            if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
                convertedValue = convertedValue.replace('hsl', 'hsla');
                convertedValue = convertedValue.replace(')', ', 1)');
            }
            break;
        case 'HsvColorPicker':
            convertedValue = _colord.colord(value).toHsv();
            delete convertedValue.a;
            break;
        /**
     * The colord library doesn't provide .toHsvString() method yet.
     * This manual value-building will apply to "HsvStringColorPicker" and "HsvaStringColorPicker" stuff below.
     */ case 'HsvStringColorPicker':
            hsv = _colord.colord(value).toHsv();
            convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
            break;
        case 'HsvaColorPicker':
            convertedValue = _colord.colord(value).toHsv();
            break;
        case 'HsvaStringColorPicker':
            hsva = _colord.colord(value).toHsv();
            convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
            break;
        default:
            convertedValue = _colord.colord(value).toHex();
            break;
    }
    return convertedValue;
};
exports.default = convertColorForCustomizer;

},{"colord":"ey5NZ","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"hudza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colord = require("colord");
/**
 * Convert the value for the color input.
 *
 * @param {string|Object} value The value to be converted.
 * @param {string} pickerComponent The picker component name.
 *
 * @returns {string} The converted value.
 */ var convertColorForInput = function(value, pickerComponent, formComponent) {
    var rgba;
    var hsv;
    var hsva;
    var convertedValue;
    switch(pickerComponent){
        /**
     * The HexColorPicker is used by these condition:
     * 1. When formComponent is defined with HexColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is not set or set to false (the old way).
     */ case 'HexColorPicker':
            convertedValue = _colord.colord(value).toHex();
            break;
        case 'RgbColorPicker':
            convertedValue = _colord.colord(value).toRgbString();
            break;
        case 'RgbStringColorPicker':
            convertedValue = _colord.colord(value).toRgbString();
            break;
        /**
     * The RgbaColorPicker is used by these condition:
     * 1. When formComponent is defined with RgbaColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is set to true and "save_as" value is "array".
     */ case 'RgbaColorPicker':
            rgba = _colord.colord(value).toRgb();
            if (rgba.a < 1) convertedValue = _colord.colord(value).toRgbString();
            else // When it uses the 2nd condition above, then the expected value is "hex".
            if (!formComponent) convertedValue = _colord.colord(value).toHex();
            else {
                convertedValue = _colord.colord(value).toRgbString(); // Force to set the alpha value.
                if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
                    convertedValue = convertedValue.replace('rgb', 'rgba');
                    convertedValue = convertedValue.replace(')', ', 1)');
                }
            }
            break;
        /**
     * The RgbaStringColorPicker is used by these condition:
     * 1. When formComponent is defined with RgbaColorPicker as the value.
     * 2. When formComponent is not defined but the "alpha" choice is set to true without the "save_as" choice (old way) / "save_as" choice is set to false.
     */ case 'RgbaStringColorPicker':
            rgba = _colord.colord(value).toRgb(); // When it uses the 2nd condition above, then the expected value is "hex".
            if (rgba.a == 1 && !formComponent) convertedValue = _colord.colord(value).toHex();
            else {
                convertedValue = _colord.colord(value).toRgbString(); // Force to set the alpha value.
                if (convertedValue.includes('rgb') && !convertedValue.includes('rgba')) {
                    convertedValue = convertedValue.replace('rgb', 'rgba');
                    convertedValue = convertedValue.replace(')', ', 1)');
                }
            }
            break;
        case 'HslColorPicker':
            convertedValue = _colord.colord(value).toHslString();
            break;
        case 'HslStringColorPicker':
            convertedValue = _colord.colord(value).toHslString();
            break;
        case 'HslaColorPicker':
            convertedValue = _colord.colord(value).toHslString(); // Force to set the alpha value.
            if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
                convertedValue = convertedValue.replace('hsl', 'hsla');
                convertedValue = convertedValue.replace(')', ', 1)');
            }
            break;
        case 'HslaStringColorPicker':
            convertedValue = _colord.colord(value).toHslString(); // Force to set the alpha value.
            if (convertedValue.includes('hsl') && !convertedValue.includes('hsla')) {
                convertedValue = convertedValue.replace('hsl', 'hsla');
                convertedValue = convertedValue.replace(')', ', 1)');
            }
            break;
        /**
     * The colord library doesn't provide .toHsvString() method yet.
     * This manual value-building will apply to "hsv" and "hsva" stuff below.
     */ case 'HsvColorPicker':
            hsv = _colord.colord(value).toHsv();
            convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
            break;
        case 'HsvStringColorPicker':
            hsv = _colord.colord(value).toHsv();
            convertedValue = 'hsv(' + hsv.h + ', ' + hsv.s + '%, ' + hsv.v + '%)';
            break;
        case 'HsvaColorPicker':
            hsva = _colord.colord(value).toHsv();
            convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
            break;
        case 'HsvaStringColorPicker':
            hsva = _colord.colord(value).toHsv();
            convertedValue = 'hsva(' + hsva.h + ', ' + hsva.s + '%, ' + hsva.v + '%, ' + hsva.a + ')';
            break;
        default:
            convertedValue = _colord.colord(value).toHex();
            break;
    }
    return convertedValue;
};
exports.default = convertColorForInput;

},{"colord":"ey5NZ","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN"}],"3U1UY":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$83ae = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$83ae.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _s = $RefreshSig$();
/**
 * Code was taken and then modified from https://codesandbox.io/s/opmco?file=/src/useClickOutside.js:0-1192
 * It was improved version of https://usehooks.com/useOnClickOutside/
 */ var useClickOutside = function(inputRef, pickerRef, handler) {
    _s();
    _react.useEffect(function() {
        var startedWhenMounted = false;
        var startedInside = false;
        var listener = function(event) {
            // Do nothing if `mousedown` or `touchstart` started either inside inputRef or pickerRef element
            if (!startedWhenMounted || startedInside) return; // Do nothing if clicking inputRef's element or descendent elements
            if (!inputRef.current || inputRef.current.contains(event.target)) return; // Do nothing if clicking pickerRef's element or descendent elements
            if (!pickerRef.current || pickerRef.current.contains(event.target)) return;
            handler();
        };
        var validateEventStart = function(event) {
            startedWhenMounted = inputRef.current && pickerRef.current;
            startedInside = inputRef.current && inputRef.current.contains(event.target) || pickerRef.current && pickerRef.current.contains(event.target);
        };
        document.addEventListener("mousedown", validateEventStart);
        document.addEventListener("touchstart", validateEventStart);
        document.addEventListener("click", listener);
        return function() {
            document.removeEventListener("mousedown", validateEventStart);
            document.removeEventListener("touchstart", validateEventStart);
            document.removeEventListener("click", listener);
        };
    }, [
        inputRef,
        pickerRef,
        handler
    ]);
};
_s(useClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
exports.default = useClickOutside;

  $parcel$ReactRefreshHelpers$83ae.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"bE4sN","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1KDe"}],"3m4sU":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$16d2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$16d2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _s = $RefreshSig$();
var useFocusOutside = function(ref, handler) {
    _s();
    _react.useEffect(function() {
        var listener = function(e) {
            // Do nothing if the component hasn't been mounted.
            if (!ref.current) return; // Do nothing if the focused element is inside the ref or the ref it self.
            if (ref.current.contains(e.target)) return;
            handler();
        };
        document.addEventListener("focus", listener, true);
        return function() {
            document.removeEventListener("focus", listener, true);
        };
    }, [
        ref,
        handler
    ]);
};
_s(useFocusOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");
exports.default = useFocusOutside;

  $parcel$ReactRefreshHelpers$16d2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"bE4sN","@parcel/transformer-js/src/esmodule-helpers.js":"bdniN","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"d1KDe"}]},["jAg0Z","ecPDr","7Y5mU"], "7Y5mU", "parcelRequire4303")

//# sourceMappingURL=control.js.map

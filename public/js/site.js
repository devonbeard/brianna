/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/accordion.js":
/*!**********************************************!*\
  !*** ./resources/js/components/accordion.js ***!
  \**********************************************/
/***/ (() => {

function initAccordion(accordionElem) {
  function handlePanelClick(event) {
    togglePanel(event.currentTarget);
  }

  function togglePanel(panel) {
    var panelParent = panel.parentElement;
    panelParent.classList.toggle('is-active');
  }

  var allAccordionBtns = document.getElementsByClassName(accordionElem);

  for (var i = 0, len = allAccordionBtns.length; i < len; i++) {
    allAccordionBtns[i].addEventListener('click', handlePanelClick);
  }
}

initAccordion('js-accordion-btn');

/***/ }),

/***/ "./resources/js/components/animate-images.js":
/*!***************************************************!*\
  !*** ./resources/js/components/animate-images.js ***!
  \***************************************************/
/***/ (() => {

/*
 * Animate Images when in viewport
 *
 */
document.addEventListener('DOMContentLoaded', function () {
  var animateImages = [].slice.call(document.querySelectorAll('.js-animate-img'));

  if ('IntersectionObserver' in window) {
    var animateImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var animateImage = entry.target;
          animateImage.classList.add('fadeInUp');
          animateImage.classList.remove('hidden');
          animateImageObserver.unobserve(animateImage);
        }
      });
    }, {
      rootMargin: '0px 0px -125px 0px'
    });
    animateImages.forEach(function (animateImage) {
      animateImageObserver.observe(animateImage);
    });
  } else {// Possibly fall back to a more compatible method here
  }
});

/***/ }),

/***/ "./resources/js/components/lazy-bg-asset.js":
/*!**************************************************!*\
  !*** ./resources/js/components/lazy-bg-asset.js ***!
  \**************************************************/
/***/ (() => {

/*
 * Lazy Load Background Images when in viewport
 *
 */
function BackgroundNode(_ref) {
  var node = _ref.node,
      loadedClassName = _ref.loadedClassName;
  var src = node.getAttribute('data-background-image-url');

  var show = function show(onComplete) {
    requestAnimationFrame(function () {
      node.style.backgroundImage = "url(".concat(src, ")");
      node.classList.add(loadedClassName);
      onComplete();
    });
  };

  return {
    node: node,
    // onComplete is called after the image is done loading.
    load: function load(onComplete) {
      var img = new Image();
      img.onload = show(onComplete);
      img.src = src;
    }
  };
}

var defaultOptions = {
  selector: '[data-background-image-url]',
  loadedClassName: 'loaded'
};

function BackgroundLazyLoader() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions,
      selector = _ref2.selector,
      loadedClassName = _ref2.loadedClassName;

  var nodes = [].slice.apply(document.querySelectorAll(selector)).map(function (node) {
    return new BackgroundNode({
      node: node,
      loadedClassName: loadedClassName
    });
  });

  var callback = function callback(entries, observer) {
    entries.forEach(function (_ref3) {
      var target = _ref3.target,
          isIntersecting = _ref3.isIntersecting;

      if (!isIntersecting) {
        return;
      }

      var obj = nodes.find(function (it) {
        return it.node.isSameNode(target);
      });

      if (obj) {
        obj.load(function () {
          // Unobserve the node:
          observer.unobserve(target); // Remove this node from our list:

          nodes = nodes.filter(function (n) {
            return !n.node.isSameNode(target);
          }); // If there are no remaining unloaded nodes,
          // disconnect the observer since we don't need it anymore.

          if (!nodes.length) {
            observer.disconnect();
          }
        });
      }
    });
  };

  var observer = new IntersectionObserver(callback);
  nodes.forEach(function (node) {
    return observer.observe(node.node);
  });
}

BackgroundLazyLoader();

/***/ }),

/***/ "./resources/js/components/menu.js":
/*!*****************************************!*\
  !*** ./resources/js/components/menu.js ***!
  \*****************************************/
/***/ (() => {

var header = document.querySelector('.js-header');
var logo = document.querySelector('.js-logo');
var mobileNavBtn = document.querySelector('.js-mobile-menu-btn');
var mobileNavOpenIcon = document.querySelector('.js-mobile-open-icon');
var mobileNavCloseIcon = document.querySelector('.js-mobile-close-icon');
var mobileNav = document.querySelector('.js-mobile-nav');

if (mobileNavBtn) {
  mobileNavBtn.addEventListener('click', function () {
    // header.classList.toggle('bg-primary');
    logo.classList.toggle('c-black');
    logo.classList.toggle('c-white');
    mobileNav.classList.toggle('dn');
    mobileNavOpenIcon.classList.toggle('db');
    mobileNavOpenIcon.classList.toggle('dn');
    mobileNavCloseIcon.classList.toggle('dn');
  });
}

var menuButtons = document.querySelectorAll('.js-subnav');

var _loop = function _loop(i, len) {
  menuButtons[i].addEventListener('click', function (e) {
    var childSubmenu = menuButtons[i].parentElement.querySelector('.js-child-nav');
    e.preventDefault();
    menuButtons[i].classList.toggle('is-active');
    menuButtons[i].classList.toggle('is-toggled');
    childSubmenu.classList.toggle('dn');
  });
};

for (var i = 0, len = menuButtons.length; i < len; i++) {
  _loop(i, len);
}

document.addEventListener('click', function (evt) {
  var flyoutElement = document.querySelector('.js-child-nav');
  var subnav = document.querySelector('.js-subnav');
  var targetElement = evt.target; // clicked element

  do {
    if (targetElement == flyoutElement || targetElement == subnav) {
      // This is a click inside. Do nothing, just return.
      return;
    } // Go up the DOM


    targetElement = targetElement.parentNode;
  } while (targetElement); // This is a click outside.
  // console.log('Clicked outside!');


  flyoutElement.classList.add('dn');
});

/***/ }),

/***/ "./resources/js/site.js":
/*!******************************!*\
  !*** ./resources/js/site.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./resources/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animate_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/animate-images */ "./resources/js/components/animate-images.js");
/* harmony import */ var _components_animate_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_animate_images__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ "./resources/js/components/accordion.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_lazy_bg_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lazy-bg-asset */ "./resources/js/components/lazy-bg-asset.js");
/* harmony import */ var _components_lazy_bg_asset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_lazy_bg_asset__WEBPACK_IMPORTED_MODULE_3__);
// This is all you.
__webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");






/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/***/ (() => {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}

/**
 * Returns the embedding frame element, if any.
 * @param {!Document} doc
 * @return {!Element}
 */
function getFrameElement(doc) {
  try {
    return doc.defaultView && doc.defaultView.frameElement || null;
  } catch (e) {
    // Ignore the error.
    return null;
  }
}

/**
 * A local reference to the root document.
 */
var document = (function(startDoc) {
  var doc = startDoc;
  var frame = getFrameElement(doc);
  while (frame) {
    doc = frame.ownerDocument;
    frame = getFrameElement(doc);
  }
  return doc;
})(window.document);

/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];

/**
 * The signal updater for cross-origin intersection. When not null, it means
 * that the polyfill is configured to work in a cross-origin mode.
 * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
var crossOriginUpdater = null;

/**
 * The current cross-origin intersection. Only used in the cross-origin mode.
 * @type {DOMRect|ClientRect}
 */
var crossOriginRect = null;


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = ensureDOMRect(entry.rootBounds);
  this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
  this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (
    options.root &&
    options.root.nodeType != 1 &&
    options.root.nodeType != 9
  ) {
    throw new Error('root must be a Document or Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');

  /** @private @const {!Array<!Document>} */
  this._monitoringDocuments = [];
  /** @private @const {!Array<function()>} */
  this._monitoringUnsubscribes = [];
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Sets up the polyfill in the cross-origin mode. The result is the
 * updater function that accepts two arguments: `boundingClientRect` and
 * `intersectionRect` - just as these fields would be available to the
 * parent via `IntersectionObserverEntry`. This function should be called
 * each time the iframe receives intersection information from the parent
 * window, e.g. via messaging.
 * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
 */
IntersectionObserver._setupCrossOriginUpdater = function() {
  if (!crossOriginUpdater) {
    /**
     * @param {DOMRect|ClientRect} boundingClientRect
     * @param {DOMRect|ClientRect} intersectionRect
     */
    crossOriginUpdater = function(boundingClientRect, intersectionRect) {
      if (!boundingClientRect || !intersectionRect) {
        crossOriginRect = getEmptyRect();
      } else {
        crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
      }
      registry.forEach(function(observer) {
        observer._checkForIntersections();
      });
    };
  }
  return crossOriginUpdater;
};


/**
 * Resets the cross-origin mode.
 */
IntersectionObserver._resetCrossOriginUpdater = function() {
  crossOriginUpdater = null;
  crossOriginRect = null;
};


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections(target.ownerDocument);
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {
        return item.element != target;
      });
  this._unmonitorIntersections(target.ownerDocument);
  if (this._observationTargets.length == 0) {
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorAllIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function(doc) {
  var win = doc.defaultView;
  if (!win) {
    // Already destroyed.
    return;
  }
  if (this._monitoringDocuments.indexOf(doc) != -1) {
    // Already monitoring.
    return;
  }

  // Private state for monitoring.
  var callback = this._checkForIntersections;
  var monitoringInterval = null;
  var domObserver = null;

  // If a poll interval is set, use polling instead of listening to
  // resize and scroll events or DOM mutations.
  if (this.POLL_INTERVAL) {
    monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
  } else {
    addEvent(win, 'resize', callback, true);
    addEvent(doc, 'scroll', callback, true);
    if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
      domObserver = new win.MutationObserver(callback);
      domObserver.observe(doc, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  }

  this._monitoringDocuments.push(doc);
  this._monitoringUnsubscribes.push(function() {
    // Get the window object again. When a friendly iframe is destroyed, it
    // will be null.
    var win = doc.defaultView;

    if (win) {
      if (monitoringInterval) {
        win.clearInterval(monitoringInterval);
      }
      removeEvent(win, 'resize', callback, true);
    }

    removeEvent(doc, 'scroll', callback, true);
    if (domObserver) {
      domObserver.disconnect();
    }
  });

  // Also monitor the parent.
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._monitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
  var index = this._monitoringDocuments.indexOf(doc);
  if (index == -1) {
    return;
  }

  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;

  // Check if any dependent targets are still remaining.
  var hasDependentTargets =
      this._observationTargets.some(function(item) {
        var itemDoc = item.element.ownerDocument;
        // Target is in this context.
        if (itemDoc == doc) {
          return true;
        }
        // Target is nested in this context.
        while (itemDoc && itemDoc != rootDoc) {
          var frame = getFrameElement(itemDoc);
          itemDoc = frame && frame.ownerDocument;
          if (itemDoc == doc) {
            return true;
          }
        }
        return false;
      });
  if (hasDependentTargets) {
    return;
  }

  // Unsubscribe.
  var unsubscribe = this._monitoringUnsubscribes[index];
  this._monitoringDocuments.splice(index, 1);
  this._monitoringUnsubscribes.splice(index, 1);
  unsubscribe();

  // Also unmonitor the parent.
  if (doc != rootDoc) {
    var frame = getFrameElement(doc);
    if (frame) {
      this._unmonitorIntersections(frame.ownerDocument);
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @param {!Document} doc
 * @private
 */
IntersectionObserver.prototype._unmonitorAllIntersections = function() {
  var unsubscribes = this._monitoringUnsubscribes.slice(0);
  this._monitoringDocuments.length = 0;
  this._monitoringUnsubscribes.length = 0;
  for (var i = 0; i < unsubscribes.length; i++) {
    unsubscribes[i]();
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  if (!this.root && crossOriginUpdater && !crossOriginRect) {
    // Cross origin monitoring, but no initial data available yet.
    return;
  }

  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, targetRect, rootRect);

    var rootBounds = null;
    if (!this._rootContainsTarget(target)) {
      rootBounds = getEmptyRect();
    } else if (!crossOriginUpdater || this.root) {
      rootBounds = rootRect;
    }

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootBounds,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} targetRect The bounding rect of the target.
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, targetRect, rootRect) {
  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot && parent) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return null;

    if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
      atRoot = true;
      if (parent == this.root || parent == document) {
        if (crossOriginUpdater && !this.root) {
          if (!crossOriginRect ||
              crossOriginRect.width == 0 && crossOriginRect.height == 0) {
            // A 0-size cross-origin intersection means no-intersection.
            parent = null;
            parentRect = null;
            intersectionRect = null;
          } else {
            parentRect = crossOriginRect;
          }
        } else {
          parentRect = rootRect;
        }
      } else {
        // Check if there's a frame that can be navigated to.
        var frame = getParentNode(parent);
        var frameRect = frame && getBoundingClientRect(frame);
        var frameIntersect =
            frame &&
            this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
        if (frameRect && frameIntersect) {
          parent = frame;
          parentRect = convertFromParentRect(frameRect, frameIntersect);
        } else {
          parent = null;
          intersectionRect = null;
        }
      }
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      var doc = parent.ownerDocument;
      if (parent != doc.body &&
          parent != doc.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);
    }
    if (!intersectionRect) break;
    parent = parent && getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {ClientRect} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root && !isDoc(this.root)) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var doc = isDoc(this.root) ? this.root : document;
    var html = doc.documentElement;
    var body = doc.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {DOMRect|ClientRect} rect The rect object to expand.
 * @return {ClientRect} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  var rootDoc =
    (this.root && (this.root.ownerDocument || this.root)) || document;
  return (
    containsDeep(rootDoc, target) &&
    (!this.root || rootDoc == target.ownerDocument)
  );
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object|?ClientRect} The intersection rect or undefined if no
 *     intersection is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  } || null;
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {ClientRect} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}


/**
 * Ensure that the result has all of the necessary fields of the DOMRect.
 * Specifically this ensures that `x` and `y` fields are set.
 *
 * @param {?DOMRect|?ClientRect} rect
 * @return {?DOMRect}
 */
function ensureDOMRect(rect) {
  // A `DOMRect` object has `x` and `y` fields.
  if (!rect || 'x' in rect) {
    return rect;
  }
  // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
  // for internally calculated Rect objects. For the purposes of
  // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
  // for these fields.
  return {
    top: rect.top,
    y: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    right: rect.right,
    width: rect.width,
    height: rect.height
  };
}


/**
 * Inverts the intersection and bounding rect from the parent (frame) BCR to
 * the local BCR space.
 * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
 * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
 * @return {ClientRect} The local root bounding rect for the parent's children.
 */
function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
  var top = parentIntersectionRect.top - parentBoundingRect.top;
  var left = parentIntersectionRect.left - parentBoundingRect.left;
  return {
    top: top,
    left: left,
    height: parentIntersectionRect.height,
    width: parentIntersectionRect.width,
    bottom: top + parentIntersectionRect.height,
    right: left + parentIntersectionRect.width
  };
}


/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (node.nodeType == /* DOCUMENT */ 9 && node != document) {
    // If this node is a document node, look for the embedding frame.
    return getFrameElement(node);
  }

  // If the parent has element that is assigned through shadow root slot
  if (parent && parent.assignedSlot) {
    parent = parent.assignedSlot.parentNode
  }

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  return parent;
}

/**
 * Returns true if `node` is a Document.
 * @param {!Node} node
 * @returns {boolean}
 */
function isDoc(node) {
  return node && node.nodeType === 9;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),

/***/ "./resources/css/site.css":
/*!********************************!*\
  !*** ./resources/css/site.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0,
/******/ 			"css/site": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/site"], () => (__webpack_require__("./resources/js/site.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/site"], () => (__webpack_require__("./resources/css/site.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
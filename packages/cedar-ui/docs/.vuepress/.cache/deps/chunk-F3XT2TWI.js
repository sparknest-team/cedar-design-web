import {
  i
} from "./chunk-M4KC7NU3.js";

// ../../node_modules/.pnpm/scroll-into-view-if-needed@2.2.31/node_modules/scroll-into-view-if-needed/es/index.js
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? i(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target, computeOptions), computeOptions.behavior);
}
var es_default = scrollIntoView;

export {
  es_default
};
//# sourceMappingURL=chunk-F3XT2TWI.js.map

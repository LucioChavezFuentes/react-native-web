/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

import getBoundingClientRect from '../../modules/getBoundingClientRect';
import setValueForStyles from '../../modules/setValueForStyles';

const getRect = (node) => {
  // Unlike the DOM's getBoundingClientRect, React Native layout measurements
  // for "height" and "width" ignore scale transforms.
  // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
  const { x, y, top, left } = getBoundingClientRect(node);
  const width = node.offsetWidth;
  const height = node.offsetHeight;
  return { x, y, width, height, top, left };
};

const getRectNoTransform = (node) => {
  const height = node.offsetHeight;
  const width = node.offsetWidth;
  let left = node.offsetLeft;
  let top = node.offsetTop;
  node = node.offsetParent;

  while (node && node.nodeType === 1 /* Node.ELEMENT_NODE */) {
    left += node.offsetLeft + node.clientLeft - node.scrollLeft;
    top += node.offsetTop + node.clientTop - node.scrollTop;
    node = node.offsetParent;
  }

  top -= window.scrollY;
  left -= window.scrollX;

  return { height, left, top, width };
};

const measureLayout = (node, relativeToNativeNode, callback) => {
  const relativeNode = relativeToNativeNode || (node && node.parentNode);
  if (node && relativeNode) {
    setTimeout(() => {
      const relativeRect = getBoundingClientRect(relativeNode);
      const { height, left, top, width } = getRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;

      //Extends layout props only for testing comparison
      const relativeRectNoTransform = getRectNoTransform(relativeNode);
      const { left: leftNoTransform, top: topNoTransform } =
        getRectNoTransform(node);

      // console.log('Rect TopFamily relativeNode', 'top:', relativeRectNoTransform.top, 'left:', relativeRectNoTransform.left)
      // console.log('Rect TopFamily Node', 'top:', topNoTransform, 'left:', leftNoTransform)
      const xNoTransform = leftNoTransform - relativeRectNoTransform.left;
      const yNoTransform = topNoTransform - relativeRectNoTransform.top;
      callback(
        x,
        y,
        width,
        height,
        left,
        top,
        xNoTransform,
        yNoTransform,
        leftNoTransform,
        topNoTransform
      );
    }, 0);
  }
};

const focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};

const UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },

  focus(node) {
    try {
      const name = node.nodeName;
      // A tabIndex of -1 allows element to be programmatically focused but
      // prevents keyboard focus, so we don't want to set the value on elements
      // that support keyboard focus by default.
      if (
        node.getAttribute('tabIndex') == null &&
        focusableElements[name] == null
      ) {
        node.setAttribute('tabIndex', '-1');
      }
      node.focus();
    } catch (err) {}
  },

  measure(node, callback) {
    measureLayout(node, null, callback);
  },

  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        const { height, left, top, width } = getRect(node);
        const { left: leftNoTransform, top: topNoTransform } =
          getRectNoTransform(node);
        callback(left, top, leftNoTransform, topNoTransform, width, height);
      }, 0);
    }
  },

  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },

  updateView(node, props) {
    for (const prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      const value = props[prop];
      switch (prop) {
        case 'style': {
          setValueForStyles(node, value);
          break;
        }
        case 'class':
        case 'className': {
          node.setAttribute('class', value);
          break;
        }
        case 'text':
        case 'value':
          // native platforms use `text` prop to replace text input value
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },

  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },

  // mocks
  setLayoutAnimationEnabledExperimental() {}
};

export default UIManager;

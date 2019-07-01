const HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0',
};

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'font-family',
  'font-weight',
  'font-size',
  'font-style',
  'tab-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'box-sizing',
];

export const [onNextFrame, clearNextFrameAction] =
  window.requestAnimationFrame
    ? process.env.NODE_ENV !== 'development'
      ? [window.requestAnimationFrame, window.cancelAnimationFrame]
      : [
        window.requestAnimationFrame.bind(window),
        window.cancelAnimationFrame.bind(window),
      ]
    : [setTimeout, clearTimeout];

// 拿到真实 textarea 的所有 style
function calculateNodeStyling(node: HTMLTextAreaElement) {
  const style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  return SIZING_STYLE.reduce((obj: any, name) => {
    obj[name] = style.getPropertyValue(name);
    return obj;
  }, {});
}

// 拷贝 真实 textarea 的 style 到 ghostTextarea
export const copyStyle = (toNode: HTMLTextAreaElement, fromNode: HTMLTextAreaElement): void => {

  const nodeStyling = calculateNodeStyling(fromNode);

  if (nodeStyling === null) {
    return null;
  }

  Object.keys(nodeStyling).forEach(key => {
    (toNode.style as any)[key] = nodeStyling[key];
  });

  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(key => {
    toNode.style.setProperty(
      key,
      (HIDDEN_TEXTAREA_STYLE as any)[key],
      'important',
    );
  });
}

export const calculateGhostTextareaHeight = function (ghostTextarea: HTMLTextAreaElement, textarea: HTMLTextAreaElement) {
  if (!ghostTextarea) {
    return;
  }
  ghostTextarea.value = textarea.value || textarea.placeholder || 'x'
  return ghostTextarea.scrollHeight;
}


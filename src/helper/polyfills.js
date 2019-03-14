const ready = fn => {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

const extend = out => {
  out = out || {}

  /* global arguments */
  for (let i = 1; i < arguments.length; i++) {
    if (!arguments[i]) continue

    for (let key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key]
    }
  }

  return out
}

const addClass = (el, className) => {
  if (el.classList) el.classList.add(className)
  else el.className += ' ' + className
}

export { ready, extend, addClass }

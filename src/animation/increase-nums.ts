interface IRange {
  from: number;
  to: number;
}

type fmtFn = (val: number) => number;

interface IOpts {
  ms: number;
  fmt: fmtFn;
}


// Рендер
function render($el, val, fmt) {
  $el.innerText = fmt(val);
}

// Расчет текущего значения
export function next({ from, to }, { ms, duration }) {
  if (duration >= ms) return to;
  if (duration === 0) return from;

  return from + (to - from) * (duration / ms);
}

/**
 * @param {DOMNode} $el
 * @param { duration, fmt } opts: duration - длительность в ms; fmt - форматирование отображаемого значения
 * 
 * @return cancel - функция остановки анимации
 */
export function increaseNums($el: HTMLElement, { from, to }: IRange, { ms = 1000, fmt = (val) => val }: IOpts) {
  let canceled: boolean = false;
  const since = Date.now();

  function tick() {
    const duration = Date.now() - since;
    const val = next({ from, to }, { ms, duration });

    if (canceled || Math.abs(val) > Math.abs(to)) return;

    requestAnimationFrame(() => {
      render($el, val, fmt);
      tick();
    });
  }

  tick();

  return function cancel() {
    canceled = true;
  }
}
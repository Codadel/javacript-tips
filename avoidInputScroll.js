// avoid scroll on inputs
window.addEventListener('wheel', e => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'INPUT') {
    target.blur();
  }
});

// avoid scroll on inputs type number
window.addEventListener('wheel', e => {
  const target = e.target as HTMLInputElement;
  if (target.tagName === 'INPUT' && target.type === 'number') {
    target.blur();
  }
});
